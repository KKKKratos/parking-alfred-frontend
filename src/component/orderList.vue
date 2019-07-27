<template>
<div>
    <div>
      <orderListItem/>
   </div>
</div>
</template>

<script>
import orderListItem from './orderListItem'
export default {
  name: 'Login',
  components: {
      "orderListItem": orderListItem,
  },
}
</script>

<style scoped>
</style>
