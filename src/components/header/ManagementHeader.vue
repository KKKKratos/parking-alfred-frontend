<template>
  <div style="height: 60px; background-color: white; text-align: left">
    <div class="create-button-div">
      <el-button v-if="isCreateButtonDisable" type="primary" size="small" style="width: 80px" @click="clickCreating">新建</el-button>
    </div>
    <ManagementSearch :selectedOptions="selectedOptions" :search="search"></ManagementSearch>
  </div>
</template>

<script>
import ManagementSearch from '../common/ManagementSearch'
import { CHANGE_CREATING_EMPLOYEE_DIALOG } from '../../store/const/employee-const'
import { CHANGE_CREATING_LOT_DIALOG } from '../../store/const/common-parking-lot-const'
export default {
  name: 'CreateButton',
  components: { ManagementSearch },
  props: {
    selectedOptions: Array,
    search: Function
  },
  methods: {
    clickCreating () {
      if (this.$route.name === 'employees-management') {
        this.$store.commit(CHANGE_CREATING_EMPLOYEE_DIALOG)
      } else if (this.$route.name === 'parking-lots-management') {
        this.$store.commit(CHANGE_CREATING_LOT_DIALOG)
      }
    }
  },
  computed: {
    isCreateButtonDisable: function () {
      return this.$route.name === 'employees-management' || this.$route.name === 'parking-lots-management'
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
