<template>
  <div class="parking-lot-dashboard-div">
<!--    <div style="margin-left:25px" v-for="(parkingLot, index) in parkingLotList" :key="index">-->
<!--    <DashBoard :parkingLot= parkingLot></DashBoard>-->
<!--    </div>-->
    <el-carousel :interval="4000" type="card" height="500px" style="padding-top: 100px">
      <el-carousel-item v-for="(parkingLot, index)  in parkingLotList" :key="index">
        <DashBoard :parkingLot= parkingLot></DashBoard>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import DashBoard from '../../components/common/DashBoard'
import { GET_PARKING_LOT_LIST } from '../../store/const/common-parking-lot-const'
export default {
  name: 'ParkingLotDashBoard',
  components: { DashBoard },
  data () {
    return {
    }
  },
  mounted () {
    this.$store.dispatch(GET_PARKING_LOT_LIST)
  },
  computed: {
    parkingLotList () {
      return this.$store.getters.parkingLots
    }
  }
}
</script>
<style>
.parking-lot-dashboard-div {
  height: 90%;
  width: 100%;
  background-color: white;
  margin-top: 20px;
}
</style>
