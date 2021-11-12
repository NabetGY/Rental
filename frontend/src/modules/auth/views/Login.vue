<template>

    <form class="login-form" @submit.prevent="onSubmit">

        <div class="text-center">
			<img class="avatar mb-3" src="@/assets/avatar.svg" alt="Avatar">
		</div>				

        <h2 class="text-center mb-3">Iniciar Sesion</h2>    

        <div class="form-floating mb-3">
            <input v-model="loginForm.username" type="text" class="form-control" id="floatingInput" placeholder="Nombre de usuario">
            <label for="floatingInput">Nombre de usuario</label>
        </div>

        <div class="form-floating mb-3">
            <input v-model="loginForm.password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Contraseña</label>
        </div>

        <div class="text-center">
            <button type="submit" class="btn btn-indigo mb-3">Entrar</button>
        </div>

        <p class="text-center">
            <router-link :to="{ name: 'register' }"> Registrate ya!...</router-link>
        </p>

    </form>

</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useAuth from "../composables/useAuth"
import Swal from 'sweetalert2'


export default{

    setup() {    

        const router = useRouter()

        const { loginUser } = useAuth()

        const loginForm = ref(
            {
                username: "",
                password: "",
            }
        )

        return {
            loginForm,
            onSubmit: async() => {
               const { ok, message } = await loginUser( loginForm.value )
               
               if ( !ok ) {
                   Swal.fire('Error', message, 'error')
               } 
               else  {
                   Swal.fire(
                    {
                        title:'Inicio Exitoso',
                        text:'Binevenido a LUMAYO',
                        icon:'success',
                        allowEscapeKey:false,
                        allowOutsideClick:false
                    }
                    ).then((result) => 
                        {
                            if (result.isConfirmed) {
                               router.push({ name: 'home' }) 
                            } 
                        }
                    )
                }
            },
        }
    }

}
</script>

<style scoped>

    .login-form {
        width: 380px;
        margin: 20px auto;
        padding: 30px 20px;
        background-color: white;
        border-radius: 5%;
    }

    .avatar {
        height: 100px;
    }

</style>