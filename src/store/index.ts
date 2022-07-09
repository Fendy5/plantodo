/**
 * @Author fendy
 * @CreateTime 2022/7/4 10:21
 * @Description
 */

import type { App } from 'vue'
import { createPinia } from 'pinia'

const store = createPinia()

export function setupStore(app: App<Element>) {
  app.use(store)
}

export { store }
