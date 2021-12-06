<template>
  <div class="scroll py-3">
    <router-view />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.scroll {
  overflow-y: scroll;
  height: calc(100vh - 180px);
}
</style>