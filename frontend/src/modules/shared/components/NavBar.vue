<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand ms-5">
        <img
          src="https://res.cloudinary.com/lumayo/image/upload/v1634700632/Sin_nombre_wodzi1.png"
          alt=""
          height="55"
          class="d-inline-block align-text-top"
        />
      </a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">
          <li class="nav-item mx-5">
            <router-link :to="{ name: 'home' }" class="nav-link" href="#">Inicio</router-link>
          </li>
          <li class="nav-item me-5">
            <form @submit.prevent="onSubmit" class="d-flex mt-1">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
                v-model="palabra"
              />
              <button class="btn btn-outline-success" type="submit">Buscar</button>
            </form>
          </li>
        
          <template v-if="authStatus === 'no-authenicate'" >
            <li class="nav-item">
              <button class="btn btn-warning" @click="goToLogin">
                Publicar Habitacion!
              </button>
            </li>
            <li class="nav-item ms-2">
              <button @click="goToLogin" type="button" class="btn btn-primary">
                Iniciar Sesion
              </button>
            </li>
          </template>
          <template v-else >
              <li class="nav-item">
                <router-link :to="{ name: 'register-post' }" class="nav-link" href="#">
                  <button class="btn btn-warning">Publicar Habitacion!</button>
                </router-link>
              </li>
              <li class="nav-item dropdown mx-3">
                <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img :src="img_profile" class="avatar" alt="Avatar">
                  {{ username }}
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                  <li><router-link :to="{ name: 'my-publications' }" class="dropdown-item" href="#">Mis Habitaciones</router-link></li>
                  <li><router-link :to="{ name: 'profile' }" class="dropdown-item" href="#">Mi Perfil</router-link></li>
                  <li><hr class="dropdown-divider"></li>
                  <li>
                    <button @click.prevent="onLogout" type="button" class="btn btn-primary ms-3 pt-1">
                      Cerrar Sesion
                    </button>
                  </li>
                </ul>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { useRouter } from "vue-router";
import useAuth from '@/modules/auth/composables/useAuth'
import { ref } from '@vue/reactivity';


export default {
  setup() {
    const palabra = ref('')
    const router = useRouter();
    const  {username, img_profile, authStatus, logout } = useAuth()


    return {

      goToLogin: () => {
        router.push({ name: "login" });
      },
      username,
      img_profile,
      authStatus,
      onLogout: () => {
          router.push({name : 'login'})
          logout()
      },
      palabra,
      onSubmit : async() => {
        router.push({name : 'search', params: { 'palabra': palabra.value }})
      }
    };
  },
};
</script>

<style scoped>
.navbar {
  height: 90px;
}

.avatar {
vertical-align: middle;
width: 40px;
height: 40px;
border-radius: 50%;
}
</style>