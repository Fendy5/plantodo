import { createApp } from 'vue'
import App from './App.vue'
import './samples/node-api'
import {setupRouter} from "./router"

const app = createApp(App)
setupRouter(app)
app.mount('#app')
  .$nextTick(window.removeLoading)
