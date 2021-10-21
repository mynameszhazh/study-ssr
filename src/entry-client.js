// 客户端也需要vue实例？
import { createApp } from './main'

const { app, router, store } = createApp()

// 这个是在浏览器里面执行的
if(window.__INITIAL_STATE__) {
  // 浏览器里面
  store.replaceState(window.__INITIAL_STATE__)
}
// 检测路由加载事件
router.onReady(() => {
  // 挂载我的数据
  app.$mount('#app', true)
})
