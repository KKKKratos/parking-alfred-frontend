import axios from './config'

export const getParkingLots = () => axios.get('/parking-lots')

export const createParkingLot = (parkingLot) => axios.post('/parking-lots', parkingLot)

export const freezeparkinglot = (parkingLot) => axios.put(`/parking-lots/${parkingLot.id}`, parkingLot)

export const startparkinglot = (parkingLot) => axios.put(`/parking-lots/${parkingLot.id}`, parkingLot)
