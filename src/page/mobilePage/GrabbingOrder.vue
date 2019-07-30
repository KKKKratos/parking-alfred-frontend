<template>
  <div style="margin-top: 20px">
      <div v-for="item in itemsShow" v-bind:key="item.key" style="margin-top: 10px">
        <OrderListItem :grabbingOrder="item"/>
      </div>
  </div>
</template>

<script>
import { GET_GRABBING_ORDERS } from '../../store/const/parking-boy-const'
import OrderListItem from '../../components/common/GrabbedOrderListItem'
export default {
  name: 'GrabbingOrderList',
  components: {
    OrderListItem
  },
  computed: {
    itemsShow () {
      return this.$store.state.parkingBoy.grabbingOrders
    }
  },
  mounted () {
    this.$store.dispatch(GET_GRABBING_ORDERS)
  }
}
</script>

<style scoped>
.grab-main-div {
  margin-top: 10px;
}
</style>
