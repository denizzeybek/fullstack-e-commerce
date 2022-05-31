import request from '@/services/request'

const state = {
    name:'John Doe', 
    userInfo : {},
    userList : [], 
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
    setMutateHandler(state, input) {
        let response = input.response
        let type = input.type 
        state[type] = response;
    },  
}

const actions = { 
    async getUserInfoAction({commit}, id){
        const { data, error } = await request(`/getSingleUser/` + id, 'get')
        if (data) {
            console.log(data, error)
            let input = { 
                response : data[0],
                type : "userInfo"
            }
            commit('setMutateHandler', input)
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
            let input = { 
                response : data[0],
                type : "userInfo"
            }
            commit('setMutateHandler', input)
        } 
    },
    async getUserListAction({commit}){
        const { data, error } = await request(`/getUsers` , 'get')
        if (data) {
            console.log(data, error)
            let input = { 
                response : data,
                type : "userList"
            }
            commit('setMutateHandler', input)
        } 
    },
    async updateAdminStatusAction({commit}, input){
        let id = input.id 
        let isAdmin = input.isAdmin
        const { data, error } = await request(`/updateAdminStatus/` + id, 'post', { isAdmin})
        if (data) {
            console.log(data, error)
        } 
    }, 
}

export default {
    state, getters, mutations, actions
}