<template>
  <div class="orders-div">
    <div :style="{height: fullHeight + 'px'}">
      <div v-for="n in 4" :key="n">
        <CustomerOrderCard></CustomerOrderCard>
      </div>
    </div>
  </div>

</template>

<script>
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
    console.log(this.fullHeight)
  }
}
</script>

<style scoped>
  .orders-div {
    overflow:auto;
  }
</style>
