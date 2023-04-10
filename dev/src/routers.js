import {
  createRouter,
  createWebHistory
} from 'vue-router'

import Home from './Index'
import XHS from './XHS'
import InputConvert from './Tools/InputConvert'
import ContactMe from './Weixin/ContactMe'
import Jumper from './Jumper'

function converFilesToRoutes(modules)  {
  const results = []
  for (const filePath in modules) {
    const path =  filePath.split('.')[1]
    const component = modules[filePath]
    results.push({
      path,
      component,
    })
  }
  return results
}

const practiceRoutes = converFilesToRoutes(import.meta.glob('./simple-frontend/practices/*'))

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
    ],
  },
  ...practiceRoutes,
  {
    path: '/contact',
    name: 'ContactMe',
    component: ContactMe,
  },
  {
    path: '/xhs',
    name: 'XHS',
    component: XHS,
  },
  {
    path: '/input-convert',
    name: 'InputConvert',
    component: InputConvert,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Jumper',
    component: Jumper,
    // redirect: {
    //   name: 'Home',
    // },
  },
]

console.log(routes)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  next()
})

export default router