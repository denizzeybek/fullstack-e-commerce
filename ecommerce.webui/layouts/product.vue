<template>
    <div>
        <NavComponent></NavComponent>
        <nuxt keep-alive/>
        <ShoppingCard></ShoppingCard>
    </div>
</template>

<script>
import NavComponent from '@/components/home/Navigation.vue';
import ShoppingCard from '@/components/home/ShoppingCard.vue';

export default {
    components:{
        NavComponent,
        ShoppingCard
    }
}
</script>

<style>

</style>