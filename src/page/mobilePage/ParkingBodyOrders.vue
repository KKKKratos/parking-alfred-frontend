<template>
  <div id ='item'>
    <div id = 'parkingBoyOrders' v-for="(order, index) in orders" :key="index">
      <ParkingBoyOrder :index="index"></ParkingBoyOrder>
    </div>
  </div>
</template>

<script>
import ParkingBoyOrder from '../../components/common/ParkingBoyOrder'
import { GET_PARKING_BOY_ORDERS } from '../../store/const-types'
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
      return this.$store.state.parkingBoyOrders
    }
  },
  mounted () {
    this.$store.dispatch(GET_PARKING_BOY_ORDERS)
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
