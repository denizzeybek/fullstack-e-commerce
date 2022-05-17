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
                            <input disabled v-model="email" type="email" name="mail" id="email-input" class="edit-input
                    border
                    rounded
                    h-10
                    w-full
                    focus:outline-none focus:border-green-200
                    px-2
                    mt-2
                    text-sm
                  " placeholder="E-mail*" />
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
                        <input disabled v-model="username" type="text" name="mail" id="username-input" class="edit-input
                    border
                    rounded
                    h-10
                    w-full
                    focus:outline-none focus:border-green-200
                    px-2
                    mt-2
                    text-sm
                  " placeholder="Name*" />
                        <input disabled v-model="password" type="password" name="mail" id="password-input" class="edit-input
                    border
                    rounded
                    h-10
                    w-full
                    focus:outline-none focus:border-green-200
                    px-2
                    mt-2
                    text-sm
                  " placeholder="Password*" />

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
                    text-white
                  ">
                                Save Profile
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
export default {
    data(){
        return{
            email:'zeybekdeniz64@gmail.com',
            username:'Deniz Zeybek',
            password:'123456',

        }
    },
    methods: {
        editProfile() {
            document.getElementById('email-input').removeAttribute('disabled');
            document.getElementById('username-input').removeAttribute('disabled');
            document.getElementById('password-input').removeAttribute('disabled');
            console.log("edit")
        },
        saveProfile(){
            document.getElementById('email-input').setAttribute('disabled', true);
            document.getElementById('username-input').setAttribute('disabled', true);
            document.getElementById('password-input').setAttribute('disabled', true);
            console.log("edit")

        }
    }
};
</script>

<style scoped>
.shipping-general {
    height: 100vh;
}
</style>
