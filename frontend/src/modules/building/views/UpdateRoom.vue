<template>
  <div class="">

    <h1 class="text-center mt-4">Registrar inmueble</h1>

    <div class="container">
      <div class="row bg-light align-items-center my-3 p-5 border-radius" >
          <UploadMulti v-model="files" />
      </div>
    </div>

    <form @submit.prevent="onSubmit">
      <div class="container">
        
        <div class="row bg-light border-radius">
          <div class="col p-4">
            <div class="row mb-3">
              <label for="Ciudades"><strong>Titulo</strong></label>
              <input v-model="RoomForm.titulo" type="text" name="" id="" class="form-control" required/>
            </div>

            <div class="row">
              <label for=""><strong>Descripción</strong></label>
              <textarea
                v-model="RoomForm.descripcion"
                name="" id="" cols="60" rows="2" class="form-control" required
                placeholder="Describa el tipo de habitación, características, etc."
              ></textarea>
            </div>
            <div class="row mt-3">
              <label for=""><strong>Precio </strong>(COP)</label>
              <input 
              v-model="RoomForm.precio" required
              type="number" name="" id="" class="form-control" />
            </div>
            <div class="row mt-3">
              <label for=""><strong>Area</strong>(mt2)</label>
              <input 
              v-model="RoomForm.area" required
              type="number" name="" id="" class="form-control" />
            </div>
            <div class="row mt-3">
              <label for=""><strong>Baño</strong></label>
              <select v-model="RoomForm.banio"
              class="form-select" aria-label="Default select example">
                <option selected value="C">Compartido</option>
                <option value="P">Privado</option>
              </select>
            </div>
            <div class="row mt-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="RoomForm.estacionamiento"
                  value="false"
                  id="flexCheckIndeterminate"
                />
                <label class="form-check-label" for="flexCheckIndeterminate">
                  Estacionamiento
                </label>
              </div>
            </div>
            <!--             <div class="row mt-3">
              <label for=""><strong>Condiciones</strong></label>
              <textarea
                name=""
                id=""
                cols="60"
                rows="2"
                class="form-control"
                placeholder="Describa las condiciones de uso y la restricciones por parte del huésped."
              ></textarea>
            </div> -->
          </div>
          <div class="col p-4">
            <div class="row mb-3">
              <label for="Ciudades"><strong>Ciudad</strong></label>
              <input
                type="search"
                name=""
                id="Ciudades"
                class="form-control"
                list="opciones"
                placeholder="Buscar" required
                v-model="RoomForm.ciudad"
              />
              <datalist id="opciones">
                <option value="Pereira"></option>
                <option value="Dosquebradas"></option>
                <option value="Cartago"></option>
              </datalist>
            </div>
            <div class="row mt-3">
              <label for=""><strong>Estrato</strong></label>
              <input v-model="RoomForm.estrato" type="number" name="" id="" class="form-control" required/>
            </div>
            <div class="row mt-3">
              <label for=""><strong>Ubicación</strong></label>
              <input v-model="RoomForm.ubicacion" type="text" name="" id="" class="form-control" required />

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.845265490602!2d-75.69365866700417!3d4.796600867130791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38876503059207%3A0xd5671df2301e9a3b!2sUTP!5e0!3m2!1ses!2sco!4v1634777954543!5m2!1ses!2sco"
                width="400"
                height="300"
                style="padding-left: 10px"
                allowfullscreen=""
                loading="lazy"
              >
              </iframe>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center my-2">
      <button class="btn btn-success" type="submit">Actualizar Habitacion</button>

      </div>
    </form>
  </div>
</template>

<script>
import { ref, computed, defineAsyncComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex';
import Swal from 'sweetalert2';

/* import uploadImage from '../helpers/uploadImage';
 */import useRoom from '../composables/useRoom'

export default {
  components:{ 
    UploadMulti: defineAsyncComponent( () => import('../components/UploadMuti.vue'))
    },
    props: {
        id:{ 
            type: String,
            required: true
        }
    },
  setup( props ) {
    const router = useRouter()
    const store = useStore()
    const files = ref([])

    const { updateRoom } = useRoom()
    const RoomForm = computed( () => store.getters["building/getPublicationById"]( props.id ) )
   /*  const RoomForm = ref(
      {
        titulo: "",
        area: 0,
        banio: "",
        ciudad: "",
        ubicacion: "",
        descripcion: "",
        estrato: 1,
        precio: 0,
        estacionamiento: true,
        images: [],
        user:""
      }
    ) */

    RoomForm.value.user=computed(() => store.getters['auth/getEmail']).value
    
    return {
/*       room, */
      RoomForm,
      files,
      onSubmit : async() => 
              {
                if (RoomForm.value.images.length){

                  new Swal(
                    {
                      title: 'Espere por favor',
                      allowOutsideClick: false
                    }
                  )

                  Swal.showLoading()

                  let lista = []

                  /* for (const key in files.value) {
                    const elemento = await uploadImage(files.value[key])
                    const img =  {
                      image: elemento
                    }
                    lista.push(img)          
                  } */
                  console.log(lista)
                  /* RoomForm.value.images=lista */

                  console.log(RoomForm.value)

                  const { ok, message } = await updateRoom( RoomForm.value )

                  if ( !ok ) {
                      Swal.fire('Error', message, 'error')
                  } else {
                      Swal.fire('Guardado', 'Tu habitacion ha sido actualizada con exito!', 'success')
                      router.push({ name: 'my-publications' }) 
                  }
                }
                else
                {
                  Swal.fire('Recuerda', 'Agregar imagenes para tu publicacion!', 'warning')
                }
              }

    };
  },
};
</script>


<style>
.border-radius {
  border-radius: 5px;
}

.wrapper {
  max-width: 500px;
  margin: 0 auto;
}
</style>