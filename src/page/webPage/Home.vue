<template>
  <el-container style="height: 100%; width: 100%">
    <el-header class="home-header">
      <WebHeader></WebHeader>
    </el-header>
    <el-container>
      <el-aside class="home-aside" style="width: 250px">
        <ManageSystemHomeMenu></ManageSystemHomeMenu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import WebHeader from '../../components/header/WebHeader'
import ManageSystemHomeMenu from '../../components/common/ManageSystemHomeMenu'
export default {
  name: 'Home',
  components: {WebHeader, ManageSystemHomeMenu },
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>
  .home-header{
    background-color: #6E7783;
    color: #333;
    line-height: 60px;
  }

  .home-aside {
    background-color: #D3DCE6;
    color: #333;
    line-height: 100%;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    line-height: 100%;
  }
</style>
