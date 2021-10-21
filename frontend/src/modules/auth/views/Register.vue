<template>
        <div class="container">
            <h2 class="text-center m-1 mb-4 mt-4">Registro de usuario</h2>
            <form action="">
                <div class="row">
                    <div class="mx-auto col-md-6 bg-light card mb-4 mt-4">
                        <div class="mb-3 mt-3">
                            <input type="file" value="" placeholder="" class="form-control">
                        </div>
                        <div class="row align-items-center mb-3">
                            <div class="col">
                                <input type="text" value="" placeholder="Nombre" class="form-control">
                            </div>
                            <div class="col">
                                <input type="text" value="" placeholder="Apellidos" class="form-control">
                            </div>
                        </div>
                        <div class="row align-items-center mb-3">
                            <div class="col">
                                <input type="email" value="" placeholder="Correo" class="form-control">
                            </div>
                            <div class="col">
                                <input type="password" value="" placeholder="Contraseña" class="form-control">
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div class="col text-center">
                <input type="submit" name="add-admin-submit" id="add-admin-submit" tabindex="4" class="btn btn-primary my-3" value="Guardar">
                <a class="btn btn-secondary" href="#">Cancelar</a>
            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style scoped>

    .login-form {
        width: 380px;
        margin: 20px auto;
        padding: 30px 20px;
        background-color: white;
        border-radius: 5%;
    }

    .avatar {
        height: 100px;
    }

</style>