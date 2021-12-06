<template>
  <div class="container m-5">
    <div class="row">
      <div class="col mb-3" v-for="room of publicationsPro" :key="room.id">
        <RoomCard :room="room" />
      </div>
      <div class="col mb-3" v-for="room of publications" :key="room.id">
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

</style>