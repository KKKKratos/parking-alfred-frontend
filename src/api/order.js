import axios from './config'

export const createOrder = data => axios.post('/orders', data)

export const requestOrders = (sortProperty = null, sortOrder = null, status = null) => axios.get('/orders', {
    params: {
        sortProperty,
        sortOrder,
        status
    }
})
