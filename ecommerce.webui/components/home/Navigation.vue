<template>
<nav class="bg-white shadow-black shadow-lg border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a @click="$router.push('/products')" classhref="https://flowbite.com" class="flex items-center cursor-pointer">
            <img src="@/assets/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Logo">
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
            </svg>
            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul class="flex items-center flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li class="flex items-center">
                    <div class="flex justify-center items-center ">
                        <div class="xl:w-66">
                            <label for="exampleSearch2"></label>
                            <input type="search" class="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleSearch2" placeholder="Search" />
                        </div>
                    </div>
                </li>
                <li>
                    <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                        <fa icon="plus" /> Create New Product
                    </a>
                </li>
                <li>
                    <a @click="openCard" href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                        <fa class="fa-lg" icon="cart-shopping" />
                    </a>
                </li> 
                <li>
                    <!-- <button id="dropdownDefault"  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"> -->
                    <a @click="toggleProfileDropdown" href="#" class="px-2.5 py-2 rounded-full border-solid border border-blue-500 block  hover:bg-gray-50 md:hover:bg-transparent hover:border-blue-700">
                        <!-- <img class="rounded-full w-6" src="@/assets/images/avatar.jpeg"/> -->
                        <fa class="fa-lg hover:text-blue-600" icon="user" />
                    </a> 
                    <div style="position:absolute;right:50px;" v-if="isProfileDropdownOpen" id="dropdown1" class="z-10 bg-white divide-y divide-gray-100 rounded shadow w-34 dark:bg-gray-700">
                        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                            <li>
                                <a @click="$router.push('/profile')" href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    <fa icon="user"/>  Profile
                                </a>
                            </li>
                            <li>
                                <a @click="$router.push('/')" href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    <fa icon="arrow-right-from-bracket"/> Sign out
                                </a>
                            </li> 
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    data(){
        return{
            isProfileDropdownOpen:false
        }
    },
    methods: {
        openCard() {
            console.log("xx")
            this.$store.dispatch('isBasketOpenAction', true)
        },
        toggleProfileDropdown(){
            this.isProfileDropdownOpen = !this.isProfileDropdownOpen
        }
    },
}
</script>

<style>

</style>
