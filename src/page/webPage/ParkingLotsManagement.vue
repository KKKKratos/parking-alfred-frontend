<template>
  <div class="parking-lot-manage-div">
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
import { GET_PARKING_LOT_LIST } from '../../store/const/common-parking-lot-const'
export default {
  name: 'ParkingLotsManagement',
  components: { ParkingLotDisplayTable, ManagementHeader, ManagementPagination, CreateParkingLot },
  mounted () {
    this.$store.dispatch(GET_PARKING_LOT_LIST)
  }
}
</script>

<style scoped>
  .parking-lot-manage-div {
    height: 90%;
    width: 100%;
    background-color: white;
    margin-top: 20px;
  }
</style>
