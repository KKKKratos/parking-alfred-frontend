<template>
  <div class="parkingLotItem">
    <mt-cell title="停车场A" label="剩余车位：10">
      <img slot="icon" src=../../assets/img/parkinglot.png width="24" height="24">
      <el-radio-button :label="index">选择</el-radio-button>
<!--       <div class="grid-content" >-->
<!--          <img v-if="selected" slot="icon" src="../../assets/img/clicked.png" width="30" height="30" />-->
<!--        </div>-->
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
  methods: {
  }
}
</script>
<style scoped>
.parkingLotItem{
  text-align: left;
  border-bottom: 1px solid lightgray;
}
</style>
