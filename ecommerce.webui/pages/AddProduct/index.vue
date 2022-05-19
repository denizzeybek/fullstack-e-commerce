<template>
    <div>
        <AddProduct></AddProduct>
    </div>
</template>

<script>
import AddProduct from '@/components/addProduct'
export default {
    layout:'product',
    middleware: ["session-control", "auth"],
    components:{
        AddProduct
    }
}
</script>

<style>

</style>