<template>
<div class="product-list-general grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2 ">
    <div v-for="product in getProductList" :key="product.id" class="w-full px-4 lg:px-0">
        <div class="p-3 bg-white rounded shadow-md cursor-pointer">
            <div @click="$router.push('/products/'+ product.id)" class="">
                <div class="relative w-full mb-3 h-62 lg:mb-0">
                    <img :src="JSON.parse(product.image)" alt="Just a flower" class="object-fill w-full h-full rounded">
                </div>
                <div class="flex-auto p-2 justify-evenly">
                    <div class="flex flex-wrap ">
                        <div class="flex items-center justify-between w-full min-w-0 ">
                            <h2 class="mr-auto text-lg cursor-pointer hover:text-gray-900 ">
                                {{product.name}}
                            </h2>
                        </div>
                    </div>
                    <div class="mt-1 text-xl font-semibold">{{product.price}}</div>
                </div>
            </div>
            <div class="flex  justify-center">
                <button @click="addToBasket(product)"  class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                    Add To Basket
                </button>
            </div>
        </div>
    </div>  
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    layout:'product',
    async created(){
        await this.$store.dispatch('getProductListAction')
        this.productList = this.getProductList
    },
    data(){
        return{
            productList:[]
        }
    },
    methods:{
        addToBasket(product){
            // console.log("product ", product)
            this.$store.dispatch('addToBasketAction', product)
        },
    },
    computed:{
        ...mapGetters([
            'getProductList'
        ])
    }
}
</script>

<style scoped> 

</style>
