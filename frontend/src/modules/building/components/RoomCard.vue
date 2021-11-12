<template>
    <div class="card" style="width: 15rem;">
        <img height="150" v-for=" image of room.images[0]" :key="image.id" :src="image" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">$ {{room.precio}}</h5>
            <p class="card-text"> {{room.titulo}} </p>
        </div>
        <div class="card-footer text-muted">
            {{room.created_data}}
        </div>
    </div>
</template>

<script>
export default {
    props:{
        room: {
            type: Object,
            required: true
        }
    },

}
</script>

<style>

</style>