<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand ms-3">
        <img
          src="https://res.cloudinary.com/lumayo/image/upload/v1634700632/Sin_nombre_wodzi1.png"
          alt=""
          height="55"
          class="d-inline-block align-text-top"
        />
      </a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item mx-5">
            <router-link :to="{ name: 'home' }" class="nav-link" href="#">Inicio</router-link>
          </li>
          <li class="nav-item me-5">
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">Buscar</button>
            </form>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'my-publications' }" class="nav-link" href="#">Mis Habitaciones</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'register-post' }" class="nav-link" href="#">Publicar Habitacion!</router-link>
          </li>
          <li v-if="authStatus === 'no-authenicate'" class="nav-item">
            <button @click="goToLogin" type="button" class="btn btn-primary">
              Iniciar Sesion
            </button>
          </li>
          <li v-else class="nav-item">
            <button @click="onLogout" type="button" class="btn btn-primary">
              Cerrar Sesion
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { useRouter } from "vue-router";
import useAuth from '@/modules/auth/composables/useAuth'


export default {
  setup() {
    const router = useRouter();
    const  {username, authStatus, logout } = useAuth()


    return {
      goToLogin: () => {
        router.push({ name: "login" });
      },
      username,
      authStatus,
      onLogout: () => {
          router.push({name : 'login'})
          logout()
      }
    };
  },
};
</script>

<style scoped>
.navbar {
  height: 90px;
}
</style>