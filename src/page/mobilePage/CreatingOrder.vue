<template>
    <div class="creating-body-div">
      <el-form label-position="right" label-width="100px" :model="order" v-loading="loding">
        <el-form-item label="预约类型：">
          <el-radio v-model="order.type" label="1">停车</el-radio>
          <el-radio v-model="order.type" label="2">取车</el-radio>
        </el-form-item>
        <el-form-item label="车 牌 号：">
            <el-input v-model="order.carNumber" placeholder="例如：粤C3451K"></el-input>
        </el-form-item>
        <el-form-item label="用户地址：">
            <el-input v-model="order.customerAddress" placeholder="例如：香洲区红星路5号"></el-input>
        </el-form-item>
        <el-form-item label="预约时间：">
          <el-date-picker
            v-model="order.reservationTime"
            type="datetime"
            placeholder="选择日期时间"
            style="width: 100%">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="clickReservation">提交预约</el-button>
      <el-button type="primary" @click="clickReset">置空</el-button>
  </div>
</template>

<script>
import { createOrder } from '../../api/order'
import { CHANGE_MOBILE_TAB_ITEM } from '../../store/const-types'
import { MOBILE_TAB_ITEM_ORDER } from '../../config/const-values'
export default {
  name: 'CreatingOrder',
  data () {
    return {
      loding: false,
      order: {
        type: '',
        carNumber: '',
        customerAddress: '',
        reservationTime: ''
      }
    }
  },
  methods: {
    clickReservation () {
      this.loding = true
      const data = {
        ...this.order,
        reservationTime: new Date(this.order.reservationTime).getTime()
      }
      createOrder(data).then(response => {
        this.$message.success('预约成功')
        this.$router.push('/customer-orders')
        this.$store.commit(CHANGE_MOBILE_TAB_ITEM, { tabItemsSelected: MOBILE_TAB_ITEM_ORDER })
      }).catch(response => {
        this.$message.error('预约失败')
      })
      this.loding = false
    },
    clickReset () {
      this.order.type = ''
      this.order.carNumber = ''
      this.order.customerAddress = ''
      this.order.reservationTime = ''
    }
  }
}
</script>

<style scoped>
.creating-body-div {
  margin-top: 100px;
}
</style>
