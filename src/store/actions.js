import { GET_LOGIN_INFO } from './const-types'
import { login } from '../api/employee'

const actions = {
  [GET_LOGIN_INFO] ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      const data = {
        mail: payload.email,
        password: payload.password
      }
      login(data)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  }
}

export default actions
