import { GET_ORDER_LIST, GET_ORDER_LIST_BY_CAR_NUMBER } from '../const/common-order-const'
import { getAllOrders, getOrdersByCarNumber } from '../../api/order'

const state = {
  orderList: []
}

const mutations = {
  [GET_ORDER_LIST] (state, payload) {
    state.orderList = payload
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
