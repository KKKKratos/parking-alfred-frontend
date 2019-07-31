import { GET_CUSTOMER_ORDERS, UPDATE_CUSTOMER_ORDER, CREATE_CUSTOMER } from '../const/customer-const'
import { requestOrders, updateOrderByStatus } from '../../api/order'
import { createCustomer } from '../../api/customer'

const state = {
  customerOrders: []
}

const mutations = {
  [UPDATE_CUSTOMER_ORDER] (state, payload) {
    const index = state.customerOrders.findIndex(value => value.id === payload.order.id)
    state.customerOrders[index].status = 3
  },
  [GET_CUSTOMER_ORDERS] (state, orders) {
    const toDisplayTime = time => {
      const date = new Date()
      date.setTime(time)
      return date.toLocaleString()
    }
    let result = orders.map(order => ({
      id: order.id,
      carNumber: order.carNumber,
      customerAddress: order.customerAddress,
      reservationTime: toDisplayTime(order.reservationTime),
      status: order.status,
      type: order.type
    }))
    state.customerOrders.splice(0)
    state.customerOrders.push(...result)
  }
}

const actions = {
  [GET_CUSTOMER_ORDERS] ({ commit }) {
    requestOrders('reservationTime', 'desc')
      .then(response => {
        commit(GET_CUSTOMER_ORDERS, response.data.data)
      })
      .catch(() => { })
  },
  [UPDATE_CUSTOMER_ORDER] ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      updateOrderByStatus(payload.id, payload.order)
        .then(response => {
          commit(UPDATE_CUSTOMER_ORDER, { order: response.data.data })
          resolve(response)
        })
        .catch(error => reject(error))
    })
  },
  [CREATE_CUSTOMER] ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      createCustomer(payload.customer)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

}

const getters = {}

export default {
  state,
  actions,
  mutations,
  getters
}
