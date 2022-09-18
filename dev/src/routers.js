import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

import Home from './Index'
import PracticesHome from './simple-frontend/practices'
import Practices1 from './simple-frontend/practices/practice1'

const routes = [{
  path: '/',
  component: Home,
}, {
  path: '/simple-frontend/practices/index',
  component: PracticesHome,
}, {
  path: '/simple-frontend/practices/practice1',
  component: Practices1,
}]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})