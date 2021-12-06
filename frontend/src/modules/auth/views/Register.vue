<template>
        <div class="container">
            <h2 class="text-center m-1 mb-4 mt-4">Registro de usuario</h2>
            <form @submit.prevent="onSubmit">
                <div class="row">
                    <div class="mx-auto col-md-6 bg-light card mb-4 mt-4">
                        <div class="mb-3 mt-3">
                            <input  @change="onFileChange" type="file" placeholder="" class="form-control" required>
                        </div>
                        <div class="row align-items-center mb-3">
                            <div class="col">
                                <input v-model="registerForm.username" type="text" placeholder="Nombre de Usuario" class="form-control" required>
                            </div>
                            <div class="col">
                                <input v-model="registerForm.number_phone" type="number" placeholder="Numero de telefono" class="form-control" required>
                            </div>
                        </div>
                        <div class="row align-items-center mb-3">
                            <div class="col">
                                <input v-model="registerForm.email" type="email" placeholder="Correo" class="form-control">
                            </div>
                            <div class="col">
                                <input v-model="registerForm.password" type="password" placeholder="Contraseña" class="form-control">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col text-center">
                    <button type="submit" class="btn btn-primary my-3" >Guardar</button>
                    <a class="btn btn-secondary" href="#">Cancelar</a>
                </div>
            </form>
            
        </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useAuth from "../composables/useAuth"
import Swal from 'sweetalert2'
import uploadImage from '../../building/helpers/uploadImage'


export default{

    setup() {    

        const router = useRouter()

        let file = ref(null)

        const { createUser } = useAuth()

        const registerForm = ref(
            {
                email: "",
                username: "",
                number_phone: null,
                password: "",
                image_perfil: ""
            }
        )

        return {
            file,
            registerForm,
            onFileChange: (e) => {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            file = files[0]
        },
            onSubmit: async() => {
                const elemento = await uploadImage(file)
                console.log(elemento)
                registerForm.value.image_perfil = elemento
               const { ok, message } = await createUser( registerForm.value )
               
               if ( !ok ) {
                   Swal.fire('Error', message, 'error')
               } 
               else  {
                   Swal.fire(
                    {
                        title:'Registro Exitoso',
                        text:'Ahora inicia sesion',
                        icon:'success',
                        allowEscapeKey:false,
                        allowOutsideClick:false
                    }
                    ).then((result) => 
                        {
                            if (result.isConfirmed) {
                               router.push('login') 
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