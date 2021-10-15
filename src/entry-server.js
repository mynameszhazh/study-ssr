import { createApp } from './main';

// 这个用于express路由处理函数调用，用于创建vue实例
export default context => {
  return new Promise((resolve, reject) => {
    const {app, router} = createApp(context)

    // 处理首屏的操作
    router.push(context.url)

    // 检测路由就绪事件 
    router.onReady(() => {
      resolve(app)
    }, reject)
  }) 
}