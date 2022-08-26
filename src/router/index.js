import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: '/index-view',
    component: () => import(/* webpackChunkName: "IndexView" */ '../views/index/IndexView.vue'),
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
        meta: { keepAlive: true, scrollTop: 0 },
        // 路由独享守卫
        beforeEnter: (to, from) => {
          console.log(to)
          // console.log(from)
          // 搜索时当前页面要刷新
          if (from.path === "/search") {
            to.meta.keepAlive = false
          } else {
            to.meta.keepAlive = true
          }
        },
      },
      {
        path: '/users', // 用户详情
        name: 'users-view',
        component: () => import(/* webpackChunkName: "UsersView" */ '../views/users/UsersView.vue'),
        meta: { keepAlive: false, scrollTop: 0 },
      },
      {
        path: '/bind-user', // 绑定用户
        name: 'bind-user-view',
        component: () => import(/* webpackChunkName: "BindUserView" */ '../views/users/BindUserView.vue'),
        meta: { keepAlive: false, scrollTop: 0 },
      },
      {
        path: '/edit-user', // 修改用户
        name: 'edit-user-view',
        component: () => import(/* webpackChunkName: "EditUserView" */ '../views/users/EditUserView.vue'),
        meta: { keepAlive: false, scrollTop: 0 },
      },
      {
        path: '/exchange', // 福利兑换
        name: 'exchange-view',
        component: () => import(/* webpackChunkName: "ExchangeView" */ '../views/users/ExchangeView.vue'),
        meta: { keepAlive: false, scrollTop: 0 },
      },
      {
        path: '/combo', // 套餐
        name: 'combo-view',
        component: () => import(/* webpackChunkName: "ComboView" */ '../views/users/ComboView.vue'),
        meta: { keepAlive: true, scrollTop: 0 },
      },
      {
        path: '/vip-info', // 会员和金币详情
        name: 'vip-info-view',
        component: () => import(/* webpackChunkName: "VipView" */ '../views/users/VipInfoView.vue'),
        meta: { keepAlive: true, scrollTop: 0 },
      },
      {
        path: '/user-record', // 消费记录
        name: 'user-record-view',
        component: () => import(/* webpackChunkName: "RecordView" */ '../views/users/UserRecord.vue'),
        meta: { keepAlive: true, scrollTop: 0 },
      },
    ]
  },
  {
    path: '/back', // 首页
    name: 'back-view',
    component: () => import(/* webpackChunkName: "BackView" */ '../views/back/BackView.vue'),
    meta: { keepAlive: true, scrollTop: 0 },
  },

  {
    path: '/video-info', // 视频页面
    name: 'video-info-view',
    component: () => import(/* webpackChunkName: "VideoView" */ '../views/video/videoInfo.vue'),
    meta: { keepAlive: false, scrollTop: 0 },
  },

  {
    path: '/link', // 广告页
    name: 'link-view',
    component: () => import(/* webpackChunkName: "LinkView" */ '../views/link/linkView.vue'),
    meta: { keepAlive: false, scrollTop: 0 },
  },

  {
    path: '/serve', // 客服
    name: 'serve-view',
    component: () => import(/* webpackChunkName: "ServeView" */ '../views/link/ServeView.vue'),
    meta: { keepAlive: true, scrollTop: 0 },
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
