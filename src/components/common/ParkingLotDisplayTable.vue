<template>
  <div id="parkingLotTable">
    <el-table stripe border :data="parkingLotList" style="min-width: 100%" slot="append">
      <el-table-column prop="id" label="ID" min-width="100"></el-table-column>
      <el-table-column prop="name" label="名字" min-width="200">
        <template slot-scope="scope">
          <el-input v-if="$store.state.commonParkingLot.isButtonEditedArray[scope.$index]" size="small" v-model="editTextByName"></el-input>
          <span v-else>{{scope.row.name}}</span>
        </template>
      </el-table-column >
      <el-table-column prop="capacity" label="大小" min-width="200">
        <template slot-scope="scope">
          <el-input v-if="$store.state.commonParkingLot.isButtonEditedArray[scope.$index]" size="small" v-model="editTextByCapacity"></el-input>
          <span v-else>{{scope.row.capacity}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态" min-width="200">
        <template slot-scope="scope">
          <span>{{employeeAccountType[scope.row.status - 1]}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="operate" label="操作" min-width="200">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)"
                     :disabled="$store.state.commonParkingLot.isButtonDisabledArray[scope.$index]">
            {{$store.state.commonParkingLot.modifyButtonNameArray[scope.$index]}}
          </el-button>
          <el-button size="mini" type="danger"  @click="freeze(scope.$index, scope.row)">
            {{$store.state.commonParkingLot.operateButtonNameArray[scope.$index]}}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { TABLE_BUTTON_TYPE, EMPLOYEE_ACCOUNT_STATUS } from '../../config/const-values'
import { UPDATE_PARKING_LOT, GET_PARKING_LOT_LIST, FREEZE_PARKING_LOT, START_PARKING_LOT, INIT_BUTTON_STYLE, CHANGE_BUTTON_WHEN_EDIT, CHANGE_BUTTON_WHEN_FREEZE, CHANGE_BUTTON_WHEN_START, CHANGE_BUTTON_WHEN_SAVE } from '../../store/const/common-parking-lot-const'
export default {
  name: 'ParkingLotDisplayTable',
  data: function () {
    return {
      editTextByName: '',
      editTextByCapacity: '',
      employeeAccountType: EMPLOYEE_ACCOUNT_STATUS
    }
  },
  mounted () {
    const self = this
    this.$store.dispatch(GET_PARKING_LOT_LIST)
      .then(() => {
        this.$store.state.commonParkingLot.parkingLotList.map(x => {
          self.$store.commit(INIT_BUTTON_STYLE, { status: x.status })
          return x
        })
      }).catch(() => {})
  },
  computed: {
    parkingLotList () {
      return this.$store.state.commonParkingLot.parkingLotList
    }
  },
  methods: {
    freeze: function (index, row) {
      if (this.$store.state.commonParkingLot.operateButtonNameArray[index] === '冻结') {
        this.$confirm('此操作将冻结该停车场，是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.dispatch(FREEZE_PARKING_LOT, row)
            .then(() => {
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
        }).catch(() => {})
      } else {
        this.$confirm('此操作将启用该停车场，是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.dispatch(START_PARKING_LOT, row)
            .then(() => {
              this.$store.commit(CHANGE_BUTTON_WHEN_START, { index: index })
              this.$message({ type: 'success', message: '启用成功!' })
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
    },
    handleEdit (index, row) {
      if (this.$store.state.commonParkingLot.modifyButtonNameArray[index] === TABLE_BUTTON_TYPE[0]) {
        this.editTextByName = row.name
        this.editTextByCapacity = row.capacity
        this.$store.commit(CHANGE_BUTTON_WHEN_EDIT, { index: index })
      } else {
        const parkingLot = { id: row.id, name: this.editTextByName, capacity: this.editTextByCapacity }
        this.$store.dispatch(UPDATE_PARKING_LOT, parkingLot)
        this.$store.commit(CHANGE_BUTTON_WHEN_SAVE, { index: index })
        this.$message({ type: 'success', message: '修改成功!' })
      }
    }
  }
}
</script>
