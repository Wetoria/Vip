import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Router from './routers'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(Router)

app.mount('#app')
