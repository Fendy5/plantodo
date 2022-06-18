/**
 * @Author fendy
 * @CreateTime 2022/6/19 04:45
 * @Description
 */
import type { RouteRecordRaw } from 'vue-router'

declare module 'vue-router' {
  export type RouteRecordRaw = {
    meta: {
      title: string
    }
  }
}
