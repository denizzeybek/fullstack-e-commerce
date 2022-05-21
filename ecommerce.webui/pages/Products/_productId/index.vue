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
                                <p id="title-text" class="text-4xl title-text">{{product.name}} </p>
                                <div  style="display:none;" id="title-div" class="flex items-center justify-start">
                                    <p class="text-xl font-bold title-text">Title : </p>
                                    <input v-model="name" type="text" class="form-control block ml-2 py-1 pl-2  text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Title"/>
                                </div>
                                <div class="flex items-center" style="margin-top:15px;">
                                    <p class="text-xl font-bold" >Description : </p>
                                    <p class="text-xl" id="description-text">{{product.description}} </p>
                                    <input style="display:none;" v-model="description" type="text" id="description-input" class="description-input form-control block ml-2 py-1 pl-2  text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Description"/>
                                </div>
                                <div class="flex items-center" style="margin-top:15px;">
                                    <p class="text-xl font-bold">Category : </p>
                                    <p class="text-xl " id="category-text">{{product.category}} </p>
                                    <input style="display:none;" v-model="category" type="text" id="category-input" class="category-input form-control block ml-2 py-1 pl-2  text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Category"/>
                                </div>
                                <div class="flex items-center" style="margin-top:15px;">
                                    <p class="text-xl font-bold price-text" >Price : </p>
                                    <p class="text-xl " id="price-text">{{product.price}} $</p>
                                    <input style="display:none;" v-model="price" type="text" id="price-input" class="price-input form-control block ml-2 py-1 pl-2  text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Price"/>
                                </div>
                                <div v-if="isAdmin" class="flex justify-start" style="margin-top:15px;">
                                    <a @click="onEdit" class="curdor-pointer underline text-blue-600"><span class="text-blue-600">Edit</span> </a>
                                </div>
                                <div class="flex flex-start" style="margin-top:40px;">
                                    <button @click="addToBasket(product)"  class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-blue-800 hover:border-blue-800 hover:text-white border-2 border-blue-400 bg-blue-400 text-white focus:outline-none">
                                        Add To Basket
                                    </button>
                                    <button v-if="isAdmin" @click="removeItem(product)"  class="ml-2 px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-red-600 hover:border-red-600 hover:text-white border-2 border-red-400 bg-red-400 text-white focus:outline-none">
                                        Remove Item
                                    </button>
                                    <button v-if="isAdmin" @click="updateItem(product)"  class="ml-2 px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-600 hover:border-gray-600 hover:text-white border-2 border-gray-400 bg-gray-400 text-white focus:outline-none">
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
        this.$store.dispatch('productDetailAction', id)
        this.isAdmin = (this.getIsAdmin === 'true')
    },
    data(){
        return{
            isAdmin: false,
            description:'',
            category : '',
            name : '',
            price : '',
        }
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
        onEdit(){
            document.getElementById('title-div').style.display = "flex";
            document.getElementById('description-input').style.display = "block"; 
            document.getElementById('category-input').style.display = "block"; 
            document.getElementById('price-input').style.display = "block"; 

            document.getElementById('title-text').style.display = "none"; 
            document.getElementById('description-text').style.display = "none"; 
            document.getElementById('category-text').style.display = "none"; 
            document.getElementById('price-text').style.display = "none"; 
        },
        async updateItem(product){
            console.log("product ", product)
            let item = {
                id : product.id,
                name : this.name,
                description : this.description,
                price : this.price,
                category : this.category
            }
            await this.$store.dispatch('updateProductAction', item)

            document.getElementById('title-div').style.display = "none";
            document.getElementById('description-input').style.display = "none"; 
            document.getElementById('category-input').style.display = "none"; 
            document.getElementById('price-input').style.display = "none"; 

            document.getElementById('title-text').style.display = "block"; 
            document.getElementById('description-text').style.display = "block"; 
            document.getElementById('category-text').style.display = "block"; 
            document.getElementById('price-text').style.display = "block"; 
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
