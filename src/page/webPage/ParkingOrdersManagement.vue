<template>
  <div class="parking-order-manage-div">
    <ManagementHeader :selectedOptions="selectedOptions" :search="search"></ManagementHeader>
    <ParkingOrderTable></ParkingOrderTable>
    <ManagementPagination></ManagementPagination>
  </div>
</template>

<script>
import ManagementHeader from '../../components/header/ManagementHeader'
import ParkingOrderTable from '../../components/common/ParkingOrderTable'
import ManagementPagination from '../../components/footer/ManagementPagination'
import { GET_ORDER_LIST_BY_CAR_NUMBER } from '../../store/const/common-order-const'
export default {
  name: 'ParkingOrdersManagement',
  components: { ParkingOrderTable, ManagementPagination, ManagementHeader },
  data () {
    return {
      selectedOptions: [
        { value: 'carNumber', label: '车牌号' }
      ]
    }
  },
  methods: {
    search: function (data) {
      this.$store.dispatch(GET_ORDER_LIST_BY_CAR_NUMBER, data)
    }
  }
}
</script>

<style scoped>
  .parking-order-manage-div {
    height: 90%;
    width: 100%;
    background-color: white;
    margin-top: 20px;
  }
</style>
