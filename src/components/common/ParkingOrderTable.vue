<template>
  <el-table :data="$store.state.commonOrder.orderList" border stripe style="width: 100%">
    <el-table-column prop="id" label="ID" min-width="100"></el-table-column>
    <el-table-column prop="carNumber" label="车牌号" min-width="200"></el-table-column>
    <el-table-column prop="type" label="类型" min-width="120">
      <template slot-scope="scope">
        <span>{{orderType[scope.row.type - 1]}}</span>
      </template>
    </el-table-column>
    <el-table-column prop="status" label="状态" min-width="120">
      <template slot-scope="scope">
        <span>{{orderStatus[scope.row.status - 1]}}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作" min-width="400">
      <template slot-scope="scope">
        <el-button v-show="isAssignDisabledArray[scope.$index]" size="mini" type="success" @click="handleAssign(scope.$index, scope.row)">指派</el-button>
        <div v-if="isSelectOptionDisabled[scope.$index]">
          <el-select  v-model="selectedOption" placeholder="请选择" size="small" style="margin-right: 20px">
            <el-option
              v-for="item in selectedOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-button :disabled="selectedOption === ''" type="primary" size="small" @click="confirmAssign(scope.$index, scope.row)">确定指派</el-button>
          <el-button type="danger" size="small" @click="cancelAssign(scope.$index, scope.row)">取消</el-button>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { ORDER_TYPE, ORDER_STATUS } from '../../config/const-values'
import { GET_ORDER_LIST, UPDATE_ORDER_BY_STATUS } from '../../store/const/common-order-const'
import { GET_PARKING_BOY_LIST } from '../../store/const/parking-boy-const'
export default {
  name: 'ParkingOrderTable',
  data () {
    return {
      isAssignDisabledArray: [],
      orderType: ORDER_TYPE,
      orderStatus: ORDER_STATUS,
      selectedOptions: [],
      selectedOption: '',
      isSelectOptionDisabled: []
    }
  },
  methods: {
    handleAssign (index, row) {
      this.$store.dispatch(GET_PARKING_BOY_LIST)
        .then(() => {
          this.isAssignDisabledArray.splice(index, 1, false)
          this.isSelectOptionDisabled.splice(index, 1, true)
          this.selectedOptions = this.$store.state.parkingBoy.parkingBoyList.map(x => {
            if (x.status === 1) {
              return { value: x.id, label: x.name }
            }
          })
        })
        .catch(() => {})
    },
    confirmAssign (index, row) {
      this.$store.dispatch(UPDATE_ORDER_BY_STATUS, { order: { id: row.id, employee: { id: this.selectedOption }, status: 2 } })
        .then(() => {
          this.isSelectOptionDisabled.splice(index, 1, false)
        })
        .catch(() => {})
    },
    cancelAssign (index, row) {
      this.isSelectOptionDisabled.splice(index, 1, false)
      this.isAssignDisabledArray.splice(index, 1, true)
      this.selectedOption = ''
    }
  },
  mounted () {
    this.$store.dispatch(GET_ORDER_LIST)
      .then(() => {
        this.$store.state.commonOrder.orderList.map(x => {
          if (x.status === 1) {
            this.isAssignDisabledArray.push(true)
          } else {
            this.isAssignDisabledArray.push(false)
          }
          this.isSelectOptionDisabled.push(false)
          return x
        })
      })
      .catch(() => {})
  }
}
</script>

<style scoped>

</style>
