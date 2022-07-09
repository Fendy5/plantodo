/**
 * @Author fendy
 * @CreateTime 2022/6/18 03:15
 * @Description
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import { App } from "vue"
import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '',
    children: [
      {
        meta: {
          title: '首页',
          icon: 'home'
        },
        path: '',
        component: () => import('@/views/home/index.vue')
      }
    ]
  },
  {
    path: '/long-plan',
    component: Layout,
    redirect: '',
    children: [
      {
        meta: {
          title: '计划',
          icon: 'long-plan'
        },
        path: '',
        component: () => import('@/views/long-plan/index.vue')
      }
    ]
  },
  {
    path: '/draft',
    component: Layout,
    redirect: '',
    children: [
      {
        meta: {
          title: '草稿',
          icon: 'draft'
        },
        path: '',
        component: () => import('@/views/draft/index.vue')
      }
    ]
  },
  {
    path: '/about',
    component: Layout,
    redirect: '',
    children: [
      {
        path: '',
        meta: {
          icon: 'about',
          title: '关于'
        },
        component: () => import('@/views/about/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      hidden: true
    },
    component: ()=> import('@/views/login/index.vue')
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 配置路由器
export function setupRouter(app: App<Element>) {
  app.use(router)
}
