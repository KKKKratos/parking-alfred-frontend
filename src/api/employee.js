import axios from './config'

export const getSelfEmployee = () => axios.get('/employee')

export const getEmployeeParkingLots = (employeeId) => axios.get(`/employees/${employeeId}/parking-lots`)

export const login = (data) => axios.post('/login', data)

export const getEmoloyeesByPage = (page) => axios.get('/employees', { params: { page: page } })

export const getAllEmployees = () => axios.get('/employees')

export const createEmployee = (employee) => axios.post('/employees', employee)
