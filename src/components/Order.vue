<template>
    <div id="login" style="margin-top:200px">
    <div style="margin: 20px;"></div>
    <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
    <el-form-item label="车 牌 号：">
        <el-input v-model="formLabelAlign.name" placeholder="粤C3451K"></el-input>
    </el-form-item>
    <el-form-item label="用户地址：">
        <el-input v-model="formLabelAlign.region" placeholder="香洲区红星路5号"></el-input>
    </el-form-item>
    <el-form-item label="预约时间：">
        <el-input v-model="formLabelAlign.region" placeholder="9：00"></el-input>
    </el-form-item>
    </el-form>
  <el-button type="info">确认</el-button>   
</div>
</template>

<script>
export default {
  name: 'Login',
  data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: ''
        }
      };
    }
}
</script>


<style scoped>

</style>
