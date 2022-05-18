<template>
    <div>
        <Profile></Profile>
    </div>
</template>

<script>
import Profile from '@/components/profile'
export default {
    layout:'product',
    middleware: ["session-control", "auth"],
    components:{
        Profile
    }
}
</script>

<style>

</style>