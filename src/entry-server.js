/* eslint-disable prefer-promise-reject-errors */
import { createApp } from './main'

// 这个用于express路由处理函数调用，用于创建vue实例
export default context => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp(context)

    // 处理首屏的操作
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
      )
        .then(() => {
          context.state = store.state
          resolve(app)
        })
        .catch(reject)
    }, reject)
  })
}
