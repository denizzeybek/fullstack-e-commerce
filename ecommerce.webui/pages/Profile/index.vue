<template>
    <div>
        <Profile></Profile>
    </div>
</template>

<script>
import Profile from '@/components/profile'
export default {
    layout:'productLayout',
    middleware: ["session-control", "auth"],
    components:{
        Profile
    }
}
</script>

<style>

</style>