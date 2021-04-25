import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/Login.vue'
import register from '../views/Register.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/login',
    name: 'login',
    component: login
  }, {
    path: '/register',
    name: 'register',
    component: register
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
