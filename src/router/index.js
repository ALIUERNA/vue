import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: () => import('@/views/Home.vue') },
    { path: '/notFond', name: 'notFond', component: () => import('@/views/404.vue') },
    { path: '/:pathMatch(.*)*', name: 'notFound', component: () => import('@/views/404.vue') },
    { path: '/manager', component: () => import('@/views/manger.vue'),
      children: [
        // 空路径子路由：访问 /manager 时直接渲染 Home.vue
        { path: '', component: () => import('@/views/Home.vue') },
        // 保留原有子路由
        { path: 'home', component: () => import('@/views/Home.vue') }
      ]
    }
  ]
})

export default router
