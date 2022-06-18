/**
 * @Author fendy
 * @CreateTime 2022/6/18 03:15
 * @Description
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import { App } from "vue"
import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import { PieChartOutlined, UserOutlined } from '@ant-design/icons-vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '',
    children: [
      {
        meta: {
          title: 'Home',
          icon: 'home'
        },
        path: '',
        component: () => import('@/views/home/index.vue')
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
          title: 'About'
        },
        component: () => import('@/views/about/index.vue')
      }
    ]
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
