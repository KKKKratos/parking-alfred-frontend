<template>
  <div class="parking-boy-manage-div">
    <ManagementHeader></ManagementHeader>
    <ParkingBoyTable></ParkingBoyTable>
    <ManagementPagination></ManagementPagination>
  </div>
</template>

<script>
import ManagementHeader from '../../components/header/ManagementHeader'
import ParkingBoyTable from '../../components/common/ParkingBoyTable'
import ManagementPagination from '../../components/footer/ManagementPagination'
export default {
  name: 'ParkingBoyManagement',
  components: { ParkingBoyTable, ManagementPagination, ManagementHeader },
  mounted () {
  }
}
</script>

<style scoped>
.parking-boy-manage-div {
  height: 90%;
  width: 100%;
  background-color: white;
  margin-top: 20px;
}
</style>
