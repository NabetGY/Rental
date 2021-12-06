<template>
  <h1 class="text-center mt-3">Mi Perfil</h1>
    
  <form @submit.prevent="onSubmit">
    <div class="row g-2 m-2 p-5">
      <div class="col-md-12 col-lg-6">
        <div class="profile-img">
          <img :src="form.image_perfil" alt="" >
          <div class="file btn btn-lg btn-primary">
              Cambiar foto
              <input @change="onFileChange" type="file" name="file"/>
          </div>
        </div>
      </div>
      <div class="col-md-12 col-lg-6">
        <div class="col my-2">
          <div class="form-floating">
            <input type="email" class="form-control ps-4" id="floatingInputGrid" placeholder="name@example.com"  v-model="email"  disabled>
            <label for="floatingInputGrid">Correo Electronico</label>
          </div>
        </div>
        <div class="col my-2">
          <div class="form-floating">
            <input type="text" class="form-control ps-4" id="floatingInputGrid" placeholder="username" v-model="form.username">
            <label for="floatingInputGrid">Nombre de usuario</label>
          </div>
        </div>
        <div class="col my-2">
          <div class="form-floating">
            <input type="number" class="form-control ps-4" id="floatingInputGrid"  v-model="form.number_phone">
            <label for="floatingInputGrid">Numero de telefono</label>
          </div>
        </div>
        <div class="col-12 text-center mt-3">
          <button type="submit" class="btn btn-primary ms-3">Actualizar Datos</button>
          <button type="submit" class="btn btn-danger ms-3">Cancelar</button>
        </div>
      </div>
    </div>
  </form>

</template>

<script>
import { ref } from 'vue'
import useAuth from '../composables/useAuth'
import Swal from 'sweetalert2'
import uploadImage from '../../building/helpers/uploadImage'

export default {


  setup() {

    let file = ref(null)

    const { username, email, img_profile, number_phone, updateUser } = useAuth()
    const form = ref(
      {
        email: email.value,
        username: username.value,
        number_phone: number_phone.value,
        image_perfil: img_profile.value
      }
    )
    return {
      form,
      file,
      email,
      onFileChange: (e) => {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            file = files[0]
        },
      onSubmit: async() => {

              if (file.value !== null)
                  {
                    const elemento = await uploadImage(file)
                    form.value.image_perfil = elemento
                  }
               const { ok, message } = await updateUser( form.value )
               
               if ( !ok ) {
                   Swal.fire('Error', message, 'error')
               } 
               else  {
                   Swal.fire(
                    {
                        title:'Actualizado',
                        text:'Tus datos han sido actualizados',
                        icon:'success',
                        allowEscapeKey:false,
                        allowOutsideClick:false
                    }
                    )
                }
            },
    }
  }

}
</script>

<style>
.profile-img{
    text-align: center;
}
.profile-img img{
    width: 80%;
    height: 100%;
}
.profile-img .file {
    position: relative;
    overflow: hidden;
    margin-top: -15%;
    width: 80%;
    border: none;
    border-radius: 0;
    font-size: 15px;
    background: #212529b8;
}
.profile-img .file input {
    position: absolute;
    opacity: 0;
    right: 0;
    top: 0;
}
</style>