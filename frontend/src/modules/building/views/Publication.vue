<template>

    <div class="container my-3">
        <div class="row g-4">
            <div class="col-6">


                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div v-for="(image, index) of room.images" :key="image.id"
                            :class="index ? 'carousel-item box': 'carousel-item active box'">

                            <img :src="image.image" class="d-block w-100" alt="...">

                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>


            </div>

            <div class="col-6">
                <div class="p-3 border bg-light">
                    <img class="col-12" src="https://kpshopy.com/storage/app/blog/eaWTbXQKCJWtwQUKFHyALtQNqoQ7aOg4aMqAOBO9.png"
                     alt="">
                </div>
            </div>

            <div class="col-6">
                <div class="p-3 mb-2 bg-light">
                    <h4 class="fw-bold">{{ room.titulo }}</h4>
                    <h5 class="ps-3">{{ precio }}</h5>
                    <small class="ps-4 text-end">Publicado: {{ date }}</small>

                </div>
                <div class="p-3 mb-2 bg-light">
                    <h5 class="fw-bold">Descripción</h5>
                    <p class="ps-2">{{ room.descripcion }}</p>
                </div>
                <div class="p-3 mb-2 bg-light">
                    <div class="row">
                        <div class="ms-3 col-4">
                            <span class="fas fa-th-large fw-bold"> Area: </span>
                            <span class="fw-normal">&nbsp;{{ room.area }} m<sup>2</sup></span>
                        </div>
                        <div class="col">
                            <span class="fas fa-bath fw-bold"> Baño: </span>
                            <span class="fw-normal" v-if="room.banio === 'C'"> Compartido</span>
                            <span class="fw-normal" v-else> Privado</span>

                        </div>
                    </div>
                    <div class="row">
                        
                        <div class="ms-3 col-4">
                            <span class="fas fa-layer-group fw-bold"> Estrato: </span>
                            <span class="fw-normal">&nbsp;{{ room.estrato }}</span>
                        </div>
                        <div class="col" v-if="room.estacionamiento">
                            <span class="fas fa-parking fw-bold"> Parqueadero: </span>
                            <span class="fw-normal">&nbsp;Sí</span>
                        </div>
                        <div class="col" v-else>
                            <span class="fas fa-parking fw-bold"> Parqueadero: </span>
                            <span class="fw-normal">&nbsp;No</span>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="col-6">
                <div class="p-3 border bg-light mb-3"><label for=""><strong>Ubicación</strong></label>
                    <p class="fw-normal ms-3">&nbsp;{{ room.ubicacion }}</p>
                </div>
                <CardUserRoomVue :user="room.user" />
            </div>
        </div>
    </div>


</template>

<script>
import { computed, defineAsyncComponent } from 'vue'
import { useStore } from 'vuex'

export default {
    components:{
        CardUserRoomVue: defineAsyncComponent( () => import('../components/CardUserRoom.vue'))
    },
    
    props: {
        id:{ 
            type: String,
            required: true
        }
    },
    
    setup( props ) {

        const store = useStore()
        const room = computed( () => store.getters["building/getPublicationById"]( props.id ) )
        let fecha = room.value.created_data
        let lista = fecha.split('-')
        let date = lista[2]+'/'+lista[1]+'/'+lista[0]

        const options1 = { style: 'currency', currency: 'COP' };
        const numberFormat1 = new Intl.NumberFormat('es-CO', options1);
        const precio = numberFormat1.format(room.value.precio)
        return {
            room,
            date,
            precio
        }
    }

}
</script>

<style scoped>

/* .carousel {
  width: 100%;
  height:440px;
} */
/* .carousel-inner .item{ 
   height:500px; 
   width: 500px;

} */

/* #carouselExampleIndicators .carousel-item img {
    object-fit: cover;
    object-position: center;
    height: 55vh;
    width: 50vw;

    
}
 */
.bg-light {
    border-radius: 5px;
}
.box img{
  width: 100%;
  height: auto;
}
@supports(object-fit: cover){
    .box img{
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
}

</style>