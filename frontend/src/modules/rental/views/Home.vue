<template>
  <div class="container m-5">
    <div class="row">
      <div class="col mb-3" v-for="room of myPublications" :key="room.id">
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
    )
  },
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