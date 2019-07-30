<template>
  <div>
    <div class="info-main-div">
      <el-card class="box-card-user">
        <div style="float: left; margin-right: 10px">
          <el-avatar :size="50" :src="circleUrl"></el-avatar>
        </div>
        <p>username</p>
      </el-card>
      <el-button type="text" class="box-card">
        <el-card >
            基本信息
          <i class="el-icon-arrow-right" style="float: right"></i>
        </el-card>
      </el-button>
      <el-button type="text" class="box-card">
        <el-card >
          地址管理
          <i class="el-icon-arrow-right" style="float: right"></i>
        </el-card>
      </el-button>
      <el-button type="text" class="box-card">
        <el-card >
          车辆管理
          <i class="el-icon-arrow-right" style="float: right"></i>
        </el-card>
      </el-button>
    </div>
    <div class="box-card-exit" >
      <el-button style="width:100%; color: red" size="medium" @click="clickExitLogin">
        退出登录
      </el-button>
    </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
export default {
  name: 'CustomerInformation',
  data: function () {
    return {
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  },
  methods: {
    clickExitLogin () {
      MessageBox.confirm('是否要退出登录？').then(action => {
        this.$router.push('/login')
      })
        .catch(() => {})
    }
  }
}
</script>

<style scoped>
.info-main-div {
  text-align: left;
}

.box-card-user {
  margin-top: 10px;
  width: 100%;
  text-align: left;
  margin-bottom: 10px;
}

.box-card {
  padding: 5px 0;
  width: 100%;
  text-align: left;
}

.box-card-exit {
  margin-top: 20px;
  text-align: center;
  width: 100%;
}

.el-button+.el-button {
  margin-left: 0;
}
</style>
