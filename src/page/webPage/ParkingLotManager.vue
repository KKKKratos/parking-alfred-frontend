<template>
  <div id="parkinglotItem">
    <ParkingLotDisplayTable></ParkingLotDisplayTable>
  </div>
</template>

<script>
 import ParkingLotDisplayTable from "../../components/common/ParkingLotDisplayTable"; 
 import {ADD_LIST} from '../../store/const-types'
 export default {
   name: 'ParkingLotManager',
   components: { ParkingLotDisplayTable },
   mounted () {
     this.$store.dispatch(ADD_LIST)
   }
 };
</script>