<template>
  <div>
    <div class="info-main-div">
      <el-card class="box-card">
        <div style="float: left; margin-right: 10px">
          <el-avatar :size="50" :src="circleUrl"></el-avatar>
        </div>
        <p>username</p>
      </el-card>
      <el-card class="box-card">
        地址管理
        <i class="el-icon-arrow-right" style="float: right"></i>
      </el-card>
      <el-card class="box-card">
        车辆管理
        <i class="el-icon-arrow-right" style="float: right"></i>
      </el-card>
    </div>
    <div class="box-card-exit" >
      <el-button style="width:100%; color: red" size="medium" @click="clickExitLogin">
        退出登录
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerInformation',
  data: function () {
    return {
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  },
  methods: {
    clickExitLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.info-main-div {
  text-align: left;
}

.box-card {
  margin-top: 10px;
}

.box-card-exit {
  margin-top: 20px;
  text-align: center;
  width: 100%;
}
</style>
