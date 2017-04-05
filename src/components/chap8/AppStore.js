import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

const state = {
  citizen: {}
}

const getters = {
  selectedCitizen: state => state.citizen
}

const mutations = {
  SELECT_CITIZEN: (state, citizen) => {
    state.citizen = citizen[0]
  }
}

const actions = {
  selectCitizen: (store, citizenId) => {
    Vue.http.options.root = 'http://localhost:3000'
    Vue.resource('citizens{/id}/details').get({id:citizenId}).then((response) => {
        store.commit('SELECT_CITIZEN', response.data)
      }, (response) => {
        console.log('erreur', response);
      }
    )
  }
}

let store = new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions,
  strict: true
})

export default store

