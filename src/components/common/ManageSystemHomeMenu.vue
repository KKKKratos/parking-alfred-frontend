<template>
    <div style="height: 100%; text-align: left">
      <el-menu :default-active="activeMenu" style="height: 100%" :router="true" @select="selectMenuItem">
        <el-menu-item index="employees-management" >
          <i class="el-icon-s-management"></i>
          <span slot="title">员工管理</span>
        </el-menu-item>
        <el-menu-item index="parking-lots-management">
          <i class="el-icon-s-management"></i>
          <span slot="title" >停车场管理</span>
        </el-menu-item>
        <el-menu-item index="parking-boys-management">
          <i class="el-icon-s-management"></i>
          <span slot="title">停车员管理</span>
        </el-menu-item>
        <el-menu-item index="parking-lot-dashboard">
          <i class="el-icon-s-management"></i>
          <span slot="title">停车场Dashboard</span>
        </el-menu-item>
        <el-menu-item index="parking-orders-management">
          <i class="el-icon-s-management"></i>
          <span slot="title">订单管理</span>
        </el-menu-item>
      </el-menu>
    </div>
</template>

<script>
export default {
  name: 'ManageSystemHomeMenu',
  computed: {
    activeMenu: function () {
      return this.$store.state.webActiveMenuItem
    }
  },
  methods: {
    selectMenuItem (index, indexPath) {
    }
  }
}
</script>

<style scoped>

</style>
