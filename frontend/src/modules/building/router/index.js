

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
            path: '/publication',
            name: 'publication',
            component: () => import(/* webpackChunkName: "publication" */ '@/modules/building/views/Publication.vue'),
        },
        {
            path: '/registerPost',
            name: 'registerPost',
            component: () => import(/* webpackChunkName: "registerPost" */ '@/modules/building/views/Register.vue'),
        },
        {
            path: '/search',
            name: 'search',
            component: () => import(/* webpackChunkName: "search" */ '@/modules/building/views/Search.vue'),
        },



    ]
}