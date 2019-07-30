<template>
  <div id="parkingLotTable">
    <el-table stripe border :data="parkingLotList" style="min-width: 100%">
      <el-table-column prop="id" label="ID" width="180"></el-table-column>
      <el-table-column prop="name" label="名字" width="180"></el-table-column>
      <el-table-column prop="capacity" label="大小"></el-table-column>
      <el-table-column prop="operate" label="操作">

        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)" :disabled="ismodifyButtonDisabledArray[scope.$index]">修改</el-button>
          <el-button size="mini" type="danger"  @click="freeze(scope.$index, scope.row)">{{operateButtonNameArray[scope.$index]}}</el-button>
        </template>

      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { FREEZE_PARKING_LOT, START_PARKING_LOT } from '../../store/const/common-parking-lot-const'

export default {
  name: 'ParkingLotDisplayTable',
  data: function () {
    return {
      ismodifyButtonDisabledArray: [],
      operateButtonNameArray: []
    }
  },
  mounted () {
    const length = this.$store.state.commonParkingLot.parkingLotList.length
    for (let i = 0; i < length; i++) {
      this.ismodifyButtonDisabledArray.push(false)
      this.operateButtonNameArray.push('冻结')
    }
  },
  computed: {
    parkingLotList () {
      return this.$store.state.commonParkingLot.parkingLotList
    }
  },
  methods: {
    freeze: function (index, row) {
      if (this.operateButtonNameArray[index] === '冻结') {
        this.$confirm('此操作将冻结该停车场，是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.dispatch(FREEZE_PARKING_LOT, row)
            .then((response) => {
              this.ismodifyButtonDisabledArray.splice(index, 1, true)
              this.operateButtonNameArray.splice(index, 1, '启用')
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
        }).catch(() => {})
      } else {
        this.$confirm('此操作将启用该停车场，是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.dispatch(START_PARKING_LOT, row)
            .then((response) => {
              this.ismodifyButtonDisabledArray.splice(index, 1, false)
              this.operateButtonNameArray.splice(index, 1, '冻结')
              this.$message({
                type: 'success',
                message: '启用成功!'
              })
            })
            .catch(() => {
              this.$message({
                type: 'info',
                message: '已取消该操作！'
              })
            })
        }).catch(() => {
        })
      }
    }
  }
}

</script>
