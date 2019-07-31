<template>
  <div class="parking-lot-manage-div">
    <ManagementHeader :selectedOptions="selectedOptions" :search="search"></ManagementHeader>
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
  data () {
    return {
      selectedOptions: [
        { value: 'name', label: '名字' }
      ]
    }
  },
  methods: {
    search: function (data) {
      this.$store.dispatch(GET_PARKING_LOT_LIST, data)
    }
  },
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
