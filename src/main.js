import { createApp } from 'vue'
import store from "@/store";
import App from './App.vue'
import router from './router/router'
import 'vue3-easy-data-table/dist/style.css';
import '@/assets/index.css'


createApp(App).use(router).use(store).mount('#app')