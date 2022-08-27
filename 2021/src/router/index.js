import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

// 路由的工厂函数
export function createRouter() {
  return new VueRouter({
    routes: [
      {path: '/', component: Home},
      {path: '/about', component: About}
    ]
  })
}