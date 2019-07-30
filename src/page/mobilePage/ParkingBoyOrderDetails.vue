<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{orderName}}</span>
      </div>
      <div class="text item">
        <p>车牌号：{{$store.state.parkingBoy.grabbingTargetOrder.carNumber}}</p>
        <p>车辆地址：{{$store.state.parkingBoy.grabbingTargetOrder.customerAddress}}</p>
        <p>预约时间：{{$store.state.parkingBoy.grabbingTargetOrder.reservationTime}}</p>
      </div>
    </el-card>
    <el-button class="grab-button" type="primary" @click="turnToPageParkingLot">抢单</el-button>
    <el-button class="cancel-button" type="primary"  @click="turnToPageGrabbingOrder">取消</el-button>
  </div>
</template>
<script>
import { PARK_CAR_ORDER, FETCH_CAR_ORDER, MOBILE_TAB_ITEM_ORDER } from '../../config/const-values'
import { CHANGE_MOBILE_TAB_ITEM } from '../../store/const-types'
import { UPDATE_TARGET_ORDER_BY_STATUS, UPDATE_TARGET_ORDER, GET_PARKING_BOY_ORDERS } from '../../store/const/parking-boy-const'
export default {
  name: 'OderDetails',
  data: function () {
    return {
      employeeId: '',
      orderName: ''
    }
  },
  mounted () {
    this.orderName = this.$store.state.parkingBoy.grabbingTargetOrder.type === 1 ? PARK_CAR_ORDER : FETCH_CAR_ORDER
  },
  methods: {
    async turnToPageParkingLot () {
      if (this.orderName === PARK_CAR_ORDER) {
        this.$router.push('/parking-lot')
      } else {
        this.$store.commit(UPDATE_TARGET_ORDER)
        this.$store.dispatch(UPDATE_TARGET_ORDER_BY_STATUS, { id: this.$store.state.parkingBoy.grabbingTargetOrder.id, order: this.$store.state.parkingBoy.grabbingTargetOrder })
          .then(() => {
            this.$message({
              message: '抢单成功',
              type: 'success'
            })
            this.$store.dispatch(GET_PARKING_BOY_ORDERS)
              .then(response => {
                this.$router.push('/parking-boy-orders')
                this.$store.commit(CHANGE_MOBILE_TAB_ITEM, { tabItemsSelected: MOBILE_TAB_ITEM_ORDER })
              })
              .catch(() => {})
          })
          .catch(() => {})
      }
    },
    turnToPageGrabbingOrder () {
      this.$router.push('/grabbing-order')
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
