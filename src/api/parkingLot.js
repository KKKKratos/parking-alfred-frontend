import axios from './config'

export const getParkingLots = (data) => axios.get('/parking-lots', {
  params: {
    ...data
  }
})

export const createParkingLot = (parkingLot) => axios.post('/parking-lots', parkingLot)

export const freezeparkinglot = (parkingLot) => axios.put(`/parking-lots/${parkingLot.id}`, parkingLot)

export const updateParkingLot = (id, parkingLot) => axios.put(`/parking-lots/${id}`, parkingLot)

export const startparkinglot = (parkingLot) => axios.put(`/parking-lots/${parkingLot.id}`, parkingLot)
