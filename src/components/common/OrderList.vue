<template>
<div>
    <div>
      <orderListItem/>
   </div>
</div>
</template>

<script>
import orderListItem from './OrderListItem'
export default {
  name: 'OrderList',
  components: {
    'orderListItem': orderListItem 
  }
}
</script>

<style scoped>
</style>
