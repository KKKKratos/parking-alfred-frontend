<template>
  <div class="parking-lot-dashboard-div">
    <span>{{parkingLotList}}</span>
    <div style="margin-left:25px" v-for="(parkingLot, index) in parkingLotList" :key="index">
    <DashBoard></DashBoard>
    </div>
  </div>
</template>
<script>
import DashBoard from "../../components/common/DashBoard";
import { GET_PARKING_LOT_LIST } from '../../store/const/common-parking-lot-const'
export default {
  name: "ParkingLotDashBoard",
  components: { DashBoard },
  data() {
    return {
    }
  },
  mounted () {
    this.$store.dispatch(GET_PARKING_LOT_LIST)
  },
  computed: {
    parkingLotList () {
      console.log(this.$store.state.parkingLotList)
      return this.$store.state.parkingLotList
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


