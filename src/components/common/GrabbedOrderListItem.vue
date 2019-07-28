<template>
  <div>
    <div class="img-div">
        <img slot="icon" src="../../assets/img/car.png" width="40" height="40" />
    </div>
    <div class="text-div">
        <mt-cell title="湘A88888" label="停车时间：19：00" is-link>
        <span>详情</span>
      </mt-cell>
    </div>
  </div>
</template>  
<script>
export default {
  name: 'GrabbedOrderListItem'
}
</script>
<style scoped>
  .img-div {
    float: left;
  }
  .text-div {
    text-align: left;
  }
</style>
