<template>
  <div>
    <MobileHeader></MobileHeader>
    <router-view></router-view>
    <MobileParkingBoyFooter v-if="$store.state.roleSelected === 'parkingBoy'"></MobileParkingBoyFooter>
    <MobileCustomerFooter v-else></MobileCustomerFooter>
  </div>
</template>
<script>
import MobileHeader from '../../components/header/MobileHeader'
import MobileParkingBoyFooter from '../../components/footer/MobileParkingBoyFooter'
import MobileCustomerFooter from '../../components/footer/MobileCustomerFooter'
export default {
  name: 'Home',
  components: { MobileCustomerFooter, MobileParkingBoyFooter, MobileHeader },
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
