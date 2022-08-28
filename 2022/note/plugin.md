# plugin

## vue-server-renderer

### 基本介绍

- 使用 vue + node 处理的 ssr 策略 还是很不错的选择

### server-plugin

- ssr 服务端 的插件处理

### client-plugin

- ssr 客户端 的插件处理

## webpack-node-externals

### 基本介绍

- 主要用来处理 webpack 中的 一个 `externals` 的一个配置
  - 增加一些白名单等等...

## cross-env

### 基本介绍

- 在 `package.json` 运行时候 输送一些参数进去

```
    "serve": "vue-cli-service serve",
    "lint": "vue-cli-service lint",
    "build:client": "vue-cli-service build",
    "build:server": "cross-env WEBPACK_TARGET=node vue-cli-service build",
    "build": "npm run build:server && npm run build:client"
```
