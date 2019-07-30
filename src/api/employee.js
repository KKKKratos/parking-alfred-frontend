import axios from './config'

export const getSelfEmployee = () => axios.get('/employee')

export const getEmployeeParkingLots = (employeeId) => axios.get(`/employees/${employeeId}/parking-lots`)
