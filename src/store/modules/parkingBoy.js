import {
  GET_PARKING_BOY_ORDERS,
  GET_TARGET_ORDER,
  GET_GRABBING_ORDERS,
  GET_GRABBING_PARKING_LOTS,
  UPDATE_TARGET_ORDER,
  UPDATE_PARKING_BOY_SELECTED_ORDER,
  UPDATE_TARGET_ORDER_BY_STATUS,
  SET_TARGET_ORDER_STATUS,
  GET_PARKING_BOY_LIST,
  UPDATE_PARKING_BOY_BY_PARKING_LOTS,
  GET_PARKING_BOY_LIST_BY_NAME,
  GET_ORDERS_BY_PARKING_BOY_ID
} from '../const/parking-boy-const'
import { getEmployeeParkingLots, getParkingBoys, updateParkingLotsOfBoy, getParkingBoysByName, getOrdersByEmployeeId } from '../../api/employee'
import { requestOrders, getGabbingOrders, updateOrderByStatus } from '../../api/order'

const state = {
  grabbingOrders: [],
  grabbingTargetOrder: {},
  grabbingParkingLots: [],
  parkingBoyOrders: [],
  parkingBoyList: [],
  parkingLotsOfBoy: [],
  parkingBoyTotalCount: 0
}

const mutations = {
  [GET_GRABBING_ORDERS] (state, orders) {
    const toDisplayTime = time => {
      const date = new Date()
      date.setTime(time)
      return date.toLocaleString()
    }
    let result = orders.data.map(order => ({
      id: order.id,
      carNumber: order.carNumber,
      customerAddress: order.customerAddress,
      reservationTime: toDisplayTime(order.reservationTime),
      status: order.status,
      type: order.type
    }))
    state.grabbingOrders.splice(0)
    state.grabbingOrders = [...result]
  },
  [GET_TARGET_ORDER] (state, payload) {
    state.grabbingTargetOrder = payload.grabbingTargetOrder
  },
  [GET_GRABBING_PARKING_LOTS] (state, payload) {
    state.grabbingParkingLots = payload.data
  },
  [UPDATE_TARGET_ORDER_BY_STATUS] (state, payload) {
    const index = state.grabbingOrders.findIndex(value => value.id === payload.order.id)
    state.grabbingOrders.splice(index, 1)
  },
  [UPDATE_TARGET_ORDER] (state, payload) {
    if (payload != null) {
      state.grabbingTargetOrder.parkingLot = payload.parkingLot
      state.grabbingTargetOrder.parkingLot.occupied += 1
      const date = new Date()
      date.setTime(payload.reservationTime)
      state.grabbingTargetOrder.reservationTime = date.getTime()
    }
    const date = new Date()
    state.grabbingTargetOrder.reservationTime = date.getTime()
    state.grabbingTargetOrder.status = 2
  },
  [GET_PARKING_BOY_ORDERS] (state, payload) {
    state.parkingBoyOrders = payload.parkingBoyOrders
  },
  [GET_ORDERS_BY_PARKING_BOY_ID] (state, payload) {
    state.parkingBoyOrders = payload
  },
  [UPDATE_PARKING_BOY_SELECTED_ORDER] (state, payload) {
    const index = state.grabbingOrders.findIndex(value => value.id === payload.order.id)
    state.parkingBoyOrders[index] = payload.order
  },
  [SET_TARGET_ORDER_STATUS] (state, payload) {
    state.grabbingTargetOrder.status = payload
    const date = new Date()
    date.setTime(state.grabbingTargetOrder.reservationTime)
    state.grabbingTargetOrder.reservationTime = date.getTime()
  },
  [GET_PARKING_BOY_LIST] (state, payload) {
    state.parkingBoyTotalCount = payload.parkingBoys.totalCount
    state.parkingBoyList = payload.parkingBoys.employees
  },
  [UPDATE_PARKING_BOY_BY_PARKING_LOTS] (state, payload) {
    const index = state.parkingBoyList.findIndex(x => {
      return x.id === payload.parkingBoy.id
    })
    state.parkingBoyList[index].parkingLotVOS = payload.parkingBoy.parkingLotVOS
  }
}

const actions = {
  [GET_GRABBING_ORDERS] ({ commit }) {
    getGabbingOrders().then(response => {
      commit(GET_GRABBING_ORDERS, response.data)
    }).catch(() => {})
  },
  [GET_GRABBING_PARKING_LOTS] ({ commit }, payload) {
    getEmployeeParkingLots(payload.employeeId)
      .then(response => {
        commit(GET_GRABBING_PARKING_LOTS, response.data)
      })
      .catch(() => {})
  },
  [GET_GRABBING_PARKING_LOTS] ({ commit }, payload) {
    getEmployeeParkingLots(payload.employeeId)
      .then(response => {
        commit(GET_GRABBING_PARKING_LOTS, response.data)
      })
      .catch(() => {})
  },
  [GET_ORDERS_BY_PARKING_BOY_ID] ({ commit }, payload) {
    getOrdersByEmployeeId(payload)
      .then(response => {
        let data = response.data.data
        data = data.sort((first, second) => second.reservationTime - first.reservationTime)
        data = data.filter(order => order.status !== 1)
        commit(GET_ORDERS_BY_PARKING_BOY_ID, data)
      })
      .catch(() => {})
  },
  [UPDATE_TARGET_ORDER_BY_STATUS] ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      updateOrderByStatus(payload.id, payload.order)
        .then(response => {
          commit(UPDATE_TARGET_ORDER_BY_STATUS, { order: response.data.data })
          resolve(response)
        })
        .catch(error => reject(error))
    })
  },
  [GET_PARKING_BOY_ORDERS] ({ commit }) {
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
  [UPDATE_PARKING_BOY_SELECTED_ORDER] ({ commit }, payload) {
    updateOrderByStatus(payload.id, payload.order)
      .then(response => {
        commit(UPDATE_PARKING_BOY_SELECTED_ORDER, { order: response.data.data })
      })
      .catch(() => {})
  },
  [GET_PARKING_BOY_LIST] ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      getParkingBoys()
        .then(response => {
          commit(GET_PARKING_BOY_LIST, { parkingBoys: response.data.data })
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  [GET_PARKING_BOY_LIST_BY_NAME] ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      getParkingBoysByName(payload)
        .then(response => {
          commit(GET_PARKING_BOY_LIST, { parkingBoys: response.data.data })
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  [UPDATE_PARKING_BOY_BY_PARKING_LOTS] ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      updateParkingLotsOfBoy(payload.id, payload.parkingLotIdList)
        .then(response => {
          commit(UPDATE_PARKING_BOY_BY_PARKING_LOTS, { parkingBoy: response.data.data })
          resolve(response)
        })
        .catch((error) => { reject(error) })
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
