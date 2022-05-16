
const state = {
    isBasketOpen:false, 
}

const getters = {
    getIsBasketOpen(state){
        return state.isBasketOpen
    }
}

const mutations = {
    setIsBasketOpen(state, data){
        state.isBasketOpen = data
    }
}

const actions = {
    isBasketOpenAction({commit}, data){
        commit('setIsBasketOpen', data)
    }
}

export default {
    state, getters, mutations, actions
}