<template>
  <div class="employees-manage-div">
    <ManagementHeader></ManagementHeader>
    <CreateEmployee></CreateEmployee>
    <EmployeesTable></EmployeesTable>
    <ManagementPagination></ManagementPagination> 
  </div>
</template>

<script>
import ManagementHeader from '../../components/header/ManagementHeader'
import EmployeesTable from '../../components/common/EmployeesTable'
import ManagementPagination from '../../components/footer/ManagementPagination'
import CreateEmployee from '../../components/common/CreateEmployee'
import { GET_EMPLOYEES_LIST } from '../../store/const-types'
export default {
  name: 'EmployeeManagement',
  components: { CreateEmployee, ManagementPagination, EmployeesTable, ManagementHeader },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
    this.$store.dispatch(GET_EMPLOYEES_LIST)
  }
}
</script>

<style scoped>
.employees-manage-div {
  height: 90%;
  width: 100%;
  background-color: white;
  margin-top: 20px;
}
</style>
