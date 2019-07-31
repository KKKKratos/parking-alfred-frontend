import axios from './config'

export const getSelfEmployee = () => axios.get('/employee')

export const getEmployeeParkingLots = (employeeId) => axios.get(`/employees/${employeeId}/parking-lots`)

export const login = (data) => axios.post('/login', data)

export const getEmployeesByPage = (page) => axios.get('/employees', { params: { page: page } })

export const getEmployeesByName = (name) => axios.get('/employees', { params: { name: `"${name.name}"` } })

export const getAllEmployees = () => axios.get('/employees')

export const createEmployee = (employee) => axios.post('/employees', employee)

export const getParkingBoys = () => axios.get('/employees', { params: { role: 1 } })

export const getParkingBoysByName = (data) => axios.get('/employees', { params: { name: `"${data.name}"`, role: 1 } })

export const updateParkingLotsOfBoy = (employeeId, parkingLotIdList) => axios.put(`/employees/${employeeId}/parking-lots`, parkingLotIdList)

export const updateEmployee = (id, employee) => axios.put(`/employees/${id}`, employee)

export const getOrdersByEmployeeId = (employeeId) => axios.get(`/employees/${employeeId}/orders`)
