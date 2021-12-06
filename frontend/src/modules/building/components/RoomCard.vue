<template>
    <div class="card" style="width: 15rem;" 
    @click="$router.push({ name: 'publication', params: { 'id': room.id } })">
        <img height="150" v-for=" image of room.images[0]" :key="image.id" :src="image" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ numberFormat1.format(room.precio) }}</h5>
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
    setup(){
        const options1 = { style: 'currency', currency: 'COP' };
        const numberFormat1 = new Intl.NumberFormat('es-CO', options1)
        return{
            numberFormat1
        }
    }


}
</script>

<style>

</style>