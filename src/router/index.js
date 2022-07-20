import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/', // 首页
    name: 'home-view',
    component: () => import(/* webpackChunkName: "HomeView" */ '../views/home/HomeView.vue')
  },
  {
    path: '/video', // 首页
    name: 'video-view',
    component: () => import(/* webpackChunkName: "VideoView" */ '../views/video/VideoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
