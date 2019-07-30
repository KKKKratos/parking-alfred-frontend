<template>
    <div>
      <el-dialog title="创建停车场" :visible="$store.state.commonParkingLot.isOpenCreateParkingLotDialog" :show-close="false">
        <el-form label-position="left" label-width="80px" :model="creatingParkingLotForm">
          <el-form-item label="名字:">
            <el-input v-model="creatingParkingLotForm.name"></el-input>
          </el-form-item>
          <el-form-item label="大小:">
            <el-input v-model="creatingParkingLotForm.capacity"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="clickCreatedCancel">取 消</el-button>
          <el-button type="primary" @click="clickCreatedSuccess">确定创建</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
import { CREATE_PARKING_LOT, GET_PARKING_LOT_LIST, CHANGE_CREATING_LOT_DIALOG } from '../../store/const/common-parking-lot-const'
export default {
  name: 'CreateParkingLot',
  data () {
    return {
      creatingParkingLotForm: {
        name: '',
        capacity: ''
      }
    }
  },
  methods: {
    clickCreatedCancel () {
      this.creatingParkingLotForm.name = ''
      this.creatingParkingLotForm.capacity = ''
      this.$store.commit(CHANGE_CREATING_LOT_DIALOG)
    },
    clickCreatedSuccess () {
      this.$store
        .dispatch(CREATE_PARKING_LOT, { parkingLot: this.creatingParkingLotForm })
        .then(() => {
          this.$store.commit(CHANGE_CREATING_LOT_DIALOG)
          this.creatingParkingLotForm.name = ''
          this.creatingParkingLotForm.capacity = ''
          this.$store.dispatch(GET_PARKING_LOT_LIST)
          this.$message.success('创建成功')
        })
        .catch(() => {
          this.$message.error('创建失败')
        })
    }
  }
}
</script>
