<template>
<div class="mt-5  px-2">
    <div class="max-w-md mx-auto bg-blue-400 rounded-lg overflow-hidden md:max-w-sm">
        <div class="md:flex">
            <div class="w-full p-4">

                <div class="flex justify-between items-center text-white">

                    <span class="text-3xl font-bold">{{getSummaryTotalPrice}} <small class="text-sm font-light">USD</small></span>
                    <i class="fa fa-chevron-circle-up fa-2x text-gray-300"></i>

                </div>

                <div class="flex justify-between items-center mt-10">

                    <div class="flex flex-row">
                        <img class="w-4 h-4" src="https://i.imgur.com/FNef1H8.png">
                        <img class="w-4 h-4" src="https://i.imgur.com/FNef1H8.png">
                        <img class="w-4 h-4" src="https://i.imgur.com/FNef1H8.png">
                        <img class="w-4 h-4" src="https://i.imgur.com/FNef1H8.png">
                    </div>

                    <div class="flex flex-row">
                        <img class="w-4 h-4" src="https://i.imgur.com/FNef1H8.png">
                        <img class="w-4 h-4" src="https://i.imgur.com/FNef1H8.png">
                        <img class="w-4 h-4" src="https://i.imgur.com/FNef1H8.png">
                        <img class="w-4 h-4" src="https://i.imgur.com/FNef1H8.png">
                    </div>

                    <div class="flex flex-row">
                        <img class="w-4 h-4" src="https://i.imgur.com/FNef1H8.png">
                        <img class="w-4 h-4" src="https://i.imgur.com/FNef1H8.png">
                        <img class="w-4 h-4" src="https://i.imgur.com/FNef1H8.png">
                        <img class="w-4 h-4" src="https://i.imgur.com/FNef1H8.png">
                    </div>

                    <div class="flex flex-row">
                        <span class="text-white text-lg mr-1 font-bold">{{getCardNumber}} </span> 
                    </div>

                </div>

                <div class="mt-8 flex justify-between items-center text-white">

                    <div class="flex flex-col">
                        <span class="font-bold text-gray-300 text-sm">Name</span>
                        <span class="font-bold">{{getCardName}} </span>

                    </div>

                    <div class="flex flex-col">
                        <span class="font-bold text-gray-300 text-sm">Expires</span>
                        <span class="font-bold">{{getExpireDate}} </span>

                    </div>

                </div>

            </div>
        </div>
    </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters([
            'getCardName',
            'getCardNumber',
            'getExpireDate',
            'getCvv',
            'getSummaryTotalPrice'
        ])
    }
}
</script>

<style>

</style>
