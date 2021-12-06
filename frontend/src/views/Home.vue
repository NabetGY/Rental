<template>
    <div class="gradient-bg">
        <NavBar />
            <router-view />
        <Footer />
    </div>

</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components:{
        NavBar: defineAsyncComponent( () => import('../components/NavBar.vue')),
        Footer: defineAsyncComponent( () => import('../components/Footer.vue')),

    }

}
</script>

<style>
    .gradient-bg {
        position:absolute;
        top:0px;
        right:0px;
        bottom:0px;
        left:0px;
        background: linear-gradient(124.68deg, #b0d5e4, #616fbb);
    }

    html, body {
        margin:0px;
    }

</style>