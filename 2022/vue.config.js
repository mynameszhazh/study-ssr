const { defineConfig } = require('@vue/cli-service')

// plugin
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const VueSSRClientrPlugin = require('vue-server-renderer/client-plugin')

// utils
const merge = require('lodash.merge')
const nodeExternals = require('webpack-node-externals')

// 根据环境变量, 进行不同的名字判定
const TARGET_NODE = process.env.WEBPACK_TARGET === 'node'
const target = TARGET_NODE ? 'server' : 'client'

module.exports = defineConfig({
  // 对所有的依赖进行一个 babel 处理吗? 除了 node_modules 里面的东西
  transpileDependencies: true,
  // 关闭eslint 的检测 
  lintOnSave: false,
  css: {
    extract: false, // 在 webpack 如果是一个注入 html 的情况 ,是不需要两个文件的
  },
  outputDir: './dist/' + target,
  configureWebpack: () => ({
    // 根据不同的环境 指定不同的入口文件
    entry: `./src/entry-${target}.js`,
    // debugger 工具
    devtool: 'source-map',
    // 如果 target 等于 node , 会告诉 vue 编译面向 服务端的代码, 也就是 适用于 node 的代码
    target: TARGET_NODE ? 'node' : 'web',
    // 因为在客户端是不需要 模拟 node 的变量的
    node: TARGET_NODE ? undefined : false,
    // 输出的位置
    output: {
      libraryTarget: TARGET_NODE ? 'commonjs2' : undefined
    },
    // 外置化 应用程序, 减少我打包的 空间
    externals: TARGET_NODE ?
      nodeExternals({
        // 不需要内置的一些东西,这个肯定是需要在官网好好 看一下才能更好的理解里面的东西了
        allowlist: [/\.css$/]
      }) : undefined,
    // 优化?
    optimization: {
      splitChunks: undefined 
    },
    // 这是一个将服务器整个输出构建为单个 JSON 文件的插件
    plugins: [TARGET_NODE ? new VueSSRServerPlugin() : new VueSSRClientrPlugin()]
  }),
  chainWebpack: config => {
    // 可能是 vue4.0 添加 | 我是 5.0
    if(TARGET_NODE) {
      config.optimization.delete('splitChunks')
    }

    // 这里的操作我还是不太懂..
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        merge(options, {
          optimizeSSR: false
        })
      })
  }
})
