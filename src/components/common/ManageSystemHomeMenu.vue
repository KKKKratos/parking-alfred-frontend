<template>
    <div style="height: 100%">
      <el-menu :default-active="activeMenu" style="height: 100%" :router="true" @select="selectMenuItem">
        <el-menu-item index="employeesManage" >
          <i class="el-icon-s-management"></i>
          <span slot="title">员工管理</span>
        </el-menu-item>
        <el-menu-item index="parkingLotsManage">
          <i class="el-icon-s-management"></i>
          <span slot="title">停车场管理</span>
        </el-menu-item>
        <el-menu-item index="parkingBoysManage">
          <i class="el-icon-s-management"></i>
          <span slot="title">停车员管理</span>
        </el-menu-item>
        <el-menu-item index="dashboard">
          <i class="el-icon-s-management"></i>
          <span slot="title">停车场Dashboard</span>
        </el-menu-item>
        <el-menu-item index="orderManage">
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
      return this.$store.state.activeMenuItem
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
