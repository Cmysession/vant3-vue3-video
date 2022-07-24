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
        path: '/video', // 视频页面
        name: 'video-view',
        component: () => import(/* webpackChunkName: "VideoView" */ '../views/video/VideoView.vue'),
        meta: { keepAlive: false, scrollTop: 0 },
      },
      {
        path: '/search', // 搜索
        name: 'search-view',
        component: () => import(/* webpackChunkName: "SearchView" */ '../views/search/SearchView.vue'),
        meta: { keepAlive: false, scrollTop: 0 },
      },
      {
        path: '/search-info', // 搜索详情
        name: 'search-info-view',
        component: () => import(/* webpackChunkName: "SearchInfoView" */ '../views/search/SearchInfoView.vue'),
        meta: { keepAlive: false, scrollTop: 0 },
        // 路由独享守卫
        beforeEnter: (to, from) => {
          // 搜索时当前页面要刷新
          if (from.path === "/search") {
            to.meta.keepAlive = false
          } else {
            to.meta.keepAlive = true
          }

        },
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
