<template>
  <div>
    <MobileHeader></MobileHeader>
    <OrderList></OrderList>
    <MobileParkingBoyFooter v-if="$store.state.roleSelected === 'parkingBoy'"></MobileParkingBoyFooter>
    <MobileCustomerFooter v-else></MobileCustomerFooter>
  </div>
</template>

<script>
import MobileHeader from '../../components/header/MobileHeader'
import MobileParkingBoyFooter from '../../components/footer/MobileParkingBoyFooter'
import MobileCustomerFooter from '../../components/footer/MobileCustomerFooter'
import OrderList from '../../components/common/OrderList'
export default {
  name: 'Home',
  components: { OrderList, MobileCustomerFooter, MobileParkingBoyFooter, MobileHeader },
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
