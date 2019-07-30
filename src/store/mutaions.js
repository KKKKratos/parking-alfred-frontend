import {
  CHANGE_MOBILE_TAB_ITEM,
  SELECT_ROLE,
  CHANGE_WEB_ACTIVE_MENU_ITEM,
  LOGIN_INFORMATION,
  SAVE_TOKEN
} from './const-types'

const mutations = {
  [CHANGE_MOBILE_TAB_ITEM]: function (state, payload) {
    state.tabItemsSelected = payload.tabItemsSelected
  },
  [SELECT_ROLE]: function (state, payload) {
    state.roleSelected = payload.roleSelected
  },
  [CHANGE_WEB_ACTIVE_MENU_ITEM] (state, payload) {
    state.webActiveMenuItem = payload.webActiveMenuItem
  },
  [LOGIN_INFORMATION] (state, payload) {
    state.loginInformation = payload
  },
  [SAVE_TOKEN] (state, payload) {
    state.token = payload
  }
}

export default mutations
