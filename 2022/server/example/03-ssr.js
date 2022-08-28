const Vue = require('vue')
const Path = require('path')
const fs = require('fs')

const pathUtils = require('../utils/path.js')
const { resolve } = pathUtils

// 初始化配置
const express = require('express')
const server = express()
const PORT = 8080

// 服务端 渲染 vue 实例的东西
const { createBundleRenderer } = require('vue-server-renderer')
const bundle = require(resolve('../../dist/server/vue-ssr-server-bundle.json'))
// 参数一 为服务端的 bundle
const renderer = createBundleRenderer(bundle, {
  runInNewContext: false, // https://ssr.vuejs.org/zh/api/#runinnewcontext
  template: fs.readFileSync(resolve('../../public/index.html'), 'utf-8'), // 宿主文件 
  clientManifest: require(resolve('../../dist/client/vue-ssr-client-manifest.json')) // 客户端清单
})

// 处理图标, 没有起作用 不知道为什么 
const favicon = require('serve-favicon')
server.use(favicon(Path.join(__dirname, '../../public', 'favicon.ico')))

// 静态文件处理
server.use(express.static(resolve('../../dist/client'), { index: false }))

server.get('*', async (req, res) => {
  // 构造上下文
  const context = {
    title: 'ssr test',
    url: req.url
  }
  try {
    // 渲染输出
    const html = await renderer.renderToString(context)
    // 响应给前端
    res.send(html)
  } catch (error) {
    console.log(error)
    res.status(500).send('服务端渲染错误~~')
  }
})
server.listen(PORT, () => {
  console.log('server running at' + PORT)
})