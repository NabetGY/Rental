import { createRouter, createWebHashHistory } from 'vue-router'
import authRouter from '../modules/auth/router'
import authBuilding from '../modules/building/router'
import rentalRouter from '../modules/rental/router'


const routes = [
  {
    path: '/auth',
    ...authRouter
  },
  {
    path: '/building',
    ...authBuilding
  },
  {
    path: '/',
    ...rentalRouter
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
