<template>
  <div>
    <mt-cell :title="carNumber" :label="addressWithTIme">
      <el-button v-if="$store.state.parkingBoy.parkingBoyOrders[this.index].status === 2" type="primary" size="mini" @click="toMakeSure">待确认</el-button>
      <mt-cell v-else-if="$store.state.parkingBoy.parkingBoyOrders[this.index].status === 4" title="待客户确认"></mt-cell>
      <!-- <el-button v-else-if="this.$store.state.parkingBoyOrders[this.index].status === 4" type="danger" size="mini">待客户确认</el-button> -->
      <img style="float:right" type="info" slot="icon" src="../../assets/img/tick.png" width="40" height="40" v-else/>
    </mt-cell>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
import { UPDATE_PARKING_BOY_SELECTED_ORDER } from '../../store/const/parking-boy-const'
export default {
  name: 'ParkingBoyOrder',
  props: {
    index: Number
  },
  data () {
    return {
      isSure: false
    }
  },
  computed: {
    carNumber () {
      return this.$store.state.parkingBoy.parkingBoyOrders[this.index].carNumber
    },
    addressWithTIme () {
      const time = new Date(
        this.$store.state.parkingBoy.parkingBoyOrders[this.index].reservationTime
      )
      return `(${this.$store.state.parkingBoy.parkingBoyOrders[this.index].customerAddress})\t${time.toLocaleString()}`
    }
  },
  methods: {
    toMakeSure: function () {
      if (this.$store.state.parkingBoy.parkingBoyOrders[this.index].type === 1) {
        const self = this
        MessageBox.confirm('是否确认完成订单？')
          .then(action => {
            let order = self.$store.state.parkingBoy.parkingBoyOrders[self.index]
            order.status = 3
            this.$store.dispatch(UPDATE_PARKING_BOY_SELECTED_ORDER, { id: order.id, order: order })
              .then(() => {
                self.isSure = true
              })
              .catch(() => {})
          })
          .catch(() => {})
      } else {
        const self = this
        MessageBox.confirm('是否确认？')
          .then(action => {
            let order = self.$store.state.parkingBoy.parkingBoyOrders[self.index]
            order.status = 4
            this.$store
              .dispatch(UPDATE_PARKING_BOY_SELECTED_ORDER, {
                id: order.id,
                order: order
              })
              .then(response => (self.isSure = true))
              .catch(() => {})
          })
          .catch(() => {})
      }
    }
  }
}
</script>

<style scoped>
</style>
