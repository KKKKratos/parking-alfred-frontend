<template>
  <el-card style="width: 31%;float:left;margin: 20px 5px 0px 10px" class="box-card">
    <div style="float: left;" slot="header" class="clearfix">
      <span>停车场A</span>
    </div>
    <div>
      <div style="float:left;">
        <div>
          <div style="margin-bottom:20px">
            <el-progress type="circle" :percentage="parseInt(this.occupied/this.capacity*100)"></el-progress>
          </div>
          <div style="margin-bottom:20px">
            <span>停车情况</span>
          </div>
        </div>
      </div>
      <div style="float: right;margin-right: 45px;margin-top: 20px;">
          <li v-for="parkingBoy in employees" :key="parkingBoy.index">停车员：{{ parkingBoy }}</li>
      </div>
    </div>
  </el-card>
</template>
<script>
export default {
  name: "DashBoard",
  data() {
    return {
        // parkingLotsUsePercentage: parseInt(7/10*100),
        // parkingBoys: ["李四", "李四", "李四", "李四", "李四"]
    };
  },
  computed: {
    capacity () {
        return `${this.parkingLot.capacity}`
    },
    occupied () {
        return `${this.parkingLot.occupied}`
    },
    parkingLotName () {
      return `${this.parkingLot.name}`
    },
    employees () {
      return `${this.parkingLot.employees}`
    }
  },
  props: {
    parkingLot: Object
  }
};
</script>

