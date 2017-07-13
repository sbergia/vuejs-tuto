import Vue from 'vue'
import App from './App'

import Vuex from 'vuex'
Vue.use(Vuex)

import store from  './components/chap8/AppStore'

import router from './pages/chap9/AppRoutes'



window.bus = new Vue()

new Vue({
  el: '#app',
  store,
  router, //chap9
  render: h => h(App)
})
