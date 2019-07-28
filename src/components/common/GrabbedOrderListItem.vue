<template>
  <div @click="turnToPageOrderDetail">
    <div class="img-div" >
      <img slot="icon" src="../../assets/img/car.png" width="40" height="40" />
    </div>
    <div class="text-div">
      <mt-cell :title=carNumber :label="reservationTime" is-link>
        <span>详情</span>
      </mt-cell>
    </div>
  </div>
</template>  
<script>
import { SET_GRABBING_ORDER_ID } from '../../store/const-types.js'
export default {
  name: 'GrabbedOrderListItem',
  methods: {
    turnToPageOrderDetail () {
      this.$store.commit(SET_GRABBING_ORDER_ID,this.grabbingOrder.id)
      this.$router.push("/order-details")
    }
  },
  props:{
    grabbingOrder:Object,
  },
  computed: {
    carNumber(){
      return `${this.grabbingOrder.carNumber}`
    },
    reservationTime() {
      return `${this.grabbingOrder.reservationTime}`
    }
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
