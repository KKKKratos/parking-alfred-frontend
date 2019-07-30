<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <p>订单类型：{{orderType}}</p>
        <p>订单状态：{{orderStatus}}</p>
      </div>
      <div class="text item">
        <p>车牌号：{{$store.state.parkingBoy.grabbingTargetOrder.carNumber}}</p>
        <p>车辆地址：{{$store.state.parkingBoy.grabbingTargetOrder.customerAddress}}</p>
        <p>预约时间：{{$store.state.parkingBoy.grabbingTargetOrder.reservationTime}}</p>
      </div>
    </el-card>
    <el-button class="grab-button" type="primary" @click="confirmFetchedCar" v-if="isWaittingForConfirm">确认取车</el-button>
    <el-button class="cancel-button" type="primary"  @click="turnToPageCustomerOrders">返回</el-button>
  </div>
</template>
<script>
import { PARK_CAR_ORDER, FETCH_CAR_ORDER, WAIT_FOR_RECEIVE, WAIT_FOR_CONFIRM, CONFIRM, WAIT_FOR_USER_CONFIRM, UNDEFINED_STATUS } from '../../config/const-values'
import { UPDATE_CUSTOMER_ORDER } from '../../store/const/customer-const'
import { SET_TARGET_ORDER_STATUS } from '../../store/const/parking-boy-const'
export default {
  name: 'CustomerOderDetails',
  data: function () {
    return {
      employeeId: '',
      orderType: '',
      orderStatus: ''
    }
  },
  mounted () {
    this.orderType = this.$store.state.parkingBoy.grabbingTargetOrder.type === 1 ? PARK_CAR_ORDER : FETCH_CAR_ORDER
    this.orderStatus = this.$store.state.parkingBoy.grabbingTargetOrder.status === 1 ? WAIT_FOR_RECEIVE
      : this.$store.state.parkingBoy.grabbingTargetOrder.status === 2 ? WAIT_FOR_CONFIRM
        : this.$store.state.parkingBoy.grabbingTargetOrder.status === 3 ? CONFIRM
          : this.$store.state.parkingBoy.grabbingTargetOrder.status === 4 ? WAIT_FOR_USER_CONFIRM : UNDEFINED_STATUS
  },
  methods: {
    confirmFetchedCar () {
      this.$message({
        message: '完成订单',
        type: 'success'
      })
      this.$store.commit(SET_TARGET_ORDER_STATUS, 3)
      this.$store.dispatch(UPDATE_CUSTOMER_ORDER, { id: this.$store.state.parkingBoy.grabbingTargetOrder.id, order: this.$store.state.parkingBoy.grabbingTargetOrder })
      this.$router.push('/customer-orders')
    },
    turnToPageCustomerOrders () {
      this.$router.push('/customer-orders')
    }
  },
  computed: {
    isWaittingForConfirm () {
      return this.$store.state.parkingBoy.grabbingTargetOrder.status === 4 && this.$store.state.parkingBoy.grabbingTargetOrder.type === 2
    }
  }

}
</script>
<style scoped>
.grab-button,.cancel-button{
  width: 140px;
  height: 40px;
  color: #fff;
  background-color: #26a2ff;
  border:none;
  margin-left: 10px;
  margin-top: 80px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  margin-top: 20px;
  text-align: left;
  margin-left: 8px;
  margin-right: 8px;
}
</style>
