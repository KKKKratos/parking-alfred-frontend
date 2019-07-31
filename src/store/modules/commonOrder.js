import { GET_ORDER_LIST, GET_ORDER_LIST_BY_CAR_NUMBER, UPDATE_ORDER_BY_STATUS } from '../const/common-order-const'
import { getAllOrders, getOrdersByCarNumber, updateOrderByStatus } from '../../api/order'

const state = {
  orderList: []
}

const mutations = {
  [GET_ORDER_LIST] (state, payload) {
    state.orderList = payload
  },
  [UPDATE_ORDER_BY_STATUS] (state, payload) {
    state.orderList = state.orderList.map(x => {
      if (x.id === payload.id) {
        x.status = payload.status
      }
      return x
    })
  }
}

const actions = {
  [GET_ORDER_LIST] ({ commit }) {
    return new Promise((resolve, reject) => {
      getAllOrders()
        .then(response => {
          commit(GET_ORDER_LIST, response.data.data)
          resolve(response)
        })
        .catch(error => reject(error))
    })
  },
  [GET_ORDER_LIST_BY_CAR_NUMBER] ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      getOrdersByCarNumber(payload.carNumber)
        .then(response => {
          commit(GET_ORDER_LIST, response.data.data)
          resolve(response)
        })
        .catch(error => reject(error))
    })
  },
  [UPDATE_ORDER_BY_STATUS] ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      updateOrderByStatus(payload.order.id, payload.order)
        .then(response => {
          commit(UPDATE_ORDER_BY_STATUS, response.data.data)
          resolve(response)
        })
        .catch(error => reject(error))
    })
  }
}

const getters = {

}

export default {
  state,
  actions,
  mutations,
  getters
}
