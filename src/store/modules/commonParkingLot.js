import { getParkingLots, createParkingLot, freezeparkinglot, startparkinglot, updateParkingLot } from '../../api/parkingLot'
import {
  CREATE_PARKING_LOT,
  GET_PARKING_LOT_LIST,
  CHANGE_CREATING_LOT_DIALOG,
  FREEZE_PARKING_LOT,
  START_PARKING_LOT,
  UPDATE_PARKING_LOT,
  CHANGE_BUTTON_WHEN_START,
  CHANGE_BUTTON_WHEN_EDIT,
  INIT_BUTTON_STYLE,
  CHANGE_BUTTON_WHEN_FREEZE,
  CHANGE_BUTTON_WHEN_SAVE
} from '../const/common-parking-lot-const'
import { TABLE_BUTTON_TYPE } from '../../config/const-values'

const state = {
  parkingLotList: [],
  isOpenCreateParkingLotDialog: false,
  parkingLotTotalCount: 0,
  modifyButtonNameArray: [],
  operateButtonNameArray: [],
  isButtonDisabledArray: [],
  isButtonEditedArray: []
}

const mutations = {
  [GET_PARKING_LOT_LIST] (state, items) {
    state.parkingLotList.splice(0)
    state.parkingLotList.push(...items.parkingLots)
    state.parkingLotTotalCount = items.totalCount
  },
  [CHANGE_CREATING_LOT_DIALOG] (state) {
    state.isOpenCreateParkingLotDialog = !state.isOpenCreateParkingLotDialog
  },
  [UPDATE_PARKING_LOT] (state, parkingLot) {
    state.parkingLotList.filter(item => (item.id === parkingLot.id))[0].name = parkingLot.name
    state.parkingLotList.filter(item => (item.id === parkingLot.id))[0].capacity = parkingLot.capacity
  },
  [INIT_BUTTON_STYLE] (state, payload) {
    if (payload.status === 2) {
      state.isButtonDisabledArray.push(true)
      state.operateButtonNameArray.push('启用')
    } else {
      state.isButtonDisabledArray.push(false)
      state.operateButtonNameArray.push('冻结')
    }
    state.isButtonEditedArray.push(false)
    state.modifyButtonNameArray.push(TABLE_BUTTON_TYPE[0])
  },
  [CHANGE_BUTTON_WHEN_FREEZE] (state, payload) {
    state.isButtonDisabledArray.splice(payload.index, 1, true)
    state.operateButtonNameArray.splice(payload.index, 1, '启用')
  },
  [CHANGE_BUTTON_WHEN_START] (state, payload) {
    state.isButtonDisabledArray.splice(payload.index, 1, false)
    state.operateButtonNameArray.splice(payload.index, 1, '冻结')
  },
  [CHANGE_BUTTON_WHEN_EDIT] (state, payload) {
    state.isButtonEditedArray.splice(payload.index, 1, true)
    state.modifyButtonNameArray.splice(payload.index, 1, TABLE_BUTTON_TYPE[1])
  },
  [CHANGE_BUTTON_WHEN_SAVE] (state, payload) {
    state.isButtonEditedArray.splice(payload.index, 1, false)
    state.modifyButtonNameArray.splice(payload.index, 1, TABLE_BUTTON_TYPE[0])
  },
  [CREATE_PARKING_LOT] (state, payload) {
    state.isButtonDisabledArray.push(false)
    state.operateButtonNameArray.push('冻结')
    state.isButtonEditedArray.push(false)
    state.modifyButtonNameArray.push(TABLE_BUTTON_TYPE[0])
    state.parkingLotList.push(payload)
  }
}

const actions = {
  [GET_PARKING_LOT_LIST]: ({ commit }, payload = {}) => {
    return new Promise((resolve, reject) => {
      getParkingLots(payload)
        .then(response => {
          commit(GET_PARKING_LOT_LIST, response.data.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  [CREATE_PARKING_LOT] ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      payload.parkingLot.occupied = 0
      createParkingLot(payload.parkingLot)
        .then(response => {
          commit(CREATE_PARKING_LOT, response.data.data)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  [FREEZE_PARKING_LOT] ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      payload.status = 2
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
      payload.status = 1
      startparkinglot(payload)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  [UPDATE_PARKING_LOT] ({ commit }, parkingLot) {
    return new Promise((resolve, reject) => {
      updateParkingLot(parkingLot.id, parkingLot)
        .then(response => {
          commit(UPDATE_PARKING_LOT, response.data.data)
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
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
