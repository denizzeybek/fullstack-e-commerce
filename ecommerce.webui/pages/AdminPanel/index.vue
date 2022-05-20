<template>
<div>
    <div class="container px-20 mx-auto">
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <table class="min-w-full">
                            <thead class="bg-white border-b">
                                <tr>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        ID
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Name
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Email
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        IsAdmin
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="user in getUserList" :key="user.id" class="bg-gray-100 border-b">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{user.id}} </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {{user.name}}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {{user.email}}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <div v-if="user.isAdmin" class="form-check">
                                            <input @click="changeAdminStatus(user)"  type="checkbox" 
                                                    :id="`flexCheckChecked${user.id}`"
                                                    name="" 
                                                    value="" 
                                                    checked>
                                            <label :for="`flexCheckChecked${user.id}`"> </label> 
                                        </div>
                                        <div v-else class="form-check">
                                            <input @click="changeAdminStatus(user)"  type="checkbox" 
                                                    :id="`flexCheckChecked${user.id}`"
                                                    name="" 
                                                    value="">
                                            <label :for="`flexCheckChecked${user.id}`"> </label> 
                                        </div> 
                                    </td>
                                </tr> 
                            </tbody>
                        </table>
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
    layout: 'product',
    async created(){
        await this.$store.dispatch('getUserListAction')
    },
    methods:{
        changeAdminStatus(user){
            var elem = document.querySelector('#flexCheckChecked'+user.id);
            var isChecked = elem.checked
            let val = 0
            if(isChecked){
                val = 1
            }
            let userData = {
                id: user.id, 
                isAdmin : val
            }
            console.log("userData", userData)
            this.$store.dispatch('updateAdminStatusAction', userData)

        }
    },
    computed:{
        ...mapGetters([
            'getUserList'
        ])
    }
}
</script>

<style>

</style>
