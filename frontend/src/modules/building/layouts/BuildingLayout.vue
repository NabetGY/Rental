<template>
  <div class="scroll py-3">
    <router-view />
  </div>
</template>

<script>
import { onUnmounted } from 'vue';
import useRoom from '../composables/useRoom';
export default {
  setup() {
    const { getUserPublications, clearUserPublications } = useRoom()
    getUserPublications()
    onUnmounted (() => {
      clearUserPublications()
    })
  }
}
</script>

<style scoped>
.scroll {
  overflow-y: scroll;
  height: calc(100vh - 180px);
}
</style>