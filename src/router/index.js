import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/auth',
      component: () => import('../views/auth_view/AuthView.vue'),
      children:[
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/auth_view/LoginView.vue')
        }
      ]
    },
    {
      path: '',
      name: '',
      component: () => import('../views/app_views/AppView.vue'),
      children: [
        {
          path: '/my-stocks',
          name: 'my-stocks',
          component: () => import('../views/MyStocksView.vue')
        },
        {
          path: '/add',
          name: 'add-my-stocks',
          component: () => import('../views/AddStockView.vue')
        }
      ]
    },
  ]
})

export default router
