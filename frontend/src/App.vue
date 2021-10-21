<template>
    <div class="gradient-bg">
        <NavBar />
          <router-view class="wrapper" />
        <Footer />
    </div>

</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components:{
        NavBar: defineAsyncComponent( () => import('@/modules/shared/components/NavBar.vue')),
        Footer: defineAsyncComponent( () => import('@/modules/shared/components/Footer.vue')),
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
    .bdd{
        margin-bottom: 100px;

    }

    html, body {
        margin:0px 0px 0px 0px;

    }

    .wrapper {
        height: calc( 100vh - 178.5px);
        overflow: auto;
    }

    .btn-indigo{
        background-color: #3f51b5;
        border-color: #3F51B5;
        color: white;
    }

</style>