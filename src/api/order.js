import axios from './config'

export const createOrder = data => axios.post('/orders', data)

export const requestOrders = (sortProperty = null, sortOrder = null, status = null) => axios.get('/orders', {
  params: {
    sortProperty,
    sortOrder,
    status
  }
})

export const getGabbingOrders = () => axios.get('/orders', { params: { status: 1 } })

export const updateOrderByStatus = (id, order) => axios.put(`/orders/${id}`, order)
