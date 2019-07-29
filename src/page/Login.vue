<template>
    <div class="login-body">
      <el-select v-model="selectedRole" placeholder="请选择角色">
        <el-option
          v-for="item in selectedOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <div class="login-body-button-div">
        <el-button type="primary" @click="toRoleLogin">Login</el-button>
      </div>
  </div>

</template>

<script>
export default {
  name: 'Login',
  methods: {
    toRoleLogin () {
      this.$router.push({ path: `/role-login/${this.selectedRole}` })
    }
  },
  data: function () {
    return {
      selectedRole: '',
      selectedOptions: [
        { value: 'customer', label: 'Customer' },
        { value: 'parkingBoy', label: 'Parking Boy' },
        { value: 'manager', label: 'Manager/Admin' }
      ]
    }
  }
}
</script>

<style scoped>
  .login-body {
    padding-top: 200px;
  }

  .login-body-button-div {
    width: 100%;
    margin-top: 50px;
  }
</style>
