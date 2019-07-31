<template>
  <div id="parkingLotTable">
    <el-table stripe border :data="parkingLotList" style="width: 100%">
      <el-table-column prop="id" label="ID" min-width="180"></el-table-column>
      <el-table-column prop="name" label="名字" min-width="180">
        <template slot-scope="scope">
          <el-input v-if="isEdited[scope.$index]" size="small" v-model="editTextByName"></el-input>
          <span v-else>{{scope.row.name}}</span>
        </template>
      </el-table-column >
      <el-table-column prop="capacity" label="大小" min-width="180">
        <template slot-scope="scope">
          <el-input v-if="isEdited[scope.$index]" size="small" v-model="editTextByCapacity"></el-input>
          <span v-else>{{scope.row.capacity}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="operate" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">{{editButtonName[scope.$index]}}</el-button>
          <el-button size="mini" type="danger" @click="freeze">冻结</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { TABLE_BUTTON_TYPE } from '../../config/const-values'
import { UPDATE_PARKING_LOT, GET_PARKING_LOT_LIST } from '../../store/const/common-parking-lot-const'
export default {
  name: 'ParkingLotDisplayTable',
  computed: {
    parkingLotList () {
      return this.$store.state.commonParkingLot.parkingLotList
    }
  },
  data () {
    return {
      editTextByName: "",
      editTextByCapacity: "",
      isEdited: [],
      editButtonName: []
    }
  },
  mounted() {  
    this.$store.dispatch(GET_PARKING_LOT_LIST)
      .then(() => {
        const boyLength = this.$store.state.commonParkingLot.parkingLotList.length
        for (let i = 0; i < boyLength; i++) {
          this.isEdited.push(false)
          this.editButtonName.push(TABLE_BUTTON_TYPE[0])
        }
      }).catch(() => {}) 
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
    },
    handleEdit (index, row) {
      if (this.editButtonName[index] === TABLE_BUTTON_TYPE[0]) {
        this.editTextByName = row.name
        this.editTextByCapacity = row.capacity
        this.isEdited[index] = true
        this.editButtonName.splice(index, 1, TABLE_BUTTON_TYPE[1])
      } else {
        const parkingLot = { id: row.id, name: this.editTextByName, capacity: this.editTextByCapacity }
        this.$store.dispatch(UPDATE_PARKING_LOT, parkingLot)
        this.isEdited[index] = false
        this.editButtonName.splice(index, 1, TABLE_BUTTON_TYPE[0])
        this.$message({
          type: 'success',
          message: '修改成功!'
        })
      
      }
    }
  }
}

</script>
