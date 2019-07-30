import { CREATE_EMPLOYEE, GET_EMPLOYEES_LIST, GET_LOGIN_INFO } from './const-types'
import axios from '../api/config'

const actions = {
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
        .catch(() => {})
    } else {
      axios.get('/employees')
        .then(response => {
          commit(GET_EMPLOYEES_LIST, response.data.data)
        })
        .catch(() => {})
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
