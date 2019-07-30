<template>
  <el-card style="width: 31%;float:left;margin: 20px 5px 0px 10px" class="box-card">
    <div style="float: left;" slot="header" class="clearfix">
      <span>{{this.parkingLot.name}}</span>
    </div>
    <div>
      <div style="float:left;">
        <div>
          <div style="margin-bottom:20px">
            <el-progress type="circle" :percentage="parseInt(this.parkingLot.occupied/this.parkingLot.capacity*100)"></el-progress>
          </div>
          <div style="margin-bottom:20px">
            <span>停车情况</span>
          </div>
        </div>
      </div>
      <div style="float: right;margin-right: 45px;margin-top: 20px;">
          <li v-for="(parkingBoy,index) in parkingLot.employeeVOS" :key="index">停车员：{{ parkingBoy.name }}</li>
      </div>
    </div>
  </el-card>
</template>
<script>
export default {
  name: "DashBoard",
  props: {
    parkingLot: Object
  }
};
</script>

