

const state = {
    name:'John Doe',
    cardNumber : '1234 1234 1234 1234',
    expireDate : '01/21',
    cvv : '000',
}

const getters = {
    getCardName(state){
        return state.name
    },
    getCardNumber(state){
        let number = state.cardNumber
        return number.slice(-4)
    },
    getExpireDate(state){
        return state.expireDate
    },
    getCvv(state){
        return state.cvv
    },
}

const mutations = {
    setData(state, input){
        console.log("input", input)
        console.log("type", input.type)
        console.log("data", input.data)
        let type = input.type
        let data = input.data
        switch(type) {
            case 'name':
                state.name = data
                break;
            case 'cardNumber': 
                state.cardNumber = data
                break;
            case 'expireDate':
                state.expireDate = data
                break;
            case 'cvv':
                state.cvv = data
                break;
            default: 
        }
    }
}

const actions = { 
    changeCardInfo({commit}, input){
        commit('setData', input)
    }
}

export default {
    state, getters, mutations, actions
}