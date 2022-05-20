import Vuex from 'vuex';
import auth from './modules/auth.js'
import basket from './modules/basket.js'
import product from './modules/product.js'
import payment from './modules/payment.js'
import profile from './modules/profile.js'

const createStore = () => {
    return new Vuex.Store({
        actions: {
            nuxtServerInit(vuexContext, context) {
                // context.store.dispatch('refreshAction', context.req.headers.cookie)
            },
            
        },
        modules: {
            auth,
            basket,
            product,
            payment,
            profile,
        },
    })
}

export default createStore;