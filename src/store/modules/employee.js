import { GET_EMPLOYEES_LIST, CREATE_EMPLOYEE, CHANGE_CREATING_EMPLOYEE_DIALOG, GET_EMPLOYEES_LIST_BY_NAME, GET_EMPLOYEES_LIST_BY_PAGE } from '../const/employee-const'
import { getEmployeesByPage, getAllEmployees, createEmployee, getEmployeesByName } from '../../api/employee'
import { employeeEnums } from '../../config/util'

const state = {
  employeesList: [],
  totalEmployees: 0,
  isOpenCreateEmployeeDialog: false
}

const mutations = {
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
  }
}

const actions = {
  [GET_EMPLOYEES_LIST] ({ commit }, payload) {
    getAllEmployees()
      .then(response => {
        commit(GET_EMPLOYEES_LIST, response.data.data)
      })
      .catch(() => {})
  },
  [GET_EMPLOYEES_LIST_BY_PAGE] ({ commit }, payload) {
    getEmployeesByPage(payload.page)
      .then(response => {
        commit(GET_EMPLOYEES_LIST, response.data.data)
      })
      .catch(() => {})
  },
  [GET_EMPLOYEES_LIST_BY_NAME] ({ commit }, payload) {
    getEmployeesByName(payload.name)
      .then(response => {
        commit(GET_EMPLOYEES_LIST, response.data.data)
      })
      .catch(() => {})
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
