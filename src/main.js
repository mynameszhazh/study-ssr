import Vue from 'vue'
import App from './App.vue' 
import { createRouter } from './router'
import { createStore } from './store'
// import store from './store'

Vue.config.productionTip = false

Vue.mixin({
  beforeCreate() {
    const {asyncData} = this.$options
    if(asyncData) {
      // 加入了一些不明白的操作
      this.dataPromise = asyncData({
        store: this.$store,
        route: this.$route
      })
    }
  }
})

// 方正所有的东西都是从这里开始 
export function createApp(context) {
  // 创建路由器实例
  const router = createRouter()
  const store = createStore()

  // 创建vue实例
  const app = new Vue({
    router,
    context,
    store,
    render: h => h(App)
  })

  return {app, router, store}
}