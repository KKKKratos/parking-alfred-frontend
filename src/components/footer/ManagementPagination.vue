<template>
  <div class="pagination-div">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="count"
      @current-change="handleCurrentChange"
      @prev-click="prevClick"
      @next-click="nextClick">
    </el-pagination>
  </div>
</template>

<script>
import { GET_EMPLOYEES_LIST_BY_PAGE } from '../../store/const/employee-const'
export default {
  name: 'ManagementPagination',
  data () {
    return {
    }
  },
  computed: {
    count: function () {
      if (this.$route.name === 'employees-management') {
        return this.$store.state.employee.totalEmployees
      } else if (this.$route.name === 'parking-lots-management') {
        return this.$store.state.commonParkingLot.parkingLotTotalCount
      } else if (this.$route.name === 'parking-boys-management') {
        return this.$store.state.employee.totalEmployees
      } else {
        return 1
      }
    }
  },
  methods: {
    handleCurrentChange (index) {
      this.$store.dispatch(GET_EMPLOYEES_LIST_BY_PAGE, { page: index })
    },
    prevClick (index) {
      this.$store.dispatch(GET_EMPLOYEES_LIST_BY_PAGE, { page: index })
    },
    nextClick (index) {
      this.$store.dispatch(GET_EMPLOYEES_LIST_BY_PAGE, { page: index })
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
