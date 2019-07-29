<template>
  <div style="height: 60px; background-color: white; text-align: left">
    <div class="create-button-div">
      <el-button type="primary" size="small" style="width: 80px">新建</el-button>
    </div>
    <ManagementSearch></ManagementSearch>
  </div>
</template>

<script>
import ManagementSearch from '../common/ManagementSearch'
export default {
  name: 'CreateButton',
  components: { ManagementSearch }
}
</script>

<style scoped>
.create-button-div {
  float: left;
  width: 40%;
  padding-top: 15px;
  margin-left: 20px;
}
</style>
