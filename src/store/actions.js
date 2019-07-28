import {} from './const-types'
import axios from '../api/config'
// import { resolveCname } from 'dns';
const actions = {
  getOders({ commit }) {
    axios.get('/orders').then(function(response) {
      commit('getOders', response.data)
    })
  },
  getLoginInfo({commit},employeeLoginInfo) {
    const data = {
      name: employeeLoginInfo.name,
      password: employeeLoginInfo.password
    }
    return axios.post('/login', data)
  }
}

export default actions
