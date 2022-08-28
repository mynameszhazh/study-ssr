import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router/index.js'

Vue.config.productionTip = false

// 通过一个工厂函数的方式进行更好的操作这
export function createApp(context) {
  const router = createRouter()
  const app = new Vue({
    router,
    context,
    render: h => h(App)
  })
  return { app, router }
}
