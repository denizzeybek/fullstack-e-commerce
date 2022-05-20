<template>
    <div v-if="getIsBasketOpen" class="bg-gray-100 overflow-y-hidden" style="height: 700px">
        <div class="w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
            <div class="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                <div class="flex items-end lg:flex-row flex-col justify-end" id="cart">
                    
                    <div class="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white overflow-y-auto overflow-x-hidden lg:h-screen h-auto" id="scroll">
                        <div class="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer" @click="checkoutHandler(false)">
                            
                            <a  @click="closeBasket" class="text-sm flex items-center px-3 py-3 leading-none">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <polyline points="15 6 9 12 15 18" />
                                </svg>
                                <span>Back</span>
                            </a>
                        </div>

                        <div v-if="getBasketList.length== 0" class="md:flex flex-col items-center justify-center  py-8 md:py-10 lg:py-8 border-t border-gray-50">
                            <fa class="text-8xl py-4" icon="cart-shopping"/>
                            <p class="text-2xl py-2">Your basket is currently empty</p>
                            <p class="text-lg py-1">Before proceed to checkout, you must add some products to your shopping cart.</p>
                            <p class="text-lg py-1">You will find a lot of interesting products on shop page.</p>
                        </div>

                        <div v-for="product in getBasketList" :key="product.id" class="md:flex items-strech  py-8 md:py-10 lg:py-8 border-t border-gray-50">
                            <div class="flex justify-center flex-col">
                                <p class="flex justify-center lg:text-2xl text-3xl font-black leading-10 text-gray-800 pt-3">{{product.category}} </p>
                                <div class="md:w-4/12 2xl:w-1/4 w-full">
                                    <img :src="JSON.parse(product.image)" alt="Black Leather Bag" class="border border-1 rounded-lg border-gray-500 h-full min-w-max object-center object-cover md:block hidden" />
                                </div>
                            </div>

                            <div class="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                                <div class="flex items-center justify-between w-full pt-1">
                                    <p class="text-base font-black leading-none text-gray-800"> {{product.name}}</p>
                                    
                                </div>
                                <p class="text-xs leading-3 text-gray-900 pt-4">Description</p>
                                <p class="text-xs leading-3 text-gray-600 pt-2">{{product.description}}</p> 
                                <p class="text-xs leading-3 text-gray-900 pt-4">Quantity</p>
                                <div class="flex items-center justify-start mt-2">
                                    <button @click="changeQuantity(product.id, 'decrease')" class="bg-slate-500 text-white active:bg-slate-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                        <span class="text-black">-</span>
                                    </button>
                                    <p class="text-xs leading-3 text-gray-600 mx-2">{{product.quantity}}</p> 
                                    <button @click="changeQuantity(product.id, 'increase')" class="bg-slate-500 text-white active:bg-slate-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                        <span class="text-black">+</span>
                                    </button>
                                </div>
                                <div class="flex items-center justify-between pt-5 mr-6">
                                    <div class="flex items-start">
                                        <!-- <p class="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p> -->
                                        <p @click="removeItem(product.id)" class="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                                    </div>
                                    <p class="text-base font-black leading-none text-gray-800">{{product.totalPrice}} $</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div v-if="getBasketList.length!= 0" class="lg:w-96 md:w-8/12 w-full bg-gray-100 h-full">
                        <div class="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
                            <div>
                                <p class="lg:text-4xl text-3xl font-black leading-9 text-gray-800">Summary</p>

                                <div class="flex items-center justify-between pt-16">
                                    <p class="text-base leading-none text-gray-800">Price</p>
                                    <p class="text-base leading-none text-gray-800">${{getProductsTotalPrice}} </p>
                                </div>
                                <div class="flex items-center justify-between pt-5">
                                    <p class="text-base leading-none text-gray-800">Total Tax</p>
                                    <p class="text-base leading-none text-gray-800">${{getTaxPrice}}</p>
                                </div>
                                <div class="flex items-center justify-between pt-5">
                                    <p class="text-base leading-none text-gray-800">Shipping</p>
                                    <p class="text-base leading-none text-gray-800">${{getShippingPrice}}</p>
                                </div>
                            </div>
                            <div>
                                <div class="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                    <p class="text-2xl leading-normal text-gray-800">Total</p>
                                    <p class="text-2xl font-bold leading-normal text-right text-gray-800">${{getSummaryTotalPrice}}</p>
                                </div>
                                <button @click="onCheckOut" class="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">Checkout</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import cookies from 'js-cookie'

export default {
    data() {
        return {
            show: false,
            text: "Sort by",
            search: true,
            isBasketOpen:'false',
            quantity:''
        }
    },
    created(){
        let obj = cookies.get('productList')
        this.$store.dispatch('initialBasketAction', obj)
    },
    methods: {
        checkoutHandler() {
            console.log("x")
        },
        closeBasket(){
            this.$store.dispatch('isBasketOpenAction', false)
        },
        removeItem(id){
            const type = "removeAll"
            let data = {id, type}
            console.log("data ", data)
            this.$store.dispatch('removeItemAction', data)
        },
        changeQuantity(id, type){
            let data = {id, type}
            this.$store.dispatch('changeProductQuantityAction', data)
        },
        onCheckOut(){
            // forma yönlendir
            // db kayıt işlemini yap
            this.$store.dispatch('isBasketOpenAction', false)
            this.$router.push("/shipping")
        },
    }, 
    computed:{
        ...mapGetters([
            'getIsBasketOpen',
            'getBasketList',
            'getProductsTotalPrice',
            'getTaxPrice',
            'getShippingPrice',
            'getSummaryTotalPrice',
        ])
    }
};
</script>

<style>
/* width */

#scroll::-webkit-scrollbar {
    width: 1px;
}

/* Track */

#scroll::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */

#scroll::-webkit-scrollbar-thumb {
    background: rgb(133, 132, 132);
}
</style>
