import request from '@/services/request'

const state = {
    name:'John Doe', 
    userInfo : {},
    userList : []
}

const getters = {
    getName(state){
        return state.name
    }, 
    getUserInfo(state){
        return state.userInfo
    },
    getUserList(state){
        return state.userList
    }
}

const mutations = { 
    setUserInfo(state, data){
        state.userInfo = data[0]
    },
    setUserList(state, data){
        state.userList = data
    }

}

const actions = { 
    async getUserInfoAction({commit}, id){
        const { data, error } = await request(`/getSingleUser/` + id, 'get')
        if (data) {
            console.log(data, error)
            commit('setUserInfo', data)
        } 
    },
    async updateProfileAction({commit}, input){
        let id = input.id
        let name = input.name
        let email = input.email
        let password = input.password
        let isAdmin = input.isAdmin
        const { data, error } = await request(`/updateUser/` + id, 'post', { name, email, password, isAdmin})
        if (data) {
            console.log(data, error)
            commit('setUserInfo', data)
        } 
    },
    async getUserListAction({commit}){
        const { data, error } = await request(`/getUsers` , 'get')
        if (data) {
            console.log(data, error)
            commit('setUserList', data)
        } 
    },
    async updateAdminStatusAction({commit}, input){
        let id = input.id 
        let isAdmin = input.isAdmin
        const { data, error } = await request(`/updateAdminStatus/` + id, 'post', { isAdmin})
        if (data) {
            console.log(data, error)
            // commit('setUserInfo', data)
        } 
    }
}

export default {
    state, getters, mutations, actions
}