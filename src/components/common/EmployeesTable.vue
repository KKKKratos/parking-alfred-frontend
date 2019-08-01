<template>
  <el-table :data="$store.state.employee.employeesList" border stripe style="width: 100%">
    <el-table-column prop="id" label="ID" min-width="100"></el-table-column>
    :data="$store.state.employee.employeesList"
    <el-table-column prop="name" label="姓名" min-width="150">
      <template slot-scope="scope">
        <el-input v-if="$store.state.employee.isButtonEditedArray[scope.$index]" size="small" v-model="editTextByName"></el-input>
        <span v-else>{{scope.row.name}}</span>
      </template>
    </el-table-column>
    <el-table-column prop="mail" label="Email" min-width="250">
      <template slot-scope="scope">
        <el-input v-if="$store.state.employee.isButtonEditedArray[scope.$index]" size="small" v-model="editTextByMail"></el-input>
        <span v-else>{{scope.row.mail}}</span>
      </template>
    </el-table-column>

    <el-table-column prop="telephone" label="电话号码" min-width="200">
      <template slot-scope="scope">
        <el-input v-if="$store.state.employee.isButtonEditedArray[scope.$index]" size="small" v-model="editTextByTelephone"></el-input>
        <span v-else>{{scope.row.telephone}}</span>
      </template>
    </el-table-column>

    <el-table-column prop="role" label="角色" min-width="150">
      <template slot-scope="scope">
        <el-select v-if="$store.state.employee.isButtonEditedArray[scope.$index]" v-model="editTextByRole" placeholder="请选择" size="small">
          <el-option
            v-for="item in typeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span v-else>{{roleType[scope.row.role - 1]}}</span>
      </template>
    </el-table-column>

    <el-table-column prop="status" label="状态" min-width="150">
      <template slot-scope="scope">
        <el-select v-if="$store.state.employee.isButtonEditedArray[scope.$index]" v-model="editTextByStatus" placeholder="请选择" size="small">
          <el-option
            v-for="item in statusOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span v-else>{{employeeStatus[scope.row.status - 1]}}</span>
      </template>
    </el-table-column>

    <el-table-column label="操作" min-width="150">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="primary"
          @click="handleEdit(scope.$index, scope.row)"
          :disabled="$store.state.employee.isButtonDisabledArray[scope.$index]"
        >{{$store.state.employee.modifyButtonNameArray[scope.$index]}}</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="freeze(scope.$index, scope.row)"
        >{{$store.state.employee.operateButtonNameArray[scope.$index]}}</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { TABLE_BUTTON_TYPE, EMPLOYEE_STATUS, ROLE_TYPE } from '../../config/const-values'
import { UPDATE_EMPLOYEE, GET_EMPLOYEES_LIST, INIT_BUTTON_STYLE, CHANGE_BUTTON_WHEN_FREEZE, CHANGE_BUTTON_WHEN_START, CHANGE_BUTTON_WHEN_EDIT, CHANGE_BUTTON_WHEN_SAVE } from '../../store/const/employee-const'
export default {
  name: 'EmployeesTable',
  data: function () {
    return {
      editTextByName: '',
      editTextByMail: '',
      editTextByTelephone: '',
      editTextByRole: '',
      editTextByStatus: '',
      employeeStatus: EMPLOYEE_STATUS,
      roleType: ROLE_TYPE,
      statusOptions: [],
      typeOptions: []
    }
  },
  mounted () {
    this.$store.dispatch(GET_EMPLOYEES_LIST)
      .then(() => {
        this.$store.state.employee.employeesList.map(x => {
          this.$store.commit(INIT_BUTTON_STYLE, { status: x.status })
        })
      })
      .catch(() => {})
    this.statusOptions = this.employeeStatus.map(x => {
      return { value: x, label: x }
    })
    this.typeOptions = this.roleType.map(x => {
      return { value: x, label: x }
    })
  },
  methods: {
    freeze: function (index, row) {
      if (this.$store.state.employee.operateButtonNameArray[index] === '冻结') {
        this.$confirm('此操作将冻结该员工，是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            row.status = 5
            this.$store.dispatch(UPDATE_EMPLOYEE, row)
              .then(response => {
                this.$store.commit(CHANGE_BUTTON_WHEN_FREEZE, { index: index })
                this.$message({
                  type: 'success',
                  message: '冻结成功!'
                })
              })
              .catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消该操作！'
                })
              })
          })
          .catch(() => {})
      } else {
        this.$confirm('此操作解冻该员工，是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            row.status = 1
            this.$store
              .dispatch(UPDATE_EMPLOYEE, row)
              .then(response => {
                this.$store.commit(CHANGE_BUTTON_WHEN_START, { index: index })
                this.$message({ type: 'success', message: '解冻成功!' })
              })
              .catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消该操作！'
                })
              })
          })
          .catch(() => {})
      }
    },
    handleEdit (index, row) {
      const self = this
      if (this.$store.state.employee.modifyButtonNameArray[index] === TABLE_BUTTON_TYPE[0]) {
        this.editTextByName = row.name
        this.editTextByMail = row.mail
        this.editTextByTelephone = row.telephone
        this.editTextByRole = this.roleType[row.role - 1]
        this.editTextByStatus = this.employeeStatus[row.status - 1]
        this.$store.commit(CHANGE_BUTTON_WHEN_EDIT, { index: index })
      } else {
        const employee = {
          id: row.id,
          name: this.editTextByName,
          mail: this.editTextByMail,
          telephone: this.editTextByTelephone,
          role: this.roleType.findIndex(x => x === self.editTextByRole) + 1,
          status: this.employeeStatus.findIndex(x => x === self.editTextByStatus) + 1
        }
        this.$store.dispatch(UPDATE_EMPLOYEE, employee)
        this.$store.commit(CHANGE_BUTTON_WHEN_SAVE, { index: index })
      }
    }
  }
}
</script>

<style scoped>
</style>
