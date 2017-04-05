import Vue from 'vue'
import App from './App'

import Vuex from 'vuex'
Vue.use(Vuex)

import store from  './components/chap8/AppStore'

window.bus = new Vue()


new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
