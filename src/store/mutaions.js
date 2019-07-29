import { CHANGE_MOBILE_TAB_ITEM, SELECT_ROLE } from './const-types'

const mutations = {
  [CHANGE_MOBILE_TAB_ITEM]: function(state, payload) {
    state.tabItemsSelected = payload.tabItemsSelected
  },
  [SELECT_ROLE]: function(state, payload) {
    state.roleSelected = payload.roleSelected
  },
  getOders(state, orders) {
    const toDisplayTime = time => {
      const date = new Date()
      date.setTime(time)
      return date.toLocaleString()
    }
    let result = orders.data.map(order => ({
      carNumber: order.carNumber,
      customerAddress: order.customerAddress,
      reservationTime: toDisplayTime(order.reservationTime)
    }))
    state.grabbingOrders.splice(0)
    state.grabbingOrders.push(...result)
  }
}

export default mutations
