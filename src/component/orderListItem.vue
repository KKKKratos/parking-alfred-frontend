<template>
  <div>
    <div class="orderListItem">
      <div style="float: left;">
        <img slot="icon" src="../assets/img/car.png" width="50" height="50" />
      </div>
      <div>
        <mt-cell title="湘A88888" label="停车时间：19：00" is-link>
          <span>详情</span>
        </mt-cell>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "orderListItem"
};
</script>
<style scoped>
@import "../assets/css/orderList.css";
</style>
