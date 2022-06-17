/**
 * @Author fendy
 * @CreateTime 2022/6/18 03:15
 * @Description
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import { App } from "vue"
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {path: '/', component: () => import('@/views/home/index.vue')},
  {path: '/about', component: () => import('@/views/about/index.vue')}
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 配置路由器
export function setupRouter(app: App<Element>) {
  app.use(router)
}
