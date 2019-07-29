import axios from './config'

export const getSelfEmployee = () => axios.get('/employee')
