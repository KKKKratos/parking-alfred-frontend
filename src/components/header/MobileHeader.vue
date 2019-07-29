<template>
  <div class="header-div">
    <mt-header fixed :title="selectedId" class="header"></mt-header>
  </div>
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
.header {
  height: 50px;
}
.header-div {
  height: 50px;
}
</style>
