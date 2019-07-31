<template>
  <el-table
    :data="$store.state.parkingBoy.parkingBoyList" border stripe style="width: 100%" @expand-change="clickTableRow" ref="parkingBoyTable">
    <el-table-column type="expand" label="Lot">
      <template slot-scope="scope">
        <el-form label-position="left" inline class="demo-table-expand">
          <span v-if="false">{{scope.$index}}</span>
          <div style="text-align: center">
            <el-transfer
              style="text-align: left; display: inline-block"
              v-model="selectedParkingLots"
              filterable
              :left-default-checked="[]"
              :right-default-checked="[]"
              :titles="['可选停车场', '管理的停车场']"
              :format="{noChecked: '${total}',hasChecked: '${checked}/${total}'}"
              @change="handleChange"
              :data="transferData">
              <span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
            </el-transfer>
          </div>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column prop="id" label="ID" min-width="100"></el-table-column>
    <el-table-column prop="name" label="姓名" min-width="150">
      <template slot-scope="scope">
        <span >{{scope.row.name}}</span>
      </template>
    </el-table-column>
    <el-table-column prop="telephone" label="电话号码" min-width="200">
      <template slot-scope="scope">
        <span>{{scope.row.telephone}}</span>
      </template>
    </el-table-column>
    <el-table-column prop="status" label="状态" min-width="150">
      <template slot-scope="scope">
        <span>{{employeeStatus[scope.row.status - 1]}}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { EMPLOYEE_STATUS } from '../../config/const-values'
import { GET_PARKING_LOT_LIST } from '../../store/const/common-parking-lot-const'
import { UPDATE_PARKING_BOY_BY_PARKING_LOTS, GET_PARKING_BOY_LIST } from '../../store/const/parking-boy-const'
export default {
  name: 'ParkingBoyTable',
  data () {
    return {
      selectedParkingLots: [],
      transferData: [],
      currentId: 0,
      lastRow: 0,
      employeeStatus: EMPLOYEE_STATUS
    }
  },
  mounted () {
    this.$store.dispatch(GET_PARKING_BOY_LIST)
      .then(() => {})
      .catch(() => {})
  },
  methods: {
    handleChange (value, direction, movedKeys) {
      this.$store.dispatch(UPDATE_PARKING_BOY_BY_PARKING_LOTS, { id: this.currentId, parkingLotIdList: value })
        .then(() => {
          this.$message({
            type: 'success',
            message: '分配成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'error',
            message: '分配失败!!!'
          })
        })
    },
    clickTableRow (row, column, event) {
      if (this.lastRow !== row) {
        this.$refs.parkingBoyTable.toggleRowExpansion(this.lastRow, false)
      }
      const self = this
      this.currentId = row.id
      this.lastRow = row
      this.transferData.splice(0)
      this.selectedParkingLots.splice(0)
      this.$store.dispatch(GET_PARKING_LOT_LIST)
        .then(() => {
          self.transferData = self.$store.state.commonParkingLot.parkingLotList.map(x => {
            const index = x.employeeVOS.findIndex(x => x.id === self.currentId)
            if (index >= 0) {
              self.selectedParkingLots.push(x.id)
            }
            return { key: x.id, label: x.name, disabled: false }
          })
        })
        .catch(() => {})
    }
  }
}
</script>

<style scoped>
  .transfer-footer {
    margin-left: 20px;
    padding: 6px 5px;
  }
</style>
