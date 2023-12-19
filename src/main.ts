import './assets/main.css'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';


const app = createApp(App)

app.use(router)
app.use(store);

app.mount('#app')
