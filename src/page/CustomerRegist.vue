<template>
  <div id="regist">
    <div style="margin: 0 auto">
      <img src="../assets/img/photo.jpg" width="200" height="200" style="margin-bottom: 30px" />
      <div style="width: 300px; margin: 0 auto;">
        <el-form :label-position="labelPosition" label-width="40px" :model="formLabelAlign">
          <el-form-item label="姓名" style="text-align: center">
            <el-input v-model="formLabelAlign.name" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="formLabelAlign.mail" placeholder="请输入邮箱" ></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="formLabelAlign.telephone" placeholder="请输入电话"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="formLabelAlign.password" placeholder="请输入密码" show-password></el-input>
          </el-form-item>
        </el-form>
      </div>
      <el-button type="primary" @click="clickRegist">确认</el-button>
      <el-button type="primary" @click="reset">重置</el-button>
    </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
import { CREATE_CUSTOMER } from '../store/const/customer-const'
export default {
  name: 'CustomerRegist',
  data () {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        mail: '',
        telephone: '',
        password: ''
      }
    }
  },
  computed: {
    fullWidth: function () {
      const clientWidth = document.documentElement.offsetWidth
      return clientWidth > 500 ? '50%' : clientWidth - 100 + 'px'
    }
  },
  methods: {
    clickRegist () {
      if (
        this.formLabelAlign.name === '' ||
        this.formLabelAlign.mail === '' ||
        this.formLabelAlign.password === ''
      ) {
        MessageBox.alert('用户名、邮箱、密码都不能为空', '提示信息')
      } else {
        const self = this
        this.$store
          .dispatch(CREATE_CUSTOMER, { customer: this.formLabelAlign })
          .then(response => {
            self.$router.push('/role-login')
          })
          .catch(() => {
            MessageBox.alert('注册成功', '提示信息')
          })
      }
    },
    reset () {
      this.formLabelAlign.name = ''
      this.formLabelAlign.mail = ''
      this.formLabelAlign.telephone = ''
      this.formLabelAlign.password = ''
    }
  }
}
</script>

<style scoped>
#regist {
  padding-top: 100px;
}
</style>
