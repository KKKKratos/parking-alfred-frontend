import {} from './const-types'
import axios from '../api/config'
const actions = {
  getOders({ commit }) {
    axios.get('/orders').then(function(response) {
      commit('getOders', response.data)
    })
  }
}

export default actions
