<template>
  <div>
    <div style="float:left"><mt-cell title="停车场A(剩余车位：10)" @click="clickSelectedParkingLot"></mt-cell></div>
    <div><img v-if="clicked" slot="icon" src="../../assets/img/clicked.png" width="30" height="30" /></div>
  </div>
</template>
<script>
export default {
  name: "ParkingLotItem",
  data() {
    return {
      clicked: false
    }
  },
  methods: {
    clickSelectedParkingLot () {
      this.clicked = true
    }
  }
};
</script>
<style scoped>
</style>
