<template>
  <div class="management-search-div">
    <el-select v-model="tableSelectedRole" placeholder="请选择" size="small">
      <el-option
        v-for="item in tableSelectedOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-input style="padding-left: 30px; width: 200px" size="small"></el-input>
    <el-button type="primary" size="small">
      <i class="el-icon-search"></i>
      搜索
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'ManagementSearch',
  data () {
    return {
      tableSelectedRole: '',
      tableSelectedOptions: [
        { value: 'all', label: 'All' },
        { value: 'customer', label: 'Customer' },
        { value: 'parkingBoy', label: 'Parking Boy' },
        { value: 'manager', label: 'Manager' },
        { value: 'admin', label: 'Admin' }
      ]
    }
  }
}
</script>

<style scoped>
.management-search-div {
  padding-top: 15px;
  float: right;
  padding-right: 30px;
}
</style>
