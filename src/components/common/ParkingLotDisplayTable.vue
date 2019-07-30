<template>
  <div id="parkingLotTable">
    <el-table stripe border :data="parkingLotList" style="width: 100%">
      <el-table-column prop="id" label="ID" min-width="180"></el-table-column>
      <el-table-column prop="name" label="名字" min-width="180"></el-table-column>
      <el-table-column prop="capacity" label="大小" min-width="180"></el-table-column>
      <el-table-column prop="operate" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
          <el-button size="mini" type="danger" @click="freeze">冻结</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'ParkingLotDisplayTable',
  computed: {
    parkingLotList () {
      return this.$store.state.commonParkingLot.parkingLotList
    }
  },
  methods: {
    freeze () {
      this.$confirm('此操作将冻结该停车场，是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '冻结成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消该操作！'
        })
      })
    }
  }
}

</script>
