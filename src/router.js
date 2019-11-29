import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Error404 from './views/Error404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '*',
    name: '404',
    component: Error404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
