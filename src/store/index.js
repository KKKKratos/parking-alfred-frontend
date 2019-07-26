import Vuex from 'vuex'
import Vue from 'vue'
import state from './state'
import actions from './actions'
import mutations from './mutaions'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
