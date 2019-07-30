<template>
  <div class="orders-div">
    <div :style="{height: fullHeight + 'px'}">
      <div v-for="item in $store.state.customerOrders" :key="item.id">
        <CustomerOrderCard :customerOrder="item"></CustomerOrderCard>
      </div>
    </div>
  </div>
</template>


<script>
import { GET_CUSTOMER_ORDERS } from '../../store/const-types'
import CustomerOrderCard from '../../components/common/CustomerOrderCard'
export default {
  name: 'CustomerOrders',
  components: { CustomerOrderCard },
  data () {
    return {
    }
  },
  computed: {
    fullHeight: function () {
      return document.documentElement.clientHeight - 140
    }
  },
  mounted () {
    this.$store.dispatch(GET_CUSTOMER_ORDERS)
  }
}
</script>

<style scoped>
  .orders-div {
    overflow:auto;
  }
</style>
