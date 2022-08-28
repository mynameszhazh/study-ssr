# 笔记咯

## 基本知识

### 资源
- [vue-ssr](https://ssr.vuejs.org)
  - 官方文档
### 概念
- 将vue实例渲染为 html字符串返回, 在前端激活为交互程序
 
### 优点
- seo
- 首屏加载

### 缺点 
- 服务端的压力很大
- vue 中的一些生命周期用不了

## 服务端知识
###  express
  - 最经典的一个 node 最接口的框架

### vue-server-renderer
- 通过这个插件进行一个 vue 字符串模板 => 可交互程序的关键 插件
- 细节
  - 在下载这个东西 最好 `npm i vue vue-server-renderer -S` 这样执行
    - 主要是保障 版本的一致 
- 没有交互的案列
  - [here](../server/example/01-vue-server-renderer.js)
    - 这里可以处理 所有的静态文件

### 传统的 `服务端` 渲染方式
- [ssr](../server/example/02-express-ssr.js)
  - 通过 路径拼接的方式, 进行一个 文件的动态加载这样