import Vue from 'vue'
import App from './App.vue'
import './assets/css/normilize.css'
import './assets/css/style.css'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
