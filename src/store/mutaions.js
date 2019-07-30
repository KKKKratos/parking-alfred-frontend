import {
  CHANGE_MOBILE_TAB_ITEM,
  SELECT_ROLE,
  GET_GRABBING_ORDERS,
  GET_TARGET_ORDER,
  GET_GRABBING_PARKING_LOTS,
  UPDATE_TARGET_ORDER_BY_STATUS,
  UPDATE_TARGET_ORDER,
  GET_PARKING_BOY_ORDERS,
  UPDATE_PARKING_BOY_SELECTED_ORDER,
  CHANGE_WEB_ACTIVE_MENU_ITEM,
  GET_EMPLOYEES_LIST,
  CHANGE_CREATING_EMPLOYEE_DIALOG,
  GET_CUSTOMER_ORDERS,
  SET_TARGET_ORDER_STATUS,
  LOGIN_INFORMATION,
  SAVE_TOKEN,
  UPDATE_CUSTOMER_ORDER
} from './const-types'
import { employeeEnums } from '../config/util'

const mutations = {
  [CHANGE_MOBILE_TAB_ITEM]: function (state, payload) {
    state.tabItemsSelected = payload.tabItemsSelected
  },
  [SELECT_ROLE]: function (state, payload) {
    state.roleSelected = payload.roleSelected
  },
  // [GET_GRABBING_ORDERS] (state, orders) {
  //   const toDisplayTime = time => {
  //     const date = new Date()
  //     date.setTime(time)
  //     return date.toLocaleString()
  //   }
  //   let result = orders.data.map(order => ({
  //     id: order.id,
  //     carNumber: order.carNumber,
  //     customerAddress: order.customerAddress,
  //     reservationTime: toDisplayTime(order.reservationTime),
  //     status: order.status,
  //     type: order.type
  //   }))
  //   state.grabbingOrders.splice(0)
  //   state.grabbingOrders = [...result]
  // },
  // [GET_TARGET_ORDER] (state, payload) {
  //   state.targetOrder = payload.targetOrder
  // },
  // [GET_GRABBING_PARKING_LOTS] (state, payload) {
  //   state.grabbingParkingLots = payload.data
  // },
  // [DELETE_TARGET_ORDER] (state, payload) {
  //   const index = state.grabbingOrders.findIndex(value => value.id === payload.order.id)
  //   state.grabbingOrders.splice(index, 1)
  // },
  [UPDATE_CUSTOMER_ORDER] (state, payload) {
    const index = state.customerOrders.findIndex(value => value.id === payload.order.id)
    state.customerOrders[index].status = 3
  },
  // [UPDATE_TARGET_ORDER] (state, payload) {
  //   if (payload != null) {
  //     state.targetOrder.parkingLot = payload.parkingLot
  //     state.targetOrder.parkingLot.occupied += 1
  //     const date = new Date()
  //     date.setTime(payload.reservationTime)
  //     state.targetOrder.reservationTime = date.getTime()
  //   }
  //   const date = new Date()
  //   state.targetOrder.reservationTime = date.getTime()
  //   state.targetOrder.status = 2
  // },
  // [GET_PARKING_BOY_ORDERS] (state, payload) {
  //   state.parkingBoyOrders = payload.parkingBoyOrders
  // },
  // [UPDATE_PARKING_BOY_SELECTED_ORDER] (state, payload) {
  //   const index = state.grabbingOrders.findIndex(value => value.id === payload.order.id)
  //   state.parkingBoyOrders[index] = payload.order
  // },
  [CHANGE_WEB_ACTIVE_MENU_ITEM] (state, payload) {
    state.webActiveMenuItem = payload.webActiveMenuItem
  },
  [GET_EMPLOYEES_LIST] (state, payload) {
    const employeeList = payload.employees.map(employee => ({
      id: employee.id,
      mail: employee.mail,
      name: employee.name,
      role: employeeEnums[employee.role - 1],
      status: employee.status,
      telephone: employee.telephone
    }))
    state.employeesList = employeeList
    state.totalEmployees = payload.totalCount
  },
  [CHANGE_CREATING_EMPLOYEE_DIALOG]  (state) {
    state.isOpenCreateEmployeeDialog = !state.isOpenCreateEmployeeDialog
  },
  // [SET_TARGET_ORDER_STATUS] (state, payload) {
  //   state.grabbingTargetOrder.status = payload
  //   const date = new Date()
  //   date.setTime(state.grabbingTargetOrder.reservationTime)
  //   state.grabbingTargetOrder.reservationTime = date.getTime()
  // },
  [LOGIN_INFORMATION] (state, payload) {
    state.loginResponse = payload
  },
  [SAVE_TOKEN] (state, payload) {
    state.token = payload
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

export default mutations
