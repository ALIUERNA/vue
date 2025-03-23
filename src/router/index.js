import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: import('../views/manger.vue'), children: [
        {path: 'home', component: import('../views/Home.vue')},
      ]},
    {path: '/notFond', name: 'notFond', component: import('../views/404.vue'),},
    {path: '/notFond', name: 'notFond', component: import('../views/404.vue'),},
    {path: '/:pathMatch(.*)*', name: 'notFound', component: () => import('@/views/404.vue')}
  ],
})

export default router
