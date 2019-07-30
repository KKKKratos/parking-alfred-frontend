import { GET_EMPLOYEES_LIST, CHANGE_CREATING_EMPLOYEE_DIALOG, CREATE_EMPLOYEE } from '../const/employee-const'
import { getEmoloyeesByPage, getAllEmployees, createEmployee } from '../../api/employee'
import { employeeEnums } from '../../config/util'

const state = {
  employeesList: [],
  totalEmployees: 0,
  isOpenCreateEmployeeDialog: false
}

const mutations = {
  [GET_EMPLOYEES_LIST] (state, payload) {
    state.employeesList = payload.employees.map(employee => ({
      id: employee.id,
      mail: employee.mail,
      name: employee.name,
      role: employeeEnums[employee.role - 1],
      status: employee.status,
      telephone: employee.telephone
    }))
    state.totalEmployees = payload.totalCount
  },
  [CHANGE_CREATING_EMPLOYEE_DIALOG]  (state) {
    state.isOpenCreateEmployeeDialog = !state.isOpenCreateEmployeeDialog
  }
}

const actions = {
  [GET_EMPLOYEES_LIST] ({ commit }, payload) {
    if (payload !== undefined) {
      getEmoloyeesByPage(payload.page)
        .then(response => {
          commit(GET_EMPLOYEES_LIST, response.data.data)
        })
        .catch(() => {})
    } else {
      getAllEmployees()
        .then(response => {
          commit(GET_EMPLOYEES_LIST, response.data.data)
        })
        .catch(() => {})
    }
  },
  [CREATE_EMPLOYEE] ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      createEmployee(payload.employee)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
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
