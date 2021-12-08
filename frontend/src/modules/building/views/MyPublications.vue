<template>
  <div class="container mt-3">
    <dt class="h1">Mis Publicaciones</dt>
    <table class="table table-hover">
      <thead class="table-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">PUBLICACION</th>
          <th scope="col">TITULO</th>
          <th scope="col">FECHA</th>
          <th scope="col">PRECIO</th>
          <th scope="col">OPCIONES</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) of myPublications" :key="item.id">
          <th scope="row">{{ index+1 }}</th>
          <td v-for="image of item.images[0]" :key="image.id">
            <img :src="image" alt="" height="50"></td>
          <td><strong class="">{{ item.titulo }}</strong></td>
          <td>{{ item.created_data }}</td>
          <td>{{ numberFormat1.format(item.precio) }}</td>
          <td>
            <router-link :to="{ name: 'updateRoom', params: { 'id': item.id } }"  href="#">
              <button class="btn btn-primary">Editar</button>
            </router-link>
            <button @click="onDelete(item.id)"
              class="btn btn-danger"

            >
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>


</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Swal from 'sweetalert2';
import useRoom from '../composables/useRoom';



export default {
  setup() {
    const store = useStore()

    const { deleteRoom } = useRoom()

    const options1 = { style: 'currency', currency: 'COP' };
    const numberFormat1 = new Intl.NumberFormat('es-CO', options1);
    const myPublications = computed(() => store.getters['building/getMyItems'](store.state.auth.username))
/*     const precio = numberFormat1.format(room.value.precio)
 */    return {
          myPublications,
          numberFormat1,
          onDelete : async( value ) => {

            const { isConfirmed } = await Swal.fire({
                title: '¿Esta seguro?...',
                text: 'Una vez borrado no se puede recuperar',
                showDenyButton: true,
                confirmButtonText: 'Si, estoy seguro'
            })
             if ( isConfirmed ){
                 new Swal({
                     title: 'Espere por favor',
                     allowOutsideClick: false
                 })
                Swal.showLoading()
                const resp = await deleteRoom( value )
                
                console.log(resp)

                Swal.fire('Eliminado','', 'success')
             }
            
          },
        }
  
  },
};
</script>

<style>
</style>