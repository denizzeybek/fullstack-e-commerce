<template>
<section class="h-screen">
    <div class="container px-6 py-12 h-full">
        <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="w-full" alt="Phone image" />
            </div>
            <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
                <div class="flex justify-center align-center">
                    <p class="text-4xl my-4">Welcome</p>
                </div>
                <form>
                    <!-- Email input -->
                    <div class="mb-6">
                        <input v-model="emailText" type="text" class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email address" />
                    </div>

                    <!-- Password input -->
                    <div class="mb-6">
                        <input v-model="passwordText" type="password" class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password" />
                    </div>

                    <!-- Submit button -->
                    <button @click="submitLoginForm" type="submit" class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" data-mdb-ripple="true" data-mdb-ripple-color="light">
                        Sign in
                    </button>

                    <div class="my-4 flex justify-between">
                        <p class="text-base ">You dont have an account?</p>
                        <nuxt-link to="/register" class="text-blue-600">Register</nuxt-link>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            emailText:'',
            passwordText:'',
            loginInfo:{
                email:'',
                password:''
            }
        }
    },
    methods:{
        submitLoginForm(e){
            e.preventDefault();
            this.loginInfo.email = this.emailText
            this.loginInfo.password = this.passwordText
            console.log("loginInfo ", this.loginInfo)
            axios.get('https://anapioficeandfire.com/api/houses/1')
            .then(res =>  console.log("res", res))
            .catch(e => console.log(e))
        }
    }
}
</script>
