import {
  
  GET_GRABBING_ORDERS,
  GET_GRABBING_PARKING_LOTS,
  UPDATE_GRABBING_ORDER,
  GET_PARKING_BOY_ORDERS,
  UPDATE_PARKING_BOY_ORDER,
  GET_CUSTOMER_ORDERS } from './const-types'
import axios from '../api/config'
// import { resolveCname } from 'dns';
const actions = {
  [GET_GRABBING_ORDERS] ({ commit }) {
    axios.get('/orders', { params: { status: 1 } })
      .then(response => commit(GET_GRABBING_ORDERS, response.data))
      .catch(error => {})
  },
  [GET_GRABBING_PARKING_LOTS] ({ commit }, payload) {
    axios.get(`/employee/${payload.employeeId}/parking-lots`)
      .then(response => { commit(GET_GRABBING_PARKING_LOTS, response.data) })
      .catch(error => {})
  },
  [UPDATE_GRABBING_ORDER] ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios.put(`/orders/${payload.id}`, payload.order)
        .then(response => {
          commit(UPDATE_GRABBING_ORDER, { order: response.data.data })
          resolve(response)
        })
        .catch(error => reject(error))
    })
  },
  [GET_PARKING_BOY_ORDERS] ({ commit }) {
    let result = []
    return new Promise((resolve, reject) => {
      axios.get('/orders', { params: { status: 2 } })
        .then(response => {
          result = response.data.data
          commit(GET_PARKING_BOY_ORDERS, { parkingBoyOrders: response.data.data })
          axios.get('/orders', { params: { status: 3 } })
            .then(response => {
              result.push(...response.data.data)
              commit(GET_PARKING_BOY_ORDERS, { parkingBoyOrders: result })
              resolve(response)
            })
            .catch(error => { reject(error) })
        })
        .catch(error => { reject(error) })
    })
  },
  [UPDATE_PARKING_BOY_ORDER] ({ commit }, payload) {
    axios.put(`/orders/${payload.id}`, payload.order)
      .then(response => { commit(UPDATE_PARKING_BOY_ORDER, { order: response.data.data }) })
  },
  [GET_CUSTOMER_ORDERS] ({ commit }) {
    axios.get(`/orders`)
      .then(response => { 
        commit(GET_CUSTOMER_ORDERS, response.data.data) })
        .catch(error => { reject(error) })  
  },
  getLoginInfo ({ commit }, employeeLoginInfo) {
    const data = {
      name: employeeLoginInfo.name,
      password: employeeLoginInfo.password
    }
    return new Promise((resolve, reject) => {
      axios.post('/login', data)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  }
}

export default actions
