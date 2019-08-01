<template>
  <div class="orders-div">
    <mt-loadmore :top-method="refresh" ref="loadmore" style="height: 100vh">
      <div v-for="item in $store.state.customer.customerOrders" :key="item.id">
        <CustomerOrderCard :customerOrder="item"></CustomerOrderCard>
      </div>
    </mt-loadmore>
  </div>
</template>

<script>
import { GET_CUSTOMER_ORDERS } from '../../store/const/customer-const'
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
    this.loadOrders()
  },
  methods: {
    refresh: function () {
      this.loadOrders().then(() => this.$refs.loadmore.onTopLoaded())
    },
    loadOrders: function () {
      return this.$store.dispatch(GET_CUSTOMER_ORDERS)
    }
  }
}
</script>

<style scoped>
  .orders-div {
    overflow:auto;
  }
</style>
