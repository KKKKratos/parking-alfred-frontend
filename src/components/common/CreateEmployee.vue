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
        <el-form-item>
          <el-select v-model="creatingEmployeeForm.role" placeholder="请选择角色">
            <el-option
              v-for="item in roleOption"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
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
import {
  MANAGER,
  PARKING_BOY,
  ADMIN,
  CUSTOMER
} from "../../config/const-values";
import {
  OPEN_CREATING_DIALOG,
  CREATE_EMPLOYEE,
  GET_EMPLOYEES_LIST
} from "../../store/const-types";
export default {
  name: "CreateEmployee",
  data() {
    return {
      creatingEmployeeForm: {
        name: "",
        mail: "",
        telephone: "",
        role: ""
      },
      roleOption: [
        { value: 1, label: PARKING_BOY },
        { value: 2, label: MANAGER },
        { value: 3, label: ADMIN },
        { value: 4, label: CUSTOMER }
      ]
    };
  },
  methods: {
    clickCreatedCancel() {
      this.creatingEmployeeForm.name = "";
      this.creatingEmployeeForm.mail = "";
      this.creatingEmployeeForm.telephone = "";
      this.$store.commit(OPEN_CREATING_DIALOG);
    },
    clickCreatedSuccess() {
      this.$store
        .dispatch(CREATE_EMPLOYEE, { employee: this.creatingEmployeeForm })
        .then(response => {
          this.$store.commit(OPEN_CREATING_DIALOG);
          this.creatingEmployeeForm.name = "";
          this.creatingEmployeeForm.mail = "";
          this.creatingEmployeeForm.telephone = "";
          this.$store.dispatch(GET_EMPLOYEES_LIST);
          this.$message.success("创建成功");
        })
        .catch(error => {
          this.$message.error("创建失败");
        });
    }
  }
};
</script>

<style scoped>
</style>
