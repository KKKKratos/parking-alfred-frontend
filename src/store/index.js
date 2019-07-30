import Vuex from 'vuex'
import Vue from 'vue'
import state from './state'
import actions from './actions'
import mutations from './mutaions'
import getters from './getters'
import parkingBoyModule from './modules/parkingBoy'
import customer from './modules/customer'
import employee from './modules/employee'
import commonParkingLot from './modules/commonParkingLot'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    parkingBoy: parkingBoyModule,
    customer: customer,
    employee: employee,
    commonParkingLot: commonParkingLot
  }
})

export default store
