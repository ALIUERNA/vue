import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', redirect: '/manager/home'}, // 根路径重定向到首页
    {path: '/manager', component: () => import('@/views/manger.vue'), // 注意文件名大小写
      children: [
        {path: 'home', component: () => import('@/views/home.vue')}, // 修正为真正的首页组件// 匹配 /manager/home
        {path: 'admin', component: () => import('@/views/admin.vue')}// 匹配 /manager/admin
      ]
    },
    {path: '/notFound', component: () => import('@/views/404.vue')},
    {path: '/:pathMatch(.*)*',}, // 通配符匹配所有未定义路径redirect: '/notFound' // 重定向到404页面
    {path: '/manager', component: () => import('@/views/manger.vue'),
      children: [
        {path: 'admin', component: () => import('@/views/admin.vue')}
      ]
    }

  ]
})

export default router
