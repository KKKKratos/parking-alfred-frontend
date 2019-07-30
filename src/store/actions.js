import {
  GET_EMPLOYEES_LIST,
  CREATE_EMPLOYEE,
  GET_CUSTOMER_ORDERS,
  UPDATE_CUSTOMER_ORDER,
  GET_LOGIN_INFO
} from './const-types'
import axios from '../api/config'
import { requestOrders } from '../api/order'

const actions = {
  [UPDATE_CUSTOMER_ORDER] ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios.put(`/orders/${payload.id}`, payload.order)
        .then(response => {
          commit(UPDATE_CUSTOMER_ORDER, { order: response.data.data })
          resolve(response)
        })
        .catch(error => reject(error))
    })
  },
  [GET_CUSTOMER_ORDERS] ({ commit }) {
    requestOrders('reservationTime', 'desc')
      .then(response => {
        commit(GET_CUSTOMER_ORDERS, response.data.data)
      })
      .catch(error => { reject(error) })
  },
  [GET_LOGIN_INFO] ({ commit }, payload) {
    const data = {
      mail: payload.email,
      password: payload.password
    }
    return axios.post('/login', data)
  },
  [GET_EMPLOYEES_LIST] ({ commit }, payload) {
    if (payload !== undefined) {
      axios.get('/employees', { params: { page: payload.page } })
        .then(response => {
          commit(GET_EMPLOYEES_LIST, response.data.data)
        })
        .catch(error => {})
    } else {
      axios.get('/employees')
        .then(response => {
          commit(GET_EMPLOYEES_LIST, response.data.data)
        })
        .catch(error => {})
    }
  },
  [CREATE_EMPLOYEE] ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios.post('/employees', payload.employee)
        .then(response => {
          // commit(CREATE_EMPLOYEE, response.data.data)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

export default actions
