// 客户端也需要vue实例？
import { createApp } from './main'

const { app, router } = createApp()

// 检测路由加载事件
router.onReady(() => {
  // 挂载我的数据
  app.$mount('#app', true)
})
