import Vue from 'vue'
import App from './App.vue' 
import { createRouter } from './router'
// import store from './store'

Vue.config.productionTip = false

// 方正所有的东西都是从这里开始 
export function createApp(context) {
  // 创建路由器实例
  const router = createRouter()

  // 创建vue实例
  const app = new Vue({
    router,
    context,
    render: h => h(App)
  })

  return {app, router}
}