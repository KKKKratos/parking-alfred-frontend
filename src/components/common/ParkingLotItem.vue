<template>
  <div class="parkingLotItem">
    <mt-cell :title= "parkingLotName" :label="parkingLotOccupied">
      <img slot="icon" src=../../assets/img/parkinglot.png width="24" height="24">
      <el-radio-button :label="index">选择</el-radio-button>
    </mt-cell>
  </div>
</template>
<script>
export default {
  name: 'ParkingLotItem',
  props: {
    // eslint-disable-next-line no-undef
    index: Number
  },
  data () {
    return {
    }
  },
  computed: {
    parkingLotName: function () {
      return `停车场:${this.$store.state.grabbingParkingLots[this.index].name}`
    },
    parkingLotOccupied: function () {
      return `剩余数量:${this.$store.state.grabbingParkingLots[this.index].occupied}`
    }
  }
}
</script>
<style scoped>
.parkingLotItem{
  text-align: left;
  border-bottom: 1px solid lightgray;
}
</style>
