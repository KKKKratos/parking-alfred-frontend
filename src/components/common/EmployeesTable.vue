<template>
  <el-table
    :data="tableData"
    border
    stripe
    style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      min-width="100">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      min-width="150">
    </el-table-column>
    <el-table-column
      prop="email"
      label="Email"
      min-width="300">
    </el-table-column>
    <el-table-column
      prop="telephone"
      label="电话号码"
      min-width="250">
    </el-table-column>
    <el-table-column label="操作" min-width="150">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="primary"
          @click="handleEdit(scope.$index, scope.row)">修改</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'EmployeesTable',
  data () {
    return {
      tableData: [{
        id: 1,
        name: 'william',
        email: 'william@oocl.com',
        telephone: '12345678911'
      }]
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  }
}
</script>

<style scoped>

</style>
