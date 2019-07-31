<template>
  <div id ='item'>
    <div id = 'parkingBoyOrders' v-for="(order, index) in orders" :key="index">
      <ParkingBoyOrder :index="index"></ParkingBoyOrder>
    </div>
  </div>
</template>

<script>
import ParkingBoyOrder from '../../components/common/ParkingBoyOrder'
import { GET_ORDERS_BY_PARKING_BOY_ID } from '../../store/const/parking-boy-const'
export default {
  name: 'parkingBoyOrders',
  components: { ParkingBoyOrder },
  data () {
    return {
      isSure: false
    }
  },
  computed: {
    orders () {
      return this.$store.state.parkingBoy.parkingBoyOrders
    }
  },
  mounted () {
    this.$store.dispatch(GET_ORDERS_BY_PARKING_BOY_ID, this.$store.state.loginInformation.id)
  },
  methods: {
  }
}
</script>

<style scoped>
#item {
  margin-top: 10px;
}
#parkingBoyOrders {
  text-align: left;
}
</style>
