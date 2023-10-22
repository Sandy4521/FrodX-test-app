import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import { createRouter, createWebHistory } from 'vue-router'; 

import About from './components/About.vue';
import Registration from './components/Registration.vue';

const routes = [
  { path: '/about', component: About },
  { path: '/registration', component: Registration },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
