<template>
  <mt-header fixed :title="selectedId">
    <router-link to="/login" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link>
  </mt-header>
</template>

<script>
export default {
  name: 'MobileHeader',
  computed: {
    selectedId: function () {
      return this.$store.state.tabItemsSelected
    }
  }
}
</script>

<style scoped>

</style>
