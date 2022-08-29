import { createApp } from "./main"

const {app ,store ,router} = createApp()

// 这个是在浏览器里面执行的
if (window.__INITIAL_STATE__) {
  // 浏览器里面 还原我的 store 数据
  store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(() => {
  app.$mount('#app')
})