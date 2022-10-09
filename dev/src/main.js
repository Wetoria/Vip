import { createApp } from 'vue'
import App from './App.vue'
import Router from './routers'

import './assets/main.css'


const app = createApp(App)

app.use(Router)

const globalComponents = import.meta.glob('./components/*', { eager: true })

for (const key in globalComponents) {
  const paths = key.split('/')
  const name = paths[paths.length - 1].split('.')[0]
  app.component(name, globalComponents[key].default)
}

window.vm = app;

app.mount('#app')
