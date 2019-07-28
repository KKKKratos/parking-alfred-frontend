<template>
<div class="orders-div">
    <div :style="{height: fullHeight + 'px'}">
      <el-radio-group v-model="radioSelected" @change="clickSelectedParkingLot" class="item-div">
        <div v-for="n in 5" :key="n" >
          <ParkingLotItem :index="n"></ParkingLotItem>
        </div>
      </el-radio-group>
      <el-button style="margin-top: 20px" type="primary" @click="clickConfirmSelected">确认选择</el-button>
   </div>
</div>
</template>

<script>
import ParkingLotItem from '../../components/common/ParkingLotItem'
export default {
  name: 'ParkingLot',
  components: {
    ParkingLotItem
  },
  data: function () {
    return {
      radioSelected: ''
    }
  },
  computed: {
    fullHeight: function () {
      return document.documentElement.clientHeight - 140
    }
  },
  methods: {
    clickConfirmSelected () {
      this.$message({
        message: '预约成功',
        type: 'success'
      })
      this.$router.push('/parking-boy-orders')
    },
    clickSelectedParkingLot (index) {
      console.log(index)
    }
  }
}
</script>

<style scoped>
  .item-div {
    margin-bottom: 10px;
    text-align: left;
    width: 100%;
  }
  .orders-div {
    margin-top: 10px;
    overflow:auto;
  }
</style>
