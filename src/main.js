import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/stylesheet/reset.css'
import Tabs from './components/tabs'
import BackTop from './components/backtop'

Vue.use(Tabs).use(BackTop)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
