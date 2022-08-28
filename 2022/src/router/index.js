import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

import Home from '../view/Home.vue'
import About from '../view/About.vue'

export function createRouter() {
  return new VueRouter({
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/about',
        component: About
      },
    ]
  })
}