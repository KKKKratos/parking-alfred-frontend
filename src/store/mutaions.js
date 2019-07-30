import {
  CHANGE_MOBILE_TAB_ITEM,
  SELECT_ROLE,
  CHANGE_WEB_ACTIVE_MENU_ITEM,
  GET_EMPLOYEES_LIST,
  CHANGE_CREATING_EMPLOYEE_DIALOG,
  GET_CUSTOMER_ORDERS,
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
  [UPDATE_CUSTOMER_ORDER] (state, payload) {
    const index = state.customerOrders.findIndex(value => value.id === payload.order.id)
    state.customerOrders[index].status = 3
  },
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
