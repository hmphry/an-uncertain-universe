import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './assets/scss/screen.scss';

import App from '@/App.vue';
import Home from '@/layouts/Home.vue';
import About from '@/layouts/About.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App);
app.use(router);
app.mount('#app');