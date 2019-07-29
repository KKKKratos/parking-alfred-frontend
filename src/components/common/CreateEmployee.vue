<template>
    <div>
      <el-dialog title="创建员工" :visible="$store.state.isOpenCreateEmployeeDialog" :show-close="false">
        <el-form label-position="left" label-width="80px" :model="creatingEmployeeForm">
          <el-form-item label="姓名:">
            <el-input v-model="creatingEmployeeForm.name"></el-input>
          </el-form-item>
          <el-form-item label="邮件:">
            <el-input v-model="creatingEmployeeForm.mail"></el-input>
          </el-form-item>
          <el-form-item label="电话号码:">
            <el-input v-model="creatingEmployeeForm.telephone"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="clickCreatedCancel">取 消</el-button>
          <el-button type="primary" @click="clickCreatedSuccess">确定创建</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
import { OPEN_CREATING_DIALOG } from '../../store/const-types'
export default {
  name: 'CreateEmployee',
  data () {
    return {
      creatingEmployeeForm: {
        name: '',
        mail: '',
        telephone: ''
      }
    }
  },
  methods: {
    clickCreatedCancel () {
      this.creatingEmployeeForm.name = ''
      this.creatingEmployeeForm.mail = ''
      this.creatingEmployeeForm.telephone = ''
      this.$store.commit(OPEN_CREATING_DIALOG)
    },
    clickCreatedSuccess () {

    }
  }
}
</script>

<style scoped>

</style>
