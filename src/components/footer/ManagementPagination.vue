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
import { GET_EMPLOYEES_LIST } from '../../store/const/employee-const'
export default {
  name: 'ManagementPagination',
  data () {
    return {
    }
  },
  computed: {
    employeesCount: function () {
      return this.$store.state.employee.totalEmployees
    }
  },
  methods: {
    handleCurrentChange (index) {
      this.$store.dispatch(GET_EMPLOYEES_LIST, { page: index })
    },
    prevClick (index) {
      this.$store.dispatch(GET_EMPLOYEES_LIST, { page: index })
    },
    nextClick (index) {
      this.$store.dispatch(GET_EMPLOYEES_LIST, { page: index })
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
