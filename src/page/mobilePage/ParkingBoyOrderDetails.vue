<template>
  <div>
    <ul class="order-details">
      <li>
        车牌号：
        <span class="car-number">湘A66666</span>
      </li>
      <li>
        车辆地址：
        <span class="car-address">南方软件园</span>
      </li>
      <li>
        预约时间：
        <span class="appoint-time">2019/07/28 10：23</span>
      </li>
    </ul>
    <mt-button class="grab-button" type="primary" @click="turnToPageParkingLot">抢单</mt-button>
    <mt-button class="cancel-button" type="primary"  @click="turnToPageGrabbingOrder">取消</mt-button>
  </div>
</template>
<script>
export default {
  name: 'OderDetails',
  methods: {
    turnToPageParkingLot () {
      this.$router.push('/parking-lot')
    },
    turnToPageGrabbingOrder () {
      this.$router.push('/grabbed-order')
    }
  }
}
</script>
<style scoped>
.img-div {
  float: left;
}
.text-div {
  text-align: left;
}
.order-details li {
  list-style: none;
  height: 45px;
  line-height: 45px;
  display: flex;
}
.order-details .car-number {
  margin-left: 78px;
}
.order-details .car-address,.order-details .appoint-time {
  margin-left: 63px;
}
.grab-button,.cancel-button{
  width: 140px;
  height: 40px;
  color: #fff;
  background-color: #26a2ff;
  border:none;
  margin-left: 10px;
  margin-top: 80px;
}
</style>
