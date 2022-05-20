<template>
<div class="product-detail-general1">
    <div class="bg-gray-300 product-detail-general2">
        <div class="py-12">
            <div class="
            mx-auto
            bg-white
            shadow-lg
            rounded-lg 
            container-box
            ">
                <div class="md:flex container-box">
                    <div class="w-100 p-4 px-5 py-12 ">
                        <div v-for="product in getProductDetail" :key="product.id" class=" flex justify-center">
                            <div class="image-section">
                                <img class="product-image border border-1 rounded-lg border-gray-500" :src="JSON.parse(product.image)"/>
                            </div>
                            <div class="content-section">
                                <p class="text-4xl">{{product.name}} </p>
                                <div class="flex" style="margin-top:60px;">
                                    <p class="text-xl font-bold">Description : </p>
                                    <p class="text-xl ">{{product.description}} </p>
                                </div>
                                <div class="flex" style="margin-top:15px;">
                                    <p class="text-xl font-bold">Category : </p>
                                    <p class="text-xl ">{{product.category}} </p>
                                </div>
                                <div class="flex flex-start" style="margin-top:40px;">
                                    <button @click="addToBasket(product)"  class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-blue-800 hover:border-blue-800 hover:text-white border-2 border-blue-400 bg-blue-400 text-white focus:outline-none">
                                        Add To Basket
                                    </button>
                                    <button v-if="getIsAdmin" @click="removeItem(product)"  class="ml-2 px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-red-600 hover:border-red-600 hover:text-white border-2 border-red-400 bg-red-400 text-white focus:outline-none">
                                        Remove Item
                                    </button>
                                    <button v-if="getIsAdmin" @click="updateItem(product)"  class="ml-2 px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-600 hover:border-gray-600 hover:text-white border-2 border-gray-400 bg-gray-400 text-white focus:outline-none">
                                        Update Item
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex'
export default {
    layout: 'product',
    middleware: ["session-control", "auth"],
    created() {
        let id = this.$route.params.productId
        console.log("id ", id)
        this.$store.dispatch('productDetailAction', id)
    },
    methods:{
        addToBasket(product){
            // console.log("product ", product)
            this.$store.dispatch('addToBasketAction', product)
        },
        removeItem(product){
            let id = product.id
            console.log("product ", product)
            this.$store.dispatch('deleteProductAction', id)
        },
        updateItem(product){
            console.log("product ", product)
            // this.$store.dispatch('addToBasketAction', product)
        },
    },
    computed: {
        ...mapGetters([
            'getProductDetail',
            'getIsAdmin'
        ])
    }
}
</script>

<style scoped>
.product-detail-general1 {
    height: 91vh;
}
.product-detail-general2 {
    height: 95vh;
}
.container-box{
    width:70vw;
    max-height:700px;
}
.image-section {
    height: 80.5vh;
    width: 30%;
    min-width:350px;
    /* background-color: antiquewhite; */
}

.content-section {
    height: 80.5vh;
    width: 70%;
    min-width:500px;
    /* background-color: beige; */
}

.product-image {
    width:80%;
    height: auto;
    max-width: 300px;
    max-height: 450px;
}

</style>
