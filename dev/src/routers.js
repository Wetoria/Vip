import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

import Home from './Index'

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
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'Home',
    },
  },
]

console.log(routes)

export default createRouter({
  history: createWebHashHistory(),
  routes,
})