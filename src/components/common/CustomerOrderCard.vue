<template>
  <div  @click="turnToPageCustomOrderDetail">
    <div class="img-div" >
      <img slot="icon" src="../../assets/img/car.png" width="40" height="40" />
    </div>
    <div class="text-div" @click="clickDetailed">
      <mt-cell :title=carNumber :label="reservationTime" is-link>
        <span>详情</span>
      </mt-cell>
    </div>
  </div>
</template>

<script>
import { GET_CUSTOMER_ORDERS, GET_TARGET_ORDER } from '../../store/const-types'
export default {
  name: 'CustomerOrderCard',
  methods: {
    turnToPageCustomOrderDetail(){
      this.$router.push('/customer-order-details')
    },
    clickDetailed () {
      this.$store.commit(GET_TARGET_ORDER, { targetOrder: this.customerOrder })
      
    }
  },
  computed: {
    carNumber() {
      return `车牌号：${this.customerOrder.carNumber}`
    },
    reservationTime() {
      return `预定时间：${this.customerOrder.reservationTime}`
    }
  },
  props:{
    customerOrder: Object
  }
}
</script>

<style scoped>
  .img-div {
  float: left;
}
.text-div {
  text-align: left;
}
</style>
