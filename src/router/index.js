import { createRouter, createWebHashHistory } from 'vue-router'

/**
 * 公开路由表
 */
// 公有路由表
const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
