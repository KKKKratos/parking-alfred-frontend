import axios from './config'

export const getParkingLots = () => axios.get('/parking-lots')

export const createParkingLot = (parkingLot) => axios.post('/parking-lots', parkingLot)

export const updateParkingLot = (id, parkingLot) => axios.put(`/parking-lots/${id}`, parkingLot)
