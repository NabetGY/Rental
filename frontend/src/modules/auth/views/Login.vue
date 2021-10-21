<template>

    <form class="login-form">

        <div class="text-center">
			<img class="avatar mb-3" src="@/assets/avatar.svg" alt="Avatar">
		</div>				

        <h2 class="text-center mb-3">Iniciar Sesion</h2>    

        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Correo electronico</label>
        </div>

        <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Contraseña</label>
        </div>

        <div class="text-center">
            <button type="submit" class="btn btn-indigo mb-3">Entrar</button>
        </div>

        <p class="text-center">
            <router-link :to="{ name: 'register' }"> Registrate ya!...</router-link>
        </p>

    </form>

</template>

<script>

export default {

    setup() {


    }

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