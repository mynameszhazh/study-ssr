const path = require('path')
const fs = require('fs')
const favicon = require('serve-favicon')

// const Vue = require('vue')
const express = require('express')
function resolve (dir) {
  return path.resolve(__dirname, dir)
}
const server = express()
const { createBundleRenderer } = require('vue-server-renderer')
const bundle = require(resolve('../dist/server/vue-ssr-server-bundle.json'))
const renderer = createBundleRenderer(bundle, {
  runInNewContext: false, // 推荐
  template: fs.readFileSync(resolve('../public/index.html'), 'utf-8'), // （可选）页面模板
  clientManifest: require(resolve('../dist/client/vue-ssr-client-manifest.json'))
})

// 他会直接过滤掉我的favicon 就是一个防止干扰的操作，我这个use之前拦截我的这个方法很好使用，也没有说明难度就这样吧
server.use(favicon(path.join(__dirname, '../public', 'favicon.ico')))

// 这样就是可以使用一个静态目录，我因为的使用方式就是如果我在我的代码中使用../ 这种形式的话就可以使用这种东西
server.use(express.static(resolve('../dist/client'), { index: false }))

server.get('*', async (req, res) => {
  // 构造上下文
  const context = {
    title: 'ssr test',
    url: req.url
  }
  // 渲染输出
  try {
    const html = await renderer.renderToString(context)
    res.send(html)
  } catch (error) {
    res.status(500).send('服务器出错了，请联系管理员')
  }
})

server.listen(8080)
