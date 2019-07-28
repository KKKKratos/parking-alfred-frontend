<template>
  <div id="login" style="margin-top:200px">
    <div style="margin: 20px;"></div>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="用户名">
        <el-input v-model="formLabelAlign.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.password" placeholder="请输入密码"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="info" @click="clickLogin">登录</el-button>
  </div>
</template>

<script>
import { SELECT_ROLE } from '../store/const-types'
export default {
  name: 'RoleLogin',
  data () {
    return {
      role: this.$route.params.selectedRole,
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    clickLogin () {
      const self = this
      this.$store.dispatch('getLoginInfo', this.formLabelAlign)
        .then(response => {
          console.log(response)
          if (response.data.code === 200) {
            self.$store.commit(SELECT_ROLE, { roleSelected: self.$route.params.selectedRole })
            if (self.role === 'customer' || self.role === 'parkingBoy') {
              self.$router.push('/mobile-home')
            } else if (self.role === 'manager') {
              self.$router.push('/web-home')
            }
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
</style>
