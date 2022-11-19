import Vue from 'vue'
import App from './App.vue'
//nuevo


// Import Bootstrap an BootstrapVue CSS files (order is important)
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'

//import { BootstrapVue } from 'bootstrap-vue'




//nuevo
import router from './router'
import store from './store'



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


//nuevo
// Make BootstrapVue available throughout your project
//Vue.use(BootstrapVue)