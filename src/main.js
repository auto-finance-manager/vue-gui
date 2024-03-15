// import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from "axios";


// eslint-disable-next-line no-undef
axios.defaults.baseURL = import.meta.env.VUE_APP_API_PATH

console.log(import.meta.env)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/js/bootstrap.bundle.js'

