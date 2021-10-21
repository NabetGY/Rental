<template>

    <nav class="navbar navbar-light bg-light">

        <div class="container-fluid">

            <a class="navbar-brand">

                <img src="https://res.cloudinary.com/lumayo/image/upload/v1634700632/Sin_nombre_wodzi1.png" 
                alt="" height="55" class="d-inline-block align-text-top">
                
            </a>

            <form class="d-flex">

                <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Buscar</button>

            </form>

                <button @click="goToLogin" type="button" class="btn btn-primary">Iniciar Sesion</button>

        </div>

    </nav>
  
</template>

<script>

import { useRouter } from "vue-router"

export default {
    
    setup() {

        const router = useRouter()

        return{
            goToLogin: () => { router.push({ name: 'login' }) }
        }
    }

}
</script>

<style>

</style>