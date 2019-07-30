<template>
  <div id="parkingLotTable">
    <el-table stripe border :data="parkingLotList" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180"></el-table-column>
      <el-table-column prop="name" label="名字" width="180"></el-table-column>
      <el-table-column prop="capacity" label="大小"></el-table-column>
      <el-table-column prop="operate" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
          <el-button size="mini" type="danger" @click="handleFreeze(scope.$index, scope.row)">冻结</el-button>
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
    handleEdit (index, row) {

    },
    handleFreeze (index, row) {

    }
  }
}
</script>
