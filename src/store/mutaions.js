import { CHANGE_MOBILE_TAB_ITEM, SELECT_ROLE } from './const-types'

const mutations = {
  [CHANGE_MOBILE_TAB_ITEM]: function (state, payload) {
    state.tabItemsSelected = payload.tabItemsSelected
  },  
  [SELECT_ROLE]: function (state, payload) {
    state.roleSelected = payload.roleSelected
  }
}

export default mutations
