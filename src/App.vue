<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  mounted () {
    this.$router.push({ path: '/mobile-home' })
  }
}
</script>

<style >

</style>
