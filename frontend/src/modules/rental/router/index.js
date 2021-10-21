

export default {
    name: 'rental',
    component: () => import(/* webpackChunkName: "rental" */ '@/modules/rental/layouts/RentalLayout.vue' ),
    children: [
        {
            path: '',
            name: 'home',
            component: () => import(/* webpackChunkName: "home" */ '@/modules/rental/views/Home.vue'),
        },
    ]
}