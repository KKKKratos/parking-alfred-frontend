import { GET_LOGIN_INFO } from './const-types'
import { login } from '../api/employee'

const actions = {
  [GET_LOGIN_INFO] ({ commit }, payload) {
    const data = {
      mail: payload.email,
      password: payload.password
    }
    return login(data)
  }
}

export default actions
