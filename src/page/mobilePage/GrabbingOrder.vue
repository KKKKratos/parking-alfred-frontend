<template>
<div>
    <div class="grab-main-div">
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
 .grab-main-div {
   margin-top: 10px;
 }
</style>
