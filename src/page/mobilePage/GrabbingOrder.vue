<template>
  <div style="margin-top: 20px">
    <mt-loadmore :top-method="refresh" ref="loadmore" style="height: 100vh">
      <div v-for="item in itemsShow" v-bind:key="item.key" style="margin-top: 10px">
        <OrderListItem :grabbingOrder="item"/>
      </div>
    </mt-loadmore>
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
    this.loadOrders()
  },
  methods: {
    refresh: function () {
      this.loadOrders().then(() => this.$refs.loadmore.onTopLoaded())
    },
    loadOrders: function () {
      return this.$store.dispatch(GET_GRABBING_ORDERS)
    }
  }
}
</script>

<style scoped>
.grab-main-div {
  margin-top: 10px;
}
</style>
