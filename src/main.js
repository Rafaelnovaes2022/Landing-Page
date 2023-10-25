import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { firestorePlugin } from 'vuefire';

import '@popperjs/core';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;
Vue.use(firestorePlugin)


createApp(App).use(router).mount('#app')
