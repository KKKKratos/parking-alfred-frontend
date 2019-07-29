<template>
  <div class="pagination-div">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="employeesCount"
      @current-change="handleCurrentChange"
      @prev-click="prevClick"
      @next-click="nextClick">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'ManagementPagination',
  data () {
    return {
      employeesCount: 0
    }
  },
  methods: {
    handleCurrentChange () {

    },
    prevClick () {

    },
    nextClick () {

    }
  }
}
</script>

<style scoped>
.pagination-div {
  float: right;
  padding-right: 30px;
  padding-top: 20px;
}
</style>
