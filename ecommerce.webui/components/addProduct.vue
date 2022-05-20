<template>
<div class="shipping-general">
    <div class="bg-gray-300 shipping-general">
        <div class="py-12">
            <div class="
            max-w-md
            mx-auto
            bg-white
            shadow-lg
            rounded-lg
            md:max-w-xl
            mx-2
            ">
                <div class="md:flex">
                    <div class="w-full p-4 px-5 py-5 ">
                        <div class="flex justify-center items-center">
                            <fa icon="plus" />
                            <p class="text-2xl"> Add Product</p>
                        </div>
                        <form enctype="multipart/form-data">

                            <div class="relative">
                                <input v-model="name" type="text" name="name" id="email-input" class="edit-input
                                border
                                rounded
                                h-10
                                w-full
                                focus:outline-none focus:border-green-200
                                px-2
                                mt-2
                                text-sm
                                " placeholder="Name*" />
                                <span class="
                                absolute
                                text-blue-500
                                right-2
                                top-4
                                font-medium
                                text-sm
                                ">
                                </span>
                            </div>
                            <input v-model="description" type="text" name="description" class="edit-input
                            border
                            rounded
                            h-10
                            w-full
                            focus:outline-none focus:border-green-200
                            px-2
                            mt-2
                            text-sm
                            " placeholder="Description*" />
                            <input v-model="price" type="text" name="price" class="edit-input
                            border
                            rounded
                            h-10
                            w-full
                            focus:outline-none focus:border-green-200
                            px-2
                            mt-2
                            text-sm
                            " placeholder="Price*" />
                            <input v-model="category" type="text" name="category" class="edit-input
                            border
                            rounded
                            h-10
                            w-full
                            focus:outline-none focus:border-green-200
                            px-2
                            mt-2
                            text-sm
                            " placeholder="Category*" />
                            <div class="image-section relative">
                                <input type="file" @change="onFileSelected" name="name" id="image-data" class="
                                border
                                rounded
                                h-10
                                w-full
                                focus:outline-none focus:border-green-200
                                px-2
                                mt-2
                                text-sm
                                " placeholder="Add Image*" />
                                <span class="
                                absolute
                                text-blue-500
                                right-2
                                top-4
                                font-medium
                                text-sm
                                ">
                                </span>
                            </div>
                            <div class="flex justify-between items-center pt-2">
                                <nuxt-link to="/" class="h-12 w-36 text-blue-500 text-xs font-medium flex justify-center items-center">
                                    <span class="flex justify-center items-center">
                                        Cancel
                                    </span>
                                </nuxt-link>

                                <button @click=" saveProduct" type="button" class="
                                h-12
                                w-48
                                rounded
                                font-medium
                                text-xs
                                bg-blue-500
                                text-white
                                ">
                                    Save
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    middleware: ["session-control", "auth", 'isAdmin'],
    data() {
        return {
            name: '',
            description: '',
            category: '',
            price: null,
            image: null,
        }
    },
    methods: {
        onFileSelected(event){
            this.image = event.target.files[0]
        },
        saveProduct(e) {
            e.preventDefault();

            let fd = new FormData();
            fd.append("name", this.name);
            fd.append("description", this.description);
            fd.append("category", this.category);
            fd.append("price", this.price);
            this.image = "https://www.ukrgate.com/eng/wp-content/uploads/2021/02/The-Ukrainian-Book-Institute-Purchases-380.9-Thousand-Books-for-Public-Libraries1.jpeg"
            fd.append("image", this.image);

            axios.post('/addProduct', fd)
            .then(res => {
                this.name= ''
                this.description= ''
                this.category= ''
                this.price= null
                document.getElementById('image-data').value = ''
            })
            .catch(e => console.log(e))
            console.log("save")
        }, 
    }
};
</script>

<style scoped>
.shipping-general {
    height: 100vh;
}
</style>
