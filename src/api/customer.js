import axios from './config'
export const createCustomer = (employee) => axios.post('/customers', employee)
