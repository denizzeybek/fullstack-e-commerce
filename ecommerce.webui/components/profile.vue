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
                        <div class="flex justify-center  ">
                            <img class="w-20 h-20 rounded-full border border-grey-800" src="@/assets/images/avatar.jpeg" alt="Rounded avatar">
                        </div>
                        <div class="flex justify-center">
                            <p class="text-2xl">Profile</p>
                        </div>
                        <div class="relative">
                            <input style="display:none" v-model="email" type="email" name="mail" id="email-input" class="edit-input
                                border
                                rounded
                                h-10
                                w-full
                                focus:outline-none focus:border-green-200
                                px-2
                                mt-2
                                text-sm
                                " placeholder="E-mail*" /> 
                            <p id="email-text" class="edit-input
                                flex items-center
                                border
                                rounded
                                h-10
                                w-full
                                focus:outline-none focus:border-green-200
                                px-2
                                mt-2
                                text-sm
                                bg-gray-300  
                                "> 
                                <span class="flex items-center">Email: {{getUserInfo.email}}</span> 
                            </p>
                        </div>
                        <input style="display:none"  v-model="name" type="text" name="mail" id="username-input" class="edit-input
                            border
                            rounded
                            h-10
                            w-full
                            focus:outline-none focus:border-green-200
                            px-2
                            mt-2
                            text-sm
                            " placeholder="Name*" 
                        />
                        <p id="username-text" class="edit-input
                            flex items-center
                            border
                            rounded
                            h-10
                            w-full
                            focus:outline-none focus:border-green-200
                            px-2
                            mt-2
                            text-sm
                            bg-gray-300  
                            "> 
                            <span class="flex items-center">Username: {{getUserInfo.name}}</span> 
                        </p>
                        <input style="display:none"  v-model="password" type="password" name="mail" id="password-input" class="edit-input
                            border
                            rounded
                            h-10
                            w-full
                            focus:outline-none focus:border-green-200
                            px-2
                            mt-2
                            text-sm 
                            " placeholder="Password*" 
                        />
                        <p id="password-text" class="edit-input
                            flex items-center
                            border
                            rounded
                            h-10
                            w-full
                            focus:outline-none focus:border-green-200
                            px-2
                            mt-2
                            text-sm
                            bg-gray-300  
                            "> 
                            <span class="flex items-center">Password: **********</span> 
                        </p>
                        

                        <div class="flex justify-between items-center pt-2">
                            <button @click="editProfile" type="button" class="h-12 w-36 text-blue-500 text-xs font-medium">
                                Edit
                            </button>
                            <button @click="saveProfile" type="button" class="
                                h-12
                                w-48
                                rounded
                                font-medium
                                text-xs
                                bg-blue-500
                                text-white"
                            >Save Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</div>
</template>

<script>
import cookies from 'js-cookie'
import {mapGetters} from 'vuex'
export default {
    async mounted(){ 
        let id = cookies.get('id');
        if(id){
            this.userId = id
            await this.$store.dispatch('getUserInfoAction', id)
            this.email = this.getUserInfo.email
            this.name = this.getUserInfo.name 
        }
    },
    data(){
        return{
            email:'',
            name:'',
            password:'**********',
            userId : null,
        }
    },
    methods: {
        editProfile() {
            document.getElementById('email-input').style.display = "block";
            document.getElementById('username-input').style.display = "block";
            document.getElementById('password-input').style.display = "block";

            document.getElementById('email-text').style.display = "none";
            document.getElementById('username-text').style.display = "none";
            document.getElementById('password-text').style.display = "none";
            console.log("edit")
        },
        saveProfile(){
            document.getElementById('email-input').style.display = "none";
            document.getElementById('username-input').style.display = "none";
            document.getElementById('password-input').style.display = "none";

            document.getElementById('email-text').style.display = "block";
            document.getElementById('username-text').style.display = "block";
            document.getElementById('password-text').style.display = "block";

            let userData = {
                id: this.userId,
                email: this.email,
                name : this.name,
                password : this.password,
                isAdmin : 0
            }
            this.$store.dispatch('updateProfileAction', userData)
            console.log("saved!")

        }
    },
    computed:{
        ...mapGetters([
            'getUserInfo'
        ])
    }
};
</script>

<style scoped>
.shipping-general {
    height: 100vh;
}
</style>
