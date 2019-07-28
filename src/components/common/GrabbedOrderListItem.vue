<template>
  <div @click="turnToPageOrderDetail">
    <div class="img-div" >
      <img slot="icon" src="../../assets/img/car.png" width="40" height="40" />
    </div>
    <div class="text-div" @click="clickGrabItem">
      <mt-cell :title=carNumber :label="orderType" is-link>
          
        <span>详情</span>
      </mt-cell>
    </div>
  </div>
</template>

<script>
import { GET_TARGET_ORDER } from '../../store/const-types'
import { PARK_CAR_ORDER, FETCH_CAR_ORDER } from '../../config/const-values'
export default {
  name: 'GrabbedOrderListItem',
  methods: {
    turnToPageOrderDetail () {
      this.$router.push('/order-details')
    },
    clickGrabItem () {
      this.$store.commit(GET_TARGET_ORDER, { targetOrder: this.grabbingOrder })
    }
  },
  props: {
    grabbingOrder: Object
  },
  computed: {
    carNumber () {
      return `${this.grabbingOrder.carNumber}`
    },
    orderType () {
      return `订单类型：${this.grabbingOrder.type === 1 ? PARK_CAR_ORDER : FETCH_CAR_ORDER}`
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
