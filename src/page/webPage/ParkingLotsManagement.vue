<template>
  <div id="parkinglotItem">
    <ManagementHeader></ManagementHeader>
    <CreateParkingLot></CreateParkingLot>
    <ParkingLotDisplayTable></ParkingLotDisplayTable>
    <ManagementPagination></ManagementPagination>
  </div>
</template>

<script>
import ParkingLotDisplayTable from '../../components/common/ParkingLotDisplayTable'
import ManagementHeader from '../../components/header/ManagementHeader'
import ManagementPagination from '../../components/footer/ManagementPagination'
import CreateParkingLot from '../../components/common/CreateParkingLot'
import { GET_PARKINGLOT_LIST } from '../../store/const-types'
export default {
  name: 'ParkingLotsManagement',
  components: { ParkingLotDisplayTable, ManagementHeader, ManagementPagination, CreateParkingLot },
  mounted () {
    this.$store.dispatch(GET_PARKINGLOT_LIST)
  }
}
</script>
