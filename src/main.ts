import { createApp } from 'vue'
import App from './App.vue'
import './samples/node-api'
import 'virtual:svg-icons-register'
import svgIcon from "@/components/SvgIcon/index.vue"

import '@/styles/tailwind.css'
import '@/styles/index.less'
import { setupRouter } from "./router"
import { setupStore } from "@/store"
import { getUserInfo } from "@/store/helper"

const bootstrap = () => {
  const app = createApp(App)
  setupStore(app)
  setupRouter(app)
  getUserInfo()
  app.component('svg-icon', svgIcon)
  app.mount('#app').$nextTick(window.removeLoading)
}

bootstrap()
