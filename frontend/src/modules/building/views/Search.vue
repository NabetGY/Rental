<template>
  
    <div class="container mt-2 px-2">
        <div class="row ">
            <div class="col">

                <p>
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Filtros
                        <i class="bi bi-funnel ms-2"></i>
                    </button>
                </p>
                <div class="collapse mb-2" id="collapseExample">
                    <div class="card card-body">
                        
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                            <label class="form-check-label" for="exampleRadios1">
                                Filtro uno
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                            <label class="form-check-label" for="exampleRadios2">
                                Filtro dos
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
                            <label class="form-check-label" for="exampleRadios3">
                                Filtro tres
                            </label>
                        </div>

                    </div>
                </div>

                <select class="form-select" aria-label="Default select example">
                    <option selected>Seleccione una ciudad</option>
                    <option value="1">Pereira</option>
                    <option value="2">Cartago</option>
                    <option value="3">Pasto</option>
                </select>

            </div>

            <div class="col-6">
                <div class="col mb-3" v-for="room of rooms" :key="room.id">
                    <RoomCard :room="room" />
                </div>
            </div>

            <div class="col">
                <h2>publicidad</h2>
                <div class="p-3 border bg-light mb-2">
                    <img class="col-12" src="https://kpshopy.com/storage/app/blog/eaWTbXQKCJWtwQUKFHyALtQNqoQ7aOg4aMqAOBO9.png"
                     alt="">
                </div>
                <div class="p-3 border bg-light mb-2">
                    <img class="col-12" src="https://kpshopy.com/storage/app/blog/eaWTbXQKCJWtwQUKFHyALtQNqoQ7aOg4aMqAOBO9.png"
                     alt="">
                </div>
                <div class="p-3 border bg-light mb-2">
                    <img class="col-12" src="https://kpshopy.com/storage/app/blog/eaWTbXQKCJWtwQUKFHyALtQNqoQ7aOg4aMqAOBO9.png"
                     alt="">
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { computed, defineAsyncComponent } from 'vue'
import { useStore } from 'vuex'

export default {
    components: {
        RoomCard: defineAsyncComponent( () =>
            import("@/modules/building/components/RoomCard.vue")
    )
  },
    props: {
            palabra:{ 
                type: String,
                required: true
            }
        },
    setup( props ) {
        const store = useStore()
        console.log(props.palabra)
        const rooms = computed( () => store.getters["building/getPublicationsByWord"]( props.palabra ) )

        return{
            rooms
        }
    }
}
</script>

<style scoped>

img {
    height: 100%;
}

</style>