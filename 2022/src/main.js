import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router/index.js'
import { createStore } from './store'

Vue.config.productionTip = false

Vue.mixin({
  beforeMount() {
    const { asyncData } = this.$options
    console.log(asyncData, 'asyncData')
    if(asyncData) {
      // 后续通过这个 调用 this.dataPromise 进行使用
      this.dataPromise  = asyncData({
        store: this.$store,
        route: this.$route
      })
    }
  }
})

// 通过一个工厂函数的方式进行更好的操作这
export function createApp(context) {
  const router = createRouter()
  const store = createStore()
  const app = new Vue({
    router,
    context,
    store,
    render: h => h(App)
  })
  return { app, router, store }
}
