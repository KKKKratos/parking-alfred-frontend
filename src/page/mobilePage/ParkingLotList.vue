<template>
  <div class="orders-div">
    <div :style="{height: fullHeight + 'px'}">
      <el-radio-group v-model="radioSelected" @change="clickSelectedParkingLot" class="item-div">
        <div v-for="(parkingLot, index) in parkingLots" :key="index" style="margin-top: 10px">
          <ParkingLotItem :index="index"></ParkingLotItem>
        </div>
      </el-radio-group>
      <el-button style="margin-top: 20px" type="primary" @click="clickConfirmSelected" :disabled="radioSelected === ''">
        确认选择
      </el-button>
    </div>
  </div>
</template>

<script>
import { MOBILE_TAB_ITEM_ORDER } from '../../config/const-values'
import { CHANGE_MOBILE_TAB_ITEM } from '../../store/const-types'
import {
  GET_GRABBING_PARKING_LOTS,
  UPDATE_TARGET_ORDER_BY_STATUS,
  UPDATE_TARGET_ORDER,
  GET_PARKING_BOY_ORDERS
} from '../../store/const/parking-boy-const'
import ParkingLotItem from '../../components/common/ParkingLotItem'

export default {
  name: 'ParkingLot',
  components: {
    ParkingLotItem
  },
  data: function () {
    return {
      radioSelected: ''
    }
  },
  computed: {
    fullHeight: function () {
      return document.documentElement.clientHeight - 140
    },
    parkingLots: function () {
      return this.$store.state.parkingBoy.grabbingParkingLots
    }
  },
  mounted () {
    this.$store.dispatch(GET_GRABBING_PARKING_LOTS, { employeeId: 1 })
  },
  methods: {
    clickConfirmSelected () {
      const self = this
      this.$store.commit(UPDATE_TARGET_ORDER, { parkingLot: this.$store.state.parkingBoy.grabbingParkingLots[this.radioSelected] })
      const id = this.$store.state.parkingBoy.grabbingTargetOrder.id
      const order = this.$store.state.parkingBoy.grabbingTargetOrder
      this.$store.dispatch(UPDATE_TARGET_ORDER_BY_STATUS, { id: id, order: order })
        .then(() => {
          this.$message({
            message: '抢单成功',
            type: 'success'
          })
          this.$store.dispatch(GET_PARKING_BOY_ORDERS)
            .then(response => {
              self.$router.push('/parking-boy-orders')
              self.$store.commit(CHANGE_MOBILE_TAB_ITEM, { tabItemsSelected: MOBILE_TAB_ITEM_ORDER })
            })
            .catch(() => {})
        })
        .catch(() => {})
    },
    clickSelectedParkingLot (index) {
    }
  }
}
</script>

<style scoped>
  .item-div {
    margin-bottom: 10px;
    text-align: left;
    width: 100%;
  }

  .orders-div {
    margin-top: 10px;
    overflow: auto;
  }
</style>
