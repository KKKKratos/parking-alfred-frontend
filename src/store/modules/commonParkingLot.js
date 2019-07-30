import { getParkingLots, createParkingLot, freezeparkinglot, startparkinglot } from '../../api/parkingLot'
import { CREATE_PARKING_LOT, GET_PARKING_LOT_LIST, CHANGE_CREATING_LOT_DIALOG, FREEZE_PARKING_LOT, START_PARKING_LOT } from '../const/common-parking-lot-const'

const state = {
  parkingLotList: [],
  isOpenCreateParkingLotDialog: false
}

const mutations = {
  [GET_PARKING_LOT_LIST] (state, items) {
    state.parkingLotList.splice(0)
    state.parkingLotList.push(...items)
  },
  [CHANGE_CREATING_LOT_DIALOG] (state) {
    state.isOpenCreateParkingLotDialog = !state.isOpenCreateParkingLotDialog
  }
}

const actions = {
  [GET_PARKING_LOT_LIST]: ({ commit }) => {
    getParkingLots()
      .then(response => {
        commit(GET_PARKING_LOT_LIST, response.data.data.parkingLots)
      })
      .catch(() => { })
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
  },
  [FREEZE_PARKING_LOT] ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      freezeparkinglot(payload)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  [START_PARKING_LOT] ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      startparkinglot(payload)
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

}

export default {
  state,
  actions,
  mutations,
  getters
}
