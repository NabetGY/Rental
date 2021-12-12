import isAuthenticatedGuard from '@/modules/auth/router/auth-guard'
export default {
    name: 'auth',
    component: () => import(/* webpackChunkName: "auth" */ '@/modules/auth/layouts/AuthLayout.vue'),
    children: [
        {
            path: '/login',
            name: 'login',
            component: () => import(/* webpackChunkName: "login" */ '@/modules/auth/views/Login.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import(/* webpackChunkName: "register" */ '@/modules/auth/views/Register.vue'),
        },
        {
            path: '/profile',
            name: 'profile',
            beforeEnter: [ isAuthenticatedGuard ],
            component: () => import(/* webpackChunkName: "profile" */ '@/modules/auth/views/Profile.vue'),
        },
    ]
}