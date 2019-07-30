<template>
  <div class="parkingLotItem">
    <mt-cell :title="parkingLotName" :label="parkingLotOccupied">
      <img slot="icon" src=../../assets/img/parkinglot.png width="24" height="24">
      <el-radio-button :label="index" :disabled="!isEnabled">选择</el-radio-button>
    </mt-cell>
  </div>
</template>
<script>
export default {
  name: "ParkingLotItem",
  props: {
    index: Number
  },
  data() {
    return {};
  },
  computed: {
    parkingLotName: function() {
      return `停车场:${this.$store.state.grabbingParkingLots[this.index].name}`; 
    },
    parkingLotOccupied: function() {
      const capacity = this.$store.state.grabbingParkingLots[this.index]
        .capacity;
      const occupied = this.$store.state.grabbingParkingLots[this.index]
        .occupied;
      if (capacity - occupied <= 0) {
        this.isEnabled = false;
      }
      return `剩余数量:${capacity - occupied}`;
    },
    isEnabled: function() {
      const capacity = this.$store.state.grabbingParkingLots[this.index]
        .capacity;
      const occupied = this.$store.state.grabbingParkingLots[this.index]
        .occupied;
      return capacity - occupied > 0;
    }
  }
};
</script>
<style scoped>
.parkingLotItem {
  text-align: left;
  border-bottom: 1px solid lightgray;
}
</style>
