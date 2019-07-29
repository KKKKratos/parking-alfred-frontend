<template>
  <div id="login">
    <div style="margin-right: 20px;">
      <img src="../assets/img/photo.jpg" width="200" height="200" style="margin-bottom: 49px;" />
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="邮箱">
          <el-input v-model="formLabelAlign.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formLabelAlign.password" placeholder="请输入密码" show-password></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="clickLogin">登录</el-button>
      <el-button type="primary" @click="reset">重置</el-button>
    </div>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
import { SELECT_ROLE } from "../store/const-types";
import { Promise } from 'q';
import {getSelfEmployee} from '../api/employee';
import {LOGIN_RESPONSE}  from '../store/const-types'

export default {
  name: "RoleLogin",
  data() {
    return {
      role: this.$route.params.selectedRole,
      labelPosition: "right", 
      formLabelAlign: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    clickLogin() {
      if (
        this.formLabelAlign.email === "" ||
        this.formLabelAlign.password === ""
      ) {
        MessageBox.alert("邮箱或者密码不能为空", "提示信息");
      } else {
        const self = this;
        this.$store 
          .dispatch("getLoginInfo", this.formLabelAlign)
          .then(response => { 
            self.$store.commit("saveToken", response.data.data);
            return getSelfEmployee()
          })
          .then(response => {
            self.$store.commit(SELECT_ROLE,{roleSelected:response.data.data.role})
            self.$store.commit(LOGIN_RESPONSE,response.data.data)      
            // const role = response.data.data.role;
            const role = this.$store.state.loginResponse.role
            console.log(response)
            if (role === 1) {
              self.$router.push("/grabbing-order");
            } else if (role === 2 || role == 3) {
              self.$router.push("/web-home");
            } else if (role === 4 ){
              self.$router.push("/creating-order");
            }
          })
          .catch(error => {
            console.log(error)
            MessageBox.alert("登录失败", "提示信息");
          });
      }
    },
    reset() {
      (this.formLabelAlign.email = ""), (this.formLabelAlign.password = "");
      console.log(this.formLabelAlign.password.length);
    }
  }
};
</script>

<style scoped>
#login {
  padding-top: 200px;
}
</style>
