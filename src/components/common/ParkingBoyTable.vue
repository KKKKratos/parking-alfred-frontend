<template>
  <el-table
    :data="$store.state.parkingBoy.parkingBoyList" border stripe style="width: 100%" @expand-change="clickTableRow" ref="parkingBoyTable">
    <el-table-column type="expand" label="Lot">
      <template slot-scope="scope">
        <el-form label-position="left" inline class="demo-table-expand">
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
        <el-input v-if="isEdited[scope.$index]" size="small" v-model="editTextByName"></el-input>
        <span v-else>{{scope.row.name}}</span>
      </template>
    </el-table-column>
    <el-table-column prop="telephone" label="电话号码" min-width="200">
      <template slot-scope="scope">
        <el-input v-if="isEdited[scope.$index]" size="small" v-model="editTextByTelephone"></el-input>
        <span v-else>{{scope.row.telephone}}</span>
      </template>
    </el-table-column>
    <el-table-column prop="status" label="状态" min-width="150">
      <template slot-scope="scope">
        <el-select v-if="isEdited[scope.$index]" v-model="editSelectStatus" placeholder="请选择" size="small">
          <el-option
            v-for="item in statusSelected"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled">
          </el-option>
        </el-select>
        <span v-else>{{scope.row.status}}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作" min-width="150">
      <template slot-scope="scope">
        <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">{{editButtonName[scope.$index]}}</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">冻结</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { TABLE_BUTTON_TYPE } from '../../config/const-values'
import { GET_PARKING_LOT_LIST } from '../../store/const/common-parking-lot-const'
import { UPDATE_PARKING_BOY_BY_PARKING_LOTS } from '../../store/const/parking-boy-const'
export default {
  name: 'ParkingBoyTable',
  data () {
    return {
      selectedParkingLots: [],
      transferData: [],
      statusSelected: [
        { value: 1, label: '上班' },
        { value: 2, label: '迟到' },
        { value: 3, label: '下班' }
      ],
      editTextByName: '',
      editTextByTelephone: '',
      editSelectStatus: '',
      isEdited: [],
      editButtonName: [],
      currentId: 0,
      lastRow: 0
    }
  },
  mounted () {
    const boyLength = this.$store.state.parkingBoy.parkingBoyList.length
    for (let i = 0; i < boyLength; i++) {
      this.isEdited.push(false)
      this.editButtonName.push(TABLE_BUTTON_TYPE[0])
    }
  },
  methods: {
    handleEdit (index, row) {
      if (this.editButtonName[index] === TABLE_BUTTON_TYPE[0]) {
        this.editTextByName = row.name
        this.editTextByTelephone = row.telephone
        this.isEdited[index] = true
        this.editButtonName.splice(index, 1, TABLE_BUTTON_TYPE[1])
      } else {
        this.isEdited[index] = false
        this.editButtonName.splice(index, 1, TABLE_BUTTON_TYPE[0])
      }
    },
    handleDelete (index, row) {

    },
    handleChange (value, direction, movedKeys) {
      this.$store.dispatch(UPDATE_PARKING_BOY_BY_PARKING_LOTS, { id: this.currentId, parkingLotIdList: value })
    },
    clickTableRow (row, column, event) {
      this.$refs.parkingBoyTable.toggleRowExpansion(this.lastRow, false)
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
