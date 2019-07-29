import axios from './config'

export const createOrder = data => axios.post('/orders', data ) 