import {
  GET_GRABBING_ORDERS,
  GET_GRABBING_PARKING_LOTS,
  UPDATE_GRABBING_ORDER,
  GET_PARKING_BOY_ORDERS,
  UPDATE_PARKING_BOY_ORDER,
  GET_LOGIN_INFO,
  GET_PARKINGLOT_LIST,
  GET_EMPLOYEES_LIST,
  CREATE_EMPLOYEE,
  GET_CUSTOMER_ORDERS,
  UPDATE_CUSTOMER_ORDER,
  CREATE_PARKINGLOT
} from './const-types'
import axios from '../api/config'
import { requestOrders } from '../api/order'

// import { resolveCname } from 'dns';
const actions = {
  [GET_GRABBING_ORDERS]({ commit }) {
    axios.get('/orders', { params: { status: 1 } })
      .then(response => commit(GET_GRABBING_ORDERS, response.data))
      .catch(error => { })
  },
  [GET_GRABBING_PARKING_LOTS]({ commit }, payload) {
    axios.get(`/employees/${payload.employeeId}/parking-lots`)
      .then(response => { commit(GET_GRABBING_PARKING_LOTS, response.data) })
      .catch(error => { })
  },
  [UPDATE_GRABBING_ORDER]({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios.put(`/orders/${payload.id}`, payload.order)
        .then(response => {
          commit(UPDATE_GRABBING_ORDER, { order: response.data.data })
          resolve(response)
        })
        .catch(error => reject(error))
    })
  },
  [UPDATE_CUSTOMER_ORDER]({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios.put(`/orders/${payload.id}`, payload.order)
        .then(response => {
          commit(UPDATE_CUSTOMER_ORDER, { order: response.data.data })
          resolve(response)
        })
        .catch(error => reject(error))
    })
  },
  [GET_PARKING_BOY_ORDERS]({ commit }) {
    return new Promise((resolve, reject) => {
      requestOrders('reservationTime', 'desc')
        .then(response => {
          let orders = response.data.data
          orders = orders.filter(o => o.status !== 1)
          commit(GET_PARKING_BOY_ORDERS, { parkingBoyOrders: orders })
          resolve(response)
        })
        .catch(error => { reject(error) })
    })
  },
  [UPDATE_PARKING_BOY_ORDER]({ commit }, payload) {
    axios.put(`/orders/${payload.id}`, payload.order)
      .then(response => { commit(UPDATE_PARKING_BOY_ORDER, { order: response.data.data }) })
      .catch(error => { })
  },
  [GET_CUSTOMER_ORDERS]({ commit }) {
    requestOrders('reservationTime', 'desc')
      .then(response => {
        commit(GET_CUSTOMER_ORDERS, response.data.data)
      })
      .catch(error => { reject(error) })
  },
  [GET_LOGIN_INFO]({ commit }, payload) {
    const data = {
      mail: payload.email,
      password: payload.password
    }
    return axios.post('/login', data)
  },
  [GET_PARKINGLOT_LIST]: ({ commit }) => {
    axios.get('/parking-lots')
      .then(response => {
        commit(GET_PARKINGLOT_LIST, response.data.data.parkingLots)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  [GET_EMPLOYEES_LIST]({ commit }, payload) {
    if (payload !== undefined) {
      axios.get('/employees', { params: { page: payload.page } })
        .then(response => {
          commit(GET_EMPLOYEES_LIST, response.data.data)
        })
        .catch(error => { })
    } else {
      axios.get('/employees')
        .then(response => {
          commit(GET_EMPLOYEES_LIST, response.data.data)
        })
        .catch(error => { })
    }
  },
  [CREATE_EMPLOYEE]({ commit }, payload) {
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
  },
  [CREATE_PARKINGLOT] ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios.post('/parking-lots', payload.parkinglot)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

export default actions
