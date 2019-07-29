<template>
  <div class="home-main-div">
    <MobileHeader></MobileHeader>
    <router-view></router-view>
    <MobileParkingBoyFooter v-if="$store.state.roleSelected === 1"></MobileParkingBoyFooter>
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
  .home-main-div {
    margin-left: 10px;
    margin-right: 10px;
  }
</style>
