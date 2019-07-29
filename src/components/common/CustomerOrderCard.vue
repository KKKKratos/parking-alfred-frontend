<template>
    <div style="margin-top: 10px;">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>停车订单</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="clickDetailed">详细</el-button>
        </div>
        <div class="text item">
          <p>车牌号：123456</p>
          <p>预定时间: 2019-08-09 13:00:00</p>
        </div>
      </el-card>
    </div>
</template>

<script>
export default {
  name: 'CustomerOrderCard',
  methods: {
    clickDetailed () {
    }
  }
}
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    text-align: left;
    margin-left: 8px;
    margin-right: 8px;
  }
</style>
