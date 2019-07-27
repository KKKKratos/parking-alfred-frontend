<template>
<div id="login" style="margin-top:200px">
<div style="margin: 20px;"></div>
<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
  <el-form-item label="用户名">
    <el-input v-model="formLabelAlign.name" placeholder="请输入用户名"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="formLabelAlign.region" placeholder="请输入密码"></el-input>
  </el-form-item>
</el-form>
  <el-button type="info">登录</el-button>
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: ''
      }
    }
  }
}
</script>

<style scoped>
</style>
