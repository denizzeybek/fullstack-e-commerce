import Vuex from 'vuex';
import basket from './modules/basket.js'

const createStore = () => {
    return new Vuex.Store({
        actions: {
            nuxtServerInit(vuexContext, context) {
                // context.store.dispatch('refreshAction', context.req.headers.cookie)
            },
            
        },
        modules: {
            basket
        },
    })
}

export default createStore;