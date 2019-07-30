import { getParkingLots, createParkingLot, getParkingLotsWithParkingBoys } from '../../api/parkingLot'
import { CREATE_PARKING_LOT, GET_PARKING_LOT_LIST, CHANGE_CREATING_LOT_DIALOG } from '../const/common-parking-lot-const'

const state = {
  parkingLotList: [],
  isOpenCreateParkingLotDialog: false
}

const mutations = {
  [GET_PARKING_LOT_LIST] (state, items) {
    state.parkingLotList.splice(0)
    state.parkingLotList.push(...items)
  },
  [CHANGE_CREATING_LOT_DIALOG]  (state) {
    state.isOpenCreateParkingLotDialog = !state.isOpenCreateParkingLotDialog
  }
}

const actions = {
  [GET_PARKING_LOT_LIST]: ({ commit }) => {
    getParkingLots()
      .then(response => {
        commit(GET_PARKING_LOT_LIST, response.data.data.parkingLots)
        return new Promise((resolve, reject) => resolve(response.data.data.parkingLots))
      })
      .catch(() => {})
  },
  [CREATE_PARKING_LOT] ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      createParkingLot(payload.parkingLot)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

const getters = {
  parkingLots: state => {
    return state.parkingLotList
  },
  parkingLotListWithParkingBoys: state => {
    return state.parkingLotListWithParkingBoys
  },
}

export default {
  state,
  actions,
  mutations,
  getters
}
