import request from '@/services/request'
// import Cookies from 'js-cookie'

const state = {
    productList : [],
    productListGeneral : [],
    categoryNames : []
}

const getters = {
    getProductList(state){
        return state.productList
    }
}

const mutations = {
    setProductList(state, data){
        state.productList = data
        state.productListGeneral = data
    },
    setSearchProductList(state, data){
        state.productList = data
        if(data == null){
            state.productList = state.productListGeneral
        }
    },
    setFilterList(state, type){
        state.productList = state.productListGeneral
        if(type !== 'All Products'){
            let productListArray = state.productList
            let newArray = productListArray.filter(product => product.category === type);
            // console.log("productListArray ", newArray)
            state.productList = newArray
        }   
    },
    setCategoryNames(state){
        let productListArray = state.productList
        let categoryNamesList = []
        for (var i = 0; i < productListArray.length; i++) {
            categoryNamesList.push(productListArray[i].name);
        }
        // console.log('categoryNamesList ', categoryNamesList)
        state.categoryNames = categoryNamesList
    }
}

const actions = {
    async getProductListAction({commit}){
        const { data, error } = await request(`/products`, 'get')
        if (data) {
            // console.log(data, error)
            commit('setProductList', data)
        } 
    },
    filterProductListAction({commit}, type){
        commit('setFilterList', type)
    },
    filterCategoryNameAction({commit}){
        commit('setCategoryNames')
    },
    async searchAction({commit}, searchData){
        // console.log("searchData ", searchData)
        const { data, error } = await request(`/products/search/` + searchData, 'get')
        if (data) {
            // console.log(data, error)
            commit('setSearchProductList', data)
        } 
        else{
            commit('setSearchProductList')
        }
    },
}

export default {
    state, getters, mutations, actions
}