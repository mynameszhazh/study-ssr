// 调佣刚才 main 里面的工厂函数,创建vue实例对象
import { createApp } from "./main"

// 这里在 express 那里进行调用, 用于创建 vue 实例
export default context => {
  // 确保异步数据的正确性
  return new Promise((resolve, reject) => {
    const {app, router} = createApp(context)
    
    // 显示首屏处理
    router.push(context.url)

    // 检测路由就绪事件
    router.onReady(() => {
      resolve(app)
    }, reject)
  })
}