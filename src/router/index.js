import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/', // 首页
    name: 'HomeView',
    component: () => import(/* webpackChunkName: "HomeView" */ '../views/home/HomeView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
