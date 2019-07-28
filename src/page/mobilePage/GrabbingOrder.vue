<template>
  <div>
    <ul>
      <li  v-for="item in itemsShow" v-bind:key="item.key">
        <OrderListItem :grabbingOrder="item"/>
      </li>
    </ul>
  </div>
</template>

<script>
import OrderListItem from "../../components/common/GrabbedOrderListItem";
export default {
  name: "GrabbingOrderList",
  components: {
    OrderListItem
  },
  computed: {
    itemsShow() {
      return this.$store.state.grabbingOrders;
    }
  }
};
</script>

<style scoped>
 .grab-main-div {
   margin-top: 10px;
 }
</style>
