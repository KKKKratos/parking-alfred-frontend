<template>
<div>
    <div>
      <OrderListItem/>
   </div>
</div>
</template>

<script>
import OrderListItem from '../../components/common/GrabbedOrderListItem'
export default {
  name: 'GrabbedOrderList',
  components: {
    OrderListItem
  }
}
</script>

<style scoped>
</style>
