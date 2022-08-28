const Vue = require('vue')
const Path = require('path')
const fs = require('fs')

const express = require('express')
const server = express()
const PORT = 8080

// 服务端 渲染 vue 实例的东西
const { createRenderer } = require('vue-server-renderer')
const renderer = createRenderer()

// 处理图标, 没有起作用 不知道为什么 
const favicon = require('serve-favicon')
server.use(favicon(Path.join(__dirname, '../../public', 'favicon.ico')))

server.get('*', (req, res) => {
  console.log(req.url,req.url.substring(1))
  const templateName = req.url.substring(1) || 'index'
  const fileBuffer = fs.readFileSync(Path.join(__dirname, '../pages', `${templateName}.html`))
  const app = new Vue({
    data()  {
      return {
        list: ['kebi', 'james', 'curry', 'xjh']
      }
    },
    template: fileBuffer.toString()
  })
  renderer.renderToString(app).then((html) => {
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Vue SSR Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
    </html>
    `)
  })
})
server.listen(PORT, () => {
  console.log('server running at' + PORT)
})