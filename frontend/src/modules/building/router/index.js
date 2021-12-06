

export default {
    name: 'building',
    component: () => import(/* webpackChunkName: "building" */ '@/modules/building/layouts/BuildingLayout.vue'),
    children: [
        {
            path: '/my-publications',
            name: 'my-publications',
            component: () => import(/* webpackChunkName: "Mypublications" */ '@/modules/building/views/MyPublications.vue'),
        },
        {
            path: '/publication/:id',
            name: 'publication',
            component: () => import(/* webpackChunkName: "publication" */ '@/modules/building/views/Publication.vue'),
            props: ( route )=> {
                return {
                    id: route.params.id
                }
            }
        },
        {
            path: '/register-post',
            name: 'register-post',
            component: () => import(/* webpackChunkName: "registerPost" */ '@/modules/building/views/RegisterRoom.vue'),
        },
        {
            path: '/search/:palabra',
            name: 'search',
            component: () => import(/* webpackChunkName: "search" */ '@/modules/building/views/Search.vue'),
            props: ( route )=> {
                return {
                    palabra: route.params.palabra
                }
            }
        },
        {
            path: '/updateRoom/:id',
            name: 'updateRoom',
            component: () => import(/* webpackChunkName: "updateRoom" */ '@/modules/building/views/UpdateRoom.vue'),
            props: ( route )=> {
                return {
                    id: route.params.id
                }
            }
        },



    ]
}