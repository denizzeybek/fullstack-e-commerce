<template>
    <div>
        <NavComponent></NavComponent>
        <ShoppingCard></ShoppingCard>
    </div>
</template>

<script>
import NavComponent from '@/components/home/Navigation.vue';
import ShoppingCard from '@/components/home/ShoppingCard.vue';
export default {
    name:'HomeComponent',
    components:{
        NavComponent,
        ShoppingCard
    }
}
</script>

<style>

</style>
