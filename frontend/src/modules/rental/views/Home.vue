<template>
  <div class="container">
    <div class="row contorno">
      
      <h1>Los mas populares</h1>
     <div class="col mb-3 ms-1" v-for="room of publicationsPro" :key="room.id">
        <RoomCard :room="room" />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col mb-3 ms-1" v-for="room of publications" :key="room.id">
        <RoomCard :room="room" />
      </div>
    </div>
  </div>

</template>

<script>
import { defineAsyncComponent, computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    RoomCard: defineAsyncComponent(() =>
      import("@/modules/building/components/RoomCard.vue")
    ),
/*     BotonPago: defineAsyncComponent(() =>
      import("@/modules/building/components/BotonPago.vue")
    ) */
  },
  setup() {
      const store = useStore()
      
      return {
        publications: computed(() => store.state.building.publications ),
        publicationsPro: computed(() => store.getters['building/getPublicationBySubscribed'] ),
      }
    
    },
};
</script>

<style>
    .card:hover {
         transform: scale(1.1);
         box-shadow: 1px 8px 20px grey;
    }
     .card.hover--ending {
         transition: box-shadow 0.6s ease-in;
    }

  .contorno{
        border: none;
        border-radius: 2pt;
        box-shadow:  0 0 3pt 2pt #FFDF00;
        outline: none;
        transition: .1s;
  }
</style>