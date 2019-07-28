<template>
    <div style="margin-top: 100px">
      <el-form label-position="right" label-width="100px" :model="formLabelAlign">
        <el-form-item label="预约类型：">
          <el-radio v-model="formLabelAlign.selectedRadio" label="park">停车</el-radio>
          <el-radio v-model="formLabelAlign.selectedRadio" label="fetch">取车</el-radio>
        </el-form-item>
        <el-form-item label="车 牌 号：">
            <el-input v-model="formLabelAlign.name" placeholder="例如：粤C3451K"></el-input>
        </el-form-item>
        <el-form-item label="用户地址：">
            <el-input v-model="formLabelAlign.region" placeholder="例如：香洲区红星路5号"></el-input>
        </el-form-item>
        <el-form-item label="预约时间：">
          <el-time-select
            v-model="formLabelAlign.time"
            :picker-options="{start: '08:00', step: '00:30', end: '22:00'}"
            placeholder="选择时间">
          </el-time-select>
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
      formLabelAlign: {
        selectedRadio: '',
        name: '',
        region: '',
        time: ''
      }
    }
  },
  methods: {
    clickReservation () {
      this.$message({
        message: '预约成功',
        type: 'success'
      })
      this.$router.push('/customer-orders')
    },
    clickReset () {
      this.formLabelAlign.selectedRadio = ''
      this.formLabelAlign.name = ''
      this.formLabelAlign.region = ''
      this.formLabelAlign.time = ''
    }
  }
}
</script>

<style scoped>

</style>
