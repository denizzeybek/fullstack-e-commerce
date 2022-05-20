<template>
<div class="shipping-general">
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
                        <span class="mt-4">Customer Information</span>
                        <div class="relative pb-5">
                            <input type="text" name="mail" class="
                    border
                    rounded
                    h-10
                    w-full
                    focus:outline-none focus:border-green-200
                    px-2
                    mt-2
                    text-sm
                  " placeholder="E-mail" />
                            <span class="
                    absolute
                    text-blue-500
                    right-2
                    top-4
                    font-medium
                    text-sm
                  ">
                            </span>
                        </div>
                        <span>Shipping Address</span>
                        <div class="grid md:grid-cols-2 md:gap-2">
                            <input type="text" name="mail" class="
                    border
                    rounded
                    h-10
                    w-full
                    focus:outline-none focus:border-green-200
                    px-2
                    mt-2
                    text-sm
                  " placeholder="First name*" />
                            <input type="text" name="mail" class="
                    border
                    rounded
                    h-10
                    w-full
                    focus:outline-none focus:border-green-200
                    px-2
                    mt-2
                    text-sm
                  " placeholder="Last name*" />
                        </div>
                        <input type="text" name="mail" class="
                  border
                  rounded
                  h-10
                  w-full
                  focus:outline-none focus:border-green-200
                  px-2
                  mt-2
                  text-sm
                " placeholder="Company (optional)" />
                        <input type="text" name="mail" class="
                  border
                  rounded
                  h-10
                  w-full
                  focus:outline-none focus:border-green-200
                  px-2
                  mt-2
                  text-sm
                " placeholder="Address*" />
                        <input type="text" name="mail" class="
                  border
                  rounded
                  h-10
                  w-full
                  focus:outline-none focus:border-green-200
                  px-2
                  mt-2
                  text-sm
                " placeholder="Apartment, suite, etc. (optional)" />
                        <div class="grid md:grid-cols-3 md:gap-2">
                            <input type="text" name="mail" class="
                    border
                    rounded
                    h-10
                    w-full
                    focus:outline-none focus:border-green-200
                    px-2
                    mt-2
                    text-sm
                  " placeholder="Zipcode*" />
                            <input type="text" name="mail" class="
                    border
                    rounded
                    h-10
                    w-full
                    focus:outline-none focus:border-green-200
                    px-2
                    mt-2
                    text-sm
                  " placeholder="City*" />
                            <input type="text" name="mail" class="
                    border
                    rounded
                    h-10
                    w-full
                    focus:outline-none focus:border-green-200
                    px-2
                    mt-2
                    text-sm
                  " placeholder="State*" />
                        </div>
                        <input type="text" name="mail" class="
                  border
                  rounded
                  h-10
                  w-full
                  focus:outline-none focus:border-green-200
                  px-2
                  mt-2
                  text-sm
                " placeholder="Country*" />
                        <input type="text" name="mail" class="
                  border
                  rounded
                  h-10
                  w-full
                  focus:outline-none focus:border-green-200
                  px-2
                  mt-2
                  text-sm
                " placeholder="Phone Number*" />
                        <div class="flex justify-between items-center pt-2">
                            <nuxt-link to="/products" class="h-12 w-36 flex justify-center items-center text-blue-500 text-xs font-medium">
                              <span>Return to shopping</span>
                            </nuxt-link>
                            <nuxt-link to="/payment" class="h-12 w-48 flex justify-center items-center rounded font-medium text-xs bg-blue-500 text-white">
                              <span> Continue to Payment</span>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  middleware: ["session-control", "auth"],
  layout:'product',
};
</script>

<style scoped>
.shipping-general {
    height: 93.8vh;
}
</style>
