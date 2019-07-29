<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{orderName}}</span>
      </div>
      <div class="text item">
        <p>车牌号：{{$store.state.targetOrder.carNumber}}</p>
        <p>车辆地址：{{$store.state.targetOrder.customerAddress}}</p>
        <p>预约时间：{{new Date($store.state.targetOrder.reservationTime * 1000)}}</p>
      </div>
    </el-card>
    <el-button class="grab-button" type="primary" @click="turnToPageParkingLot">抢单</el-button>
    <el-button class="cancel-button" type="primary"  @click="turnToPageGrabbingOrder">取消</el-button>
  </div>
</template>
<script>
import { PARK_CAR_ORDER, FETCH_CAR_ORDER } from '../../config/const-values'
export default {
  name: 'OderDetails',
  data: function () {
    return {
      employeeId: '',
      orderName: ''
    }
  },
  mounted () {
    this.orderName = this.$store.state.targetOrder.type === 1 ? PARK_CAR_ORDER : FETCH_CAR_ORDER
  },
  methods: {
    turnToPageParkingLot () {
      this.$router.push('/parking-lot')
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
