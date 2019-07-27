<template>
    <div style="margin-top:200px">
<!--      <el-radio v-model="formLabelAlign" label="park">停车</el-radio>-->
<!--      <el-radio v-model="radio" label="fetch">取车</el-radio>-->
      <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
      <el-form-item label="车 牌 号：">
          <el-input v-model="formLabelAlign.name" placeholder="粤C3451K"></el-input>
      </el-form-item>
      <el-form-item label="用户地址：">
          <el-input v-model="formLabelAlign.region" placeholder="香洲区红星路5号"></el-input>
      </el-form-item>
      <el-form-item label="预约时间：">
          <el-input v-model="formLabelAlign.time" placeholder="9：00"></el-input>
      </el-form-item>
      </el-form>
      <el-button type="primary" @click="clickReservation">提交预约</el-button>
      <el-button type="primary" @click="clickReset">置空</el-button>
  </div>
</template>

<script>
export default {
  name: 'CreatedOrder',
  data () {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        time: ''
      }
    }
  },
  methods: {
    clickReservation () {

    },
    clickReset () {
      this.formLabelAlign.name = ''
      this.formLabelAlign.region = ''
       this.formLabelAlign.time = ''
    }
  }
}
</script>

<style scoped>

</style>
