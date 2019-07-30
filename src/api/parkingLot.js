import axios from './config'

export const getParkingLots = (data) => axios.get('/parking-lots', {
  params: {
    ...data
  }
})

export const createParkingLot = (parkingLot) => axios.post('/parking-lots', parkingLot)
