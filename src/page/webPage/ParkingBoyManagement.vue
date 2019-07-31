<template>
  <div class="parking-boy-manage-div">
    <ManagementHeader :selectedOptions="selectedOptions" :search="search"></ManagementHeader>
    <ParkingBoyTable></ParkingBoyTable>
    <ManagementPagination></ManagementPagination>
  </div>
</template>

<script>
import ManagementHeader from '../../components/header/ManagementHeader'
import ParkingBoyTable from '../../components/common/ParkingBoyTable'
import ManagementPagination from '../../components/footer/ManagementPagination'
import { GET_PARKING_BOY_LIST_BY_NAME } from '../../store/const/parking-boy-const'
export default {
  name: 'ParkingBoyManagement',
  components: { ParkingBoyTable, ManagementPagination, ManagementHeader },
  data () {
    return {
      selectedOptions: [
        { value: 'name', label: '名字' }
      ]
    }
  },
  mounted () {
  },
  methods: {
    search: function (data) {
      this.$store.dispatch(GET_PARKING_BOY_LIST_BY_NAME, data)
    }
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
