import cookies from 'js-cookie'

function calculateTaxPrice(totalProductPrice, taxPercentage) {
    let taxPrice = ((totalProductPrice * taxPercentage) / 100)
    return taxPrice
}
function calculateProductsTotalPrice(productsTotalPrice, taxPrice, shippingPrice) {
    productsTotalPrice += taxPrice
    productsTotalPrice += shippingPrice
    return productsTotalPrice
}

function calculateCurrentTotalPrice(list){
    let currentTotalPrice = 0
    for (var i = 0; i < list.length; i++) {
        currentTotalPrice += list[i].totalPrice
    }
    return currentTotalPrice
}

const state = {
    isBasketOpen: false,
    basketList: [],
    summaryTotalPrice: 0,
    productsTotalPrice: 0,
    taxPercentage: 6,
    taxPrice: 0,
    shippingPrice: 30.00,
}

const getters = {
    getIsBasketOpen(state) {
        return state.isBasketOpen
    },
    getBasketList(state) {
        return state.basketList
    },
    getSummaryTotalPrice(state) {
        return (state.summaryTotalPrice).toFixed(2)
    },
    getTaxPrice(state) {
        return (state.taxPrice)
    },
    getShippingPrice(state) {
        return state.shippingPrice
    },
    getProductsTotalPrice(state) {
        return state.productsTotalPrice
    }
}

const mutations = {
    setIsBasketOpen(state, data) {
        state.isBasketOpen = data
    },
    setBasket(state, product) {
        let list = state.basketList
        if(!product.quantity){
            product.quantity = 1
        }
        product.totalPrice = parseInt(product.quantity) * parseInt(product.price)

        let isInclude = list.includes(product)
        if (!isInclude) {
            list.push(product)
        }
        else {
            product.quantity += 1
            product.totalPrice += parseInt(product.price)
        }
        state.basketList = list

        let currentTotalPrice = calculateCurrentTotalPrice(list)
        state.productsTotalPrice = currentTotalPrice

        let taxPrice = calculateTaxPrice(currentTotalPrice, state.taxPercentage)
        state.taxPrice = taxPrice

        currentTotalPrice = parseFloat(currentTotalPrice)

        state.summaryTotalPrice = calculateProductsTotalPrice(currentTotalPrice, taxPrice, state.shippingPrice)
        cookies.set("productList", JSON.stringify(list))

    },
    setRemoveItem(state, data) {
        console.log("data ", data)
        let id = 0
        let type = ""
        if(data.type === "removeAll"){
            id = data.id
            type = data.type
        }
        else{
            id = data
        }
        
        let list = state.basketList

        let element = list.find(listItem => listItem.id === id)
        let elemPrice = element.price
        element.totalPrice = parseInt(element.quantity) * parseInt(element.price)

        state.productsTotalPrice -= elemPrice
        let productsTotalPrice = state.productsTotalPrice

        let taxPercentage = state.taxPercentage
        let taxPrice = calculateTaxPrice(productsTotalPrice, taxPercentage)
        state.taxPrice = taxPrice

        state.summaryTotalPrice = calculateProductsTotalPrice(productsTotalPrice, taxPrice, state.shippingPrice)

        let index = list.findIndex(el => el.id == id)
        if(element.quantity <= 0){
            list.splice(index, 1)
        }
        if(type === "removeAll"){
            list.splice(index, 1)
        }

        state.basketList = list
        cookies.set("productList", JSON.stringify(list))

    },
    setProductQuantity(state, data){
        let id = data.id
        let type =  data.type

        let list = state.basketList
        let element = list.find(listItem => listItem.id === id)
            
        if(type === 'increase'){
            this.commit("setBasket", element)
        }
        else{
            element.quantity--
            this.commit("setRemoveItem", id)
        }
    },
    setInitialBasket(state, data){
        if(data){
            let list = JSON.parse(data)
            state.basketList = list
            console.log("state.basketList ", state.basketList)
            // getProductsTotalPrice     getTaxPrice       getShippingPrice     getSummaryTotalPrice
            // state.productsTotalPrice  (state.taxPrice)  state.shippingPrice  (state.summaryTotalPrice)

            let currentTotalPrice = calculateCurrentTotalPrice(list)
            state.productsTotalPrice = currentTotalPrice

            let taxPercentage = state.taxPercentage
            let taxPrice = calculateTaxPrice(currentTotalPrice, taxPercentage)
            state.taxPrice = taxPrice

            let shippingPrice = state.shippingPrice

            let summaryTotalPrice = calculateProductsTotalPrice(currentTotalPrice, taxPrice, shippingPrice)
            state.summaryTotalPrice = summaryTotalPrice
        }
        else{
            state.basketList = []
        }
    }
}

const actions = {
    isBasketOpenAction({ commit }, data) {
        commit('setIsBasketOpen', data)
    },
    addToBasketAction({ commit }, data) {
        commit('setBasket', data)
    },
    removeItemAction({ commit }, data) {
        console.log("remove item action")
        commit('setRemoveItem', data)
    },
    changeProductQuantityAction({commit}, data){
        commit('setProductQuantity', data)
    },
    initialBasketAction({commit}, data){
        commit('setInitialBasket', data)
    }
}

export default {
    state, getters, mutations, actions
}