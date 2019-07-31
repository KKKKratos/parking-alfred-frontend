<template>
  <el-card style="width: 90%; height: 70%;float:left;margin: 20px 5px 0px 10px" class="box-card">
    <div style="float: left;" slot="header" class="clearfix">
      <span>{{this.parkingLot.name}}</span>
    </div>
    <div>
      <div style="float:left; width: 50%">
        <div>
          <div style="margin-bottom:20px">
            <el-progress :width="200" type="circle" :percentage="parseInt(this.parkingLot.occupied/this.parkingLot.capacity*100)"></el-progress>
          </div>
          <div style="margin-bottom:20px">
            <span>停车情况</span>
          </div>
        </div>
      </div>
      <div style="float: left;;margin-top: 20px; width: 30%; text-align: left;">
          <li v-for="(parkingBoy,index) in parkingLot.employeeVOS" :key="index">停车员：{{ parkingBoy.name }}</li>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'DashBoard',
  props: {
    parkingLot: Object
  }
}
</script>
