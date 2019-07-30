<template>
    <div>
      <el-dialog title="创建停车场" :visible="$store.state.isOpenCreateEmployeeDialog" :show-close="false">
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
import {
  OPEN_CREATING_DIALOG,
  CREATE_PARKINGLOT,
  GET_PARKINGLOT_LIST
} from "../../store/const-types";
   export default {
  name: "CreateParkingLot",
  data() {
    return {
      creatingParkingLotForm: {
        name: "",
        capacity: ""
      }
    };
  },
  methods: {
    clickCreatedCancel() {
      this.creatingParkingLotForm.name = "";
      this.creatingParkingLotForm.capacity = "";
      this.$store.commit(OPEN_CREATING_DIALOG);
    },
    clickCreatedSuccess() {
      this.$store
        .dispatch(CREATE_PARKINGLOT, { parkinglot: this.creatingParkingLotForm })
        .then(response => {
          this.$store.commit(OPEN_CREATING_DIALOG);
          this.creatingParkingLotForm.name = "";
          this.creatingParkingLotForm.capacity = "";
          this.$store.dispatch(GET_PARKINGLOT_LIST);
          this.$message.success("创建成功");
        })
        .catch(error => {
          this.$message.error("创建失败");
        });
    }
  }
};
</script>