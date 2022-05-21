<template>
<div>
    <aside class="w-100 " aria-label="Sidebar">
        <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800" style="height:92.5vh">
            <ul class="space-y-2">  
                <li v-for="category in getCategoryList" :key="category.id" @click="filterList(category)">
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <fa icon="book"/>
                        <span class="ml-3"> {{category}}</span>
                    </a>
                </li> 
            </ul>
        </div>
    </aside>

</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return{
            //TODO: categorileri ürünler listesinden çekmen lazım 
            // categoryList:['All Products', 'Best Sellers', 'Biographies', 'Memories', 'History', 'Fiction', 'Math', 'Science', 'Teen & Young', 'Sci-Fi']
        }
    },
    created(){
        this.$store.dispatch('filterCategoryNameAction')
        this.$store.dispatch('getCategoryListAction')
    },
    methods:{
        filterList(type){
            this.$store.dispatch('filterProductListAction', type)
        }
    },
    computed:{
        ...mapGetters([
            'getCategoryList'
        ])
    }
}
</script>

<style>

</style>
