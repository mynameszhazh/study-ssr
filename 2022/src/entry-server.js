// 调佣刚才 main 里面的工厂函数,创建vue实例对象
import { createApp } from "./main"

// 这里在 express 那里进行调用, 用于创建 vue 实例
export default context => {
  // 确保异步数据的正确性
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp(context)

    // 显示首屏处理
    router.push(context.url)

    // 检测路由就绪事件
    router.onReady(() => {
      // 获取匹配的路由组件数组
      const matchedComponents = router.getMatchedComponents()
      // 如果等于零的意思吗
      if (!matchedComponents.length) {
        return reject({ mas: '404' })
      }
      Promise.all(
        matchedComponents.map(Component => {
          if (Component.asyncData) {
            return Component.asyncData({
              store,
              route: router.currentRoute
            })
          }
        })
      ).then(() => {
        // 所有预取钩子 resolve 后
        // store 已经填充入 渲染应用所需状态
        // 将状态附加到上下文, 且 `template` 选项用于 renderer 时
        // 状态将自动序列化为 `window__INITIAL_STATE__`, 并注入 HTML
        context.state = store.state

        // 返回我的vue实例, 后面 案列中 renderer 会进行一个使用
        resolve(app)
      }).catch(reject)
    }, reject)
  })
}