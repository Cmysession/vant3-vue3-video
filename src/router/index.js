import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: '/index-view',
    component: () => import(/* webpackChunkName: "IndexView" */ '../views/index/indexView.vue'),
    meta: { keepAlive: true, scrollTop: 0 },
    children: [
      {
        path: '/home', // 首页
        name: 'home-view',
        component: () => import(/* webpackChunkName: "HomeView" */ '../views/home/HomeView.vue'),
        meta: { keepAlive: true, scrollTop: 0 },
      },
      {
        path: '/video', // 首页
        name: 'video-view',
        component: () => import(/* webpackChunkName: "VideoView" */ '../views/video/VideoView.vue'),
        meta: { keepAlive: false, scrollTop: 0 },
      },
    ]
  },
  {
    path: '/back', // 首页
    name: 'back-view',
    component: () => import(/* webpackChunkName: "BackView" */ '../views/back/BackView.vue'),
    meta: { keepAlive: false, scrollTop: 0 },
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
