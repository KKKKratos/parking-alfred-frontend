<template>
  <div class="management-search-div">
    <el-select v-model="selectedOption" placeholder="请选择" size="small">
      <el-option
        v-for="item in selectedOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-input style="padding: 0px 30px; width: 200px" size="small" v-model="keyword"></el-input>
    <el-button type="primary" size="small" @click="searchByKeyword">
      <i class="el-icon-search"></i>
      搜索
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'ManagementSearch',
  props: {
    selectedOptions: Array,
    search: Function
  },
  data () {
    return {
      selectedOption: this.selectedOptions ? this.selectedOptions[0].value : '',
      keyword: ''
    }
  },
  methods: {
    searchByKeyword: function () {
      this.search({ [this.selectedOption]: this.keyword })
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
