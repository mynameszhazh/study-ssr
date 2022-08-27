const express = require('express')
// 服务端 渲染 vue 实例的东西
const { createRenderer } = require('vue-server-renderer')
const Vue = require('vue')
const server = express()
const PORT = 80

const renderer = createRenderer()
server.get('/', (req, res) => {
  const app = new Vue({
    data: () => ({ count: 1 }),
    template: `<button @click="count++">{{ count }}</button>`
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