<template>
<div class="payment-general">
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
                    <div class="w-full p-4 px-5 py-5">
                        <span class="pt-4">Credit Cart Information</span>
                        <div class="credit-cart-section ">
                            <CreditCart></CreditCart>
                        </div>
                        <div>
                            <CartForm></CartForm>
                        </div>
                        <div class="flex justify-between items-center pt-2"> 
                            <nuxt-link to="/products" class="h-12 w-36 text-blue-500 text-xs font-medium">Return to shopping</nuxt-link>

                            <button  @click="paymentSuccess" type="button" class="
                                h-12
                                w-48
                                rounded
                                font-medium
                                text-xs
                                bg-blue-500
                                text-white">
                                Pay
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
import CreditCart from '@/components/payment/creditCart'
import CartForm from '@/components/payment/cartForm'
export default {
    middleware: ["session-control", "auth"],
    layout:'product',
    components: {
        CreditCart,
        CartForm,
    },
    methods: {
        paymentSuccess() {
            alert("Congrats! You successfully completed a payment transaction.")
        }
    },
};
</script>

<style scoped>
.payment-general {
    height: 93.8vh;
}
.shipping-general{
    height:93.8vh;
}
</style>
