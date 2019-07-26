<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  mounted() {
    this.$router.push({path: '/web-home'})
  }
}
</script>

<style>
@import "assets/css/common.css";
</style>
