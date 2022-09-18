import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './Index'

const routes = [{
  path: '/',
  component: Home,
}]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})