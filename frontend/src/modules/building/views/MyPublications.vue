<template>
    <div class="container mt-3">
        <dt class="h1"> Mis Publicaciones </dt>
        <table class="table table-hover">
            <thead class="table-light">
                <tr>
                <th scope="col">PUBLICACION</th>
                <th scope="col">FECHA</th>
                <th scope="col">PRECIO</th>
                <th scope="col">OPCIONES</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <img src="https://planosdecasasmodernas.com/wp-content/uploads/2018/03/Plano-de-casa-de-7x12-metros-en-una-planta.jpg" height="70"/>
                    </td>
                    <td>
                        <h6>13/02/2021</h6>
                    </td>
                    <td>
                        <h6>$350000</h6>
                    </td>
                    <td>
                        <a class="btn btn-primary" href="#">Editar</a>
                        <button class="btn btn-danger" 
                            data-bs-toggle="modal" 
                            data-bs-target="#exampleModal">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>


<!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Eliminar publicación</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>¿Está seguro de eliminar esta publicación?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-primary">Si, eliminar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>