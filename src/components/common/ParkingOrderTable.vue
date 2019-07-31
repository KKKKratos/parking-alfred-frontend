<template>
  <el-table :data="$store.state.commonOrder.orderList" border stripe style="width: 100%">
    <el-table-column prop="id" label="ID" min-width="150"></el-table-column>
    <el-table-column prop="carNumber" label="车牌号" min-width="250"></el-table-column>
    <el-table-column prop="type" label="类型" min-width="150">
      <template slot-scope="scope">
        <span>{{orderType[scope.row.type - 1]}}</span>
      </template>
    </el-table-column>
    <el-table-column prop="status" label="状态" min-width="150">
      <template slot-scope="scope">
        <span>{{orderStatus[scope.row.status - 1]}}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作" min-width="150">
      <template slot-scope="scope">
        <el-button v-if="isAssignDisabledArray[scope.$index]" size="mini" type="success" @click="handleAssign(scope.$index, scope.row)">指派</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { ORDER_TYPE, ORDER_STATUS } from '../../config/const-values'
import { GET_ORDER_LIST } from '../../store/const/common-order-const'
export default {
  name: 'ParkingOrderTable',
  data () {
    return {
      isAssignDisabledArray: [],
      orderType: ORDER_TYPE,
      orderStatus: ORDER_STATUS
    }
  },
  methods: {
    handleAssign (index, row) {

    }
  },
  mounted () {
    this.$store.dispatch(GET_ORDER_LIST)
      .then(() => {
        this.$store.state.commonOrder.orderList.map(x => {
          this.isAssignDisabledArray.push(true)
          return x
        })
      })
      .catch(() => {})
  }
}
</script>

<style scoped>

</style>
