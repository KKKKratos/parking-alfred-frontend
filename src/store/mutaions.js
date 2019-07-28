import { CHANGE_MOBILE_TAB_ITEM, SELECT_ROLE } from './const-types'

const mutations = {
  [CHANGE_MOBILE_TAB_ITEM]: function (state, payload) {
    state.tabItemsSelected = payload.tabItemsSelected
  },
  [SELECT_ROLE]: function (state, payload) {
    state.roleSelected = payload.roleSelected
  },
  getOders (state, orders) {
    console.log(orders.data)
    let result = orders.data.map(order => ({
      carNumber: order.car.carNumber,
      customerAddress: order.customerAddress,
      reservationTime: order.reservationTime
    }))
    state.grabbingOrders.push(...result)
  }
}

export default mutations
