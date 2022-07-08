import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Layout from '@/layout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
