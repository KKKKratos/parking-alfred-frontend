import axios from 'axios'
import store from '../store'

axios.defaults.baseURL = process.env.NODE_ENV !== 'development' ? '/parking-lot' : 'http://localhost:8082'
axios.defaults.timeout = 5000
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

axios.interceptors.request.use(function (config) {
  config.headers.Authorization = 'Bearer ' + store.state.token
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

export default axios
