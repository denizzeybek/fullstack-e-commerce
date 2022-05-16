<template>
    <div>
        <div class="navigation-bar">
            <NavComponent></NavComponent>
        </div>
        <div class="content flex">
            <div class="categorization">
                <CategorizationBar></CategorizationBar>
            </div>
            <div class="product-view">
                <ProductList></ProductList>
            </div>
        </div>
        <ShoppingCard></ShoppingCard>
    </div>
</template>

<script>
import NavComponent from '@/components/home/Navigation.vue';
import ShoppingCard from '@/components/home/ShoppingCard.vue';
import CategorizationBar from '@/components/home/CategorizationBar.vue';
import ProductList from '@/components/home/ProductList.vue';
export default {
    name:'HomeComponent',
    components:{
        NavComponent,
        ShoppingCard,
        CategorizationBar,
        ProductList

    }
}
</script>

<style scoped>
.categorization {
    height:92.5vh;
    width:20vw;
    overflow:auto;
}
.product-view {
    height:92.5vh; 
    width:80vw;
    overflow:auto;
}
</style>
