<template>
  <div class="parkingLotItem" @click="clickSelectedParkingLot">
    <mt-cell title="停车场A" label="剩余车位：10" is-link>
       <img slot="icon" src=../../assets/img/parkinglot.png width="24" height="24">
       <div class="grid-content">
          <img v-if="clicked" slot="icon" src="../../assets/img/clicked.png" width="30" height="30" />
        </div>
    </mt-cell>      
  </div>
</template>
<script>
export default {
  name: "ParkingLotItem",
  data() {
    return {
      clicked: false
    };
  },
  methods: {
    clickSelectedParkingLot() {
      this.clicked = !this.clicked;
    }
  }
};
</script>
<style scoped>
.parkingLotItem{
  text-align: left;
  border-bottom: 1px solid lightgray;
}
</style>
