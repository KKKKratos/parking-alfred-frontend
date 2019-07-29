<template>
  <div style="height: 100%; width: 100%; background-color: white">
    <ManagementHeader></ManagementHeader>
    <EmployeesTable></EmployeesTable>
    <ManagementPagination></ManagementPagination>
  </div>
</template>

<script>
import ManagementHeader from '../../components/header/ManagementHeader'
import EmployeesTable from '../../components/common/EmployeesTable'
import ManagementPagination from '../../components/footer/ManagementPagination'
export default {
  name: 'EmployeeManagement',
  components: { ManagementPagination, EmployeesTable, ManagementHeader },
  data () {
    return {
      employeesCount: 0
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
