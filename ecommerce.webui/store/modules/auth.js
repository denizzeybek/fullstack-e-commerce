import request from '@/services/request'
import axios from 'axios'
const state = {
    
}

const getters = {
    
}

const mutations = {
    
}

const actions = {
    async registerAction({commit}, data){
        const { response, error } = await request(`/register`, 'post', { data })

        if (response) {
            // commit('setAddProjectAction', { ...response })
            console.log(response, error)
        }
        // axios.post('http://localhost:8000/api/register', data)
        // .then(res => console.log(res))
        // .catch(e => console.log(e))
    },
    async loginAction({commit}, data){
        const { response, error } = await request(`/login`, 'post', { data })

        if (response) {
            // commit('setAddProjectAction', { ...response })
            console.log(response, error)
        }
    },
}

export default {
    state, getters, mutations, actions
}