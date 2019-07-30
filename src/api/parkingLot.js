import axios from './config'

export const getParkingLots = () => axios.get('/parking-lots')

export const createParkingLot = (parkingLot) => axios.post('/parking-lots', parkingLot)
