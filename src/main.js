import './assets/main.css'
import {createRouter, createWebHistory} from 'vue-router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Page from './views/Page.vue'
import App from './App.vue'
import router from './router'


const app = createApp(App)
const router = createRouter({history: createRouter(),
routes:[{path:'/',name:'Page',component:Page}]})
app.use(createPinia())
app.use(router)
app.mount('#app')
