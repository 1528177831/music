import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: () => import('@/views/home/Home')
  },
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/playlist',
    component: () => import('@/views/playlist/PlayList')
  },
  {
    path: '/singer',
    component: () => import('@/views/singer/Singer')
  },
  {
    path: '/list',
    component: () => import('@/views/list/List')
  },
  {
    path: '/mine',
    component: () => import('@/views/mine/Mine')
  },
  {
    path: '/search',
    component: () => import('@/views/search/Search')
  },
  {
    path: '/player/:songid',
    component: () => import('@/views/player/Player'),
    props: true
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
