import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/*import firebaseApp from './firebase/app';*/

import {BootstrapVue , IconsPlugin} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



Vue.config.productionTip = false

new Vue({
  router,
  store,
  BootstrapVue,
  IconsPlugin,
  /*firebaseApp,*/
  render: h => h(App)
}).$mount('#app')
