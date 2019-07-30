<template>
  <div style="height: 60px; background-color: white; text-align: left">
    <div class="create-button-div">
      <el-button v-if="$route.name === 'employees-management' || 'parking-lots-management'" type="primary" size="small" style="width: 80px" @click="clickCreating">新建</el-button>
    </div>
    <ManagementSearch></ManagementSearch>
  </div>
</template>

<script>
import ManagementSearch from '../common/ManagementSearch'
import { CHANGE_CREATING_EMPLOYEE_DIALOG } from '../../store/const/employee-const'
import { CHANGE_CREATING_LOT_DIALOG } from '../../store/const/common-parking-lot-const'
export default {
  name: 'CreateButton',
  components: { ManagementSearch },
  methods: {
    clickCreating () {
      console.log(this.$route.name)
      this.$route.name === 'employees-management' ? this.$store.commit(CHANGE_CREATING_EMPLOYEE_DIALOG) : this.$store.commit(CHANGE_CREATING_LOT_DIALOG)
      
    }
  }
}
</script>

<style scoped>
.create-button-div {
  float: left;
  width: 40%;
  padding-top: 15px;
  margin-left: 20px;
}
</style>
