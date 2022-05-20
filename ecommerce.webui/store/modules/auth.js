import request from '@/services/request'
import Cookies from 'js-cookie'

const state = {
    isLoggedIn : false,
    isAdmin : false, 
}

const getters = {
    isAuthenticated(state){
        return state.isLoggedIn
    },
    getIsAdmin(state){
        return state.isAdmin
    }
}

const mutations = {
    setIsLoggedIn(state, data){
        state.isLoggedIn = data
    },
    setIsAdmin(state, data){
        state.isAdmin = data
    }, 
}

const actions = { 
    initAuth(vuexContext, req){ 
        let token;
        let isAdmin;
        // console.log("req.headers.cookie ", req.headers.cookie)
        if (req) {
            // Server Üzerinde Calisiyoruz....
            if (!req.headers.cookie) {
                return;
            }
            isAdmin = req.headers.cookie.split(";").find(c => c.trim().startsWith("isAdmin="))
            token = req.headers.cookie.split(";").find(c => c.trim().startsWith("bearerToken="))
            if (isAdmin) {
                isAdmin = isAdmin.split("=")[1]
                vuexContext.commit('setIsAdmin', isAdmin)
            }
            if (token) {
                token = token.split("=")[1]
                vuexContext.commit('setIsLoggedIn', true)
            }
            // console.log("req.headers.cookie ", token)
        }
        else{
            // clientda çalışıyor
            token = Cookies.get('bearerToken')
            isAdmin = Cookies.get('isAdmin')
            if (isAdmin) {
                vuexContext.commit('setIsAdmin', isAdmin)
            }
            if (token) {
                vuexContext.commit('setIsLoggedIn', true)
            }
        }
    },
    async registerAction({ commit }, inputData) {
        // console.log("inputData ", inputData)
        const email = inputData.email
        const password = inputData.password
        const password_confirmation = inputData.password_confirmation
        const name = inputData.name
        const isAdmin = 0
        const { data, error } = await request(`/register`, 'post', { name, email, password, password_confirmation, isAdmin})

        if (data) {
            var boolAdmin = false
            var user = data.user
            let id = user.id
            console.log("id ", id)
            if(user.isAdmin == 1){
                boolAdmin = true
            }

            Cookies.set('bearerToken', data.token)
            Cookies.set('isAdmin', boolAdmin)
            Cookies.set('id', id)
            commit('setIsAdmin', boolAdmin)
            this.$router.push("/products")
            // console.log(data, error)
        } 
    },
    async loginAction({ commit }, inputData) {
        const email = inputData.email
        const password = inputData.password
        const { data, error } = await request(`/login`, 'post', { email, password  })

        if (data) {
            var boolAdmin = false
            var user = data.user
            let id = user.id
            if(user.isAdmin == 1){
                boolAdmin = true
            }
            Cookies.set('bearerToken', data.token)
            Cookies.set('isAdmin', boolAdmin)
            Cookies.set('id', id)
            commit('setIsAdmin', boolAdmin)
            this.$router.push("/products")
            // commit('setAddProjectAction', { ...response })
            // console.log("res: ",data, error)
        }
        
    },
}

export default {
    state, getters, mutations, actions
}