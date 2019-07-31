import { GET_EMPLOYEES_LIST, CREATE_EMPLOYEE, CHANGE_CREATING_EMPLOYEE_DIALOG, GET_EMPLOYEES_LIST_BY_NAME, GET_EMPLOYEES_LIST_BY_PAGE, UPDATE_EMPLOYEE } from '../const/employee-const'
import { getEmployeesByPage, getAllEmployees, createEmployee, getEmployeesByName, updateEmployee } from '../../api/employee'

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
      role: employee.role,
      status: employee.status,
      telephone: employee.telephone
    }))
    state.employeesList = employeeList
    state.totalEmployees = payload.totalCount
  },
  [CHANGE_CREATING_EMPLOYEE_DIALOG] (state) {
    state.isOpenCreateEmployeeDialog = !state.isOpenCreateEmployeeDialog
  },
  [UPDATE_EMPLOYEE] (state, employee) {
    state.employeesList.filter(item => (item.id === employee.id))[0].name = employee.name
    state.employeesList.filter(item => (item.id === employee.id))[0].mail = employee.mail
    state.employeesList.filter(item => (item.id === employee.id))[0].telephone = employee.telephone
    state.employeesList.filter(item => (item.id === employee.id))[0].status = employee.status
    state.employeesList.filter(item => (item.id === employee.id))[0].role = employee.role
  }
}

const actions = {
  [GET_EMPLOYEES_LIST] ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      getAllEmployees()
        .then(response => {
          commit(GET_EMPLOYEES_LIST, response.data.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
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
      payload.employee.status = 1
      createEmployee(payload.employee)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  [UPDATE_EMPLOYEE] ({ commit }, employee) {
    return new Promise((resolve, reject) => {
      updateEmployee(employee.id, employee)
        .then(response => {
          commit(UPDATE_EMPLOYEE, response.data.data)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

const getters = {
  getEmployees: state => {
    return state.employeesList
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
