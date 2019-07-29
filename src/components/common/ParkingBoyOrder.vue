<template>
  <div>
    <mt-cell :title="carNumber" :label="addressWithTIme" >
      <el-button v-if="isConfirm" type="primary" size='mini' @click="toMakeSure">待确认</el-button>
      <img style='float:right' type="info" slot="icon" src="../../assets/img/tick.png" width="40" height="40" v-else/>
    </mt-cell>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
import { UPDATE_PARKING_BOY_ORDER } from '../../store/const-types'
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
      return this.$store.state.parkingBoyOrders[this.index].carNumber
    },
    addressWithTIme () {
      const time = new Date(this.$store.state.parkingBoyOrders[this.index].reservationTime * 1000)
      return `(${this.$store.state.parkingBoyOrders[this.index].customerAddress})${time.getHours()}:${time.getMinutes()}`
    },
    isConfirm () {
      return this.$store.state.parkingBoyOrders[this.index].status === 2
    }
  },
  methods: {
    toMakeSure: function () {
      const self = this
      MessageBox.confirm('是否确认完成订单？').then(action => {
        let order = self.$store.state.parkingBoyOrders[self.index]
        order.status = 3
        this.$store.dispatch(UPDATE_PARKING_BOY_ORDER, { id: order.id, order: order })
          .then(response => self.isSure = true)
          .catch(error => console.log(error))
      })
        .catch(action => console.log('2'))
    }
  }
}
</script>

<style scoped>

</style>
