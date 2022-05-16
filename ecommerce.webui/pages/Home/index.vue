<template>
    <div>
        <navbar/>
        <ShoppingCard/>
    </div>
</template>

<script>
import navbar from '@/components/home/Navigation.vue';
import ShoppingCard from '@/components/home/ShoppingCard.vue';
export default {
    name:'HomeComponent',
    components:{
        navbar,
        ShoppingCard
    }
}
</script>

<style>

</style>
