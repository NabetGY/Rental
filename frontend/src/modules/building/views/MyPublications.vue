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
          <td>${{ item.precio }}</td>
          <td>
            <a class="btn btn-primary" href="#">Editar</a>
            <button
              class="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>


  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Eliminar publicación
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>¿Está seguro de eliminar esta publicación?</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancelar
          </button>
          <button type="button" class="btn btn-primary">Si, eliminar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

import { useStore } from "vuex";


export default {
  setup() {
    const store = useStore()
    return {
      myPublications:computed(() => store.getters['building/getMyItems'])
    }
  
  },
};
</script>

<style>
</style>