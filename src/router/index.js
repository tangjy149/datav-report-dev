import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/login',
    name: 'login',
    component: login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
