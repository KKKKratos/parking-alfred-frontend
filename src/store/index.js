import Vuex from 'vuex'
import Vue from 'vue'
import state from './state'
import actions from './actions'
import mutations from './mutaions'
import getters from './getters'
import parkingBoyModule from './modules/parkingBoy'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    parkingBoy: parkingBoyModule
  }
})

export default store
