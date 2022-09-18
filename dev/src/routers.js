import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

import Home from './Index'
import PracticesHome from './simple-frontend/practices'
import Practices1 from './simple-frontend/practices/practice-resume-html'
import Practices2 from './simple-frontend/practices/practice-resume-css'

const routes = [{
  path: '/',
  component: Home,
}, {
  path: '/simple-frontend/practices/index',
  component: PracticesHome,
}, {
  path: '/simple-frontend/practices/practice-resume-html',
  component: Practices1,
}, {
  path: '/simple-frontend/practices/practice-resume-css',
  component: Practices2,
}]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})