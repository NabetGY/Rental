<template>

    <div class="card profile-header">
        <div class="body">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-12">
                    <div class="profile-image float-md-right ps-3"> <img :src="user.image_perfil" alt=""> </div>
                </div>
                <div class="col-lg-8 col-md-8 col-12">
                    <h5 class="fw-bold">Informacion del arrendador</h5>
                    <div class="ps-3">
                        <h6 class="mt-0 mb-0">Nombre de usuario: <strong>{{ user.username }}</strong></h6>
                        <span >Valoracion:</span>
                        <div class="ratings ml-2"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                        <div v-if="authStatus === 'no-authenicate'">
                            <button @click="goToLogin" type="button" class="btn btn-primary">
                                Iniciar Sesion
                            </button>
                        </div>
                        <div v-else>
                            
                            <h6><strong>Telefono: 
                                <a :href="'https://api.whatsapp.com/send?phone=[57]['+user.number_phone+']' ">{{ user.number_phone }}</a>
                                </strong></h6>
                        </div>
                    </div>
                </div>                
            </div>
        </div>                    
    </div>
    
</template>

<script>
import { useRouter } from "vue-router";
import useAuth from '@/modules/auth/composables/useAuth'



export default {
    props: {

        user:{ 
            type: Object,
            required: true
        }
    },
    setup() {
        const router = useRouter()
        const  { authStatus } = useAuth()


        return {
            goToLogin: () => {
                router.push({ name: "login" })
            },
            authStatus
        }

    },
}
</script>

<style scoped>
a {
    color: #f96332;
}
.mt-5{
    margin-top: 5px;   
}

.card {
    background: #fff;
    margin-bottom: 30px;
    transition: .5s;
    border: 0;
    border-radius: .1875rem;
    display: inline-block;
    position: relative;
    width: 100%;
    box-shadow: none;
}
.card .body {
    font-size: 14px;
    color: #424242;
    padding: 20px;
    font-weight: 400;
}
.profile-header {
    position: relative
}

.profile-header .profile-image img {
    border-radius: 50%;
    width: 140px;
    height: 140px;
    border: 3px solid #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
}

.profile-header .social-icon a {
    margin: 0 5px
}

.profile-sub-header {
    min-height: 60px;
    width: 100%
}

.profile-sub-header ul.box-list {
    display: inline-table;
    table-layout: fixed;
    width: 100%;
    background: #eee
}

.profile-sub-header ul.box-list li {
    border-right: 1px solid #e0e0e0;
    display: table-cell;
    list-style: none
}

.profile-sub-header ul.box-list li:last-child {
    border-right: none
}

.profile-sub-header ul.box-list li a {
    display: block;
    padding: 15px 0;
    color: #424242
}
</style>