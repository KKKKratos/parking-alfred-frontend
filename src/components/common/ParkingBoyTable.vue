<template>
  <el-table
    :data="parkingBoyList" border stripe style="width: 100%">
    <el-table-column type="expand" label="Lot">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
<!--          <el-form-item label="商品名称">-->
<!--            <span>{{ props.row.name }}</span>-->
<!--          </el-form-item>-->
          <div style="text-align: center">
            <el-transfer
              style="text-align: left; display: inline-block"
              v-model="parkingLots"
              filterable
              :left-default-checked="[]"
              :right-default-checked="[]"
              :titles="['可选停车场', '管理的停车场']"
              :format="{noChecked: '${total}',hasChecked: '${checked}/${total}'}"
              @change="handleChange"
              :data="data">
              <span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
              <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
              <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
            </el-transfer>
          </div>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column prop="id" label="ID" min-width="100"></el-table-column>
    <el-table-column prop="name" label="姓名" min-width="150"></el-table-column>
    <el-table-column prop="telephone" label="电话号码" min-width="200"></el-table-column>
    <el-table-column prop="status" label="状态" min-width="150"></el-table-column>
    <el-table-column label="操作" min-width="150">
      <template slot-scope="scope">
        <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">冻结</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'ParkingBoyTable',
  data () {
    return {
      parkingBoyList: [{
        id: 1,
        name: '2',
        telephone: '3',
        status: '4'
      }],
      parkingLots: [],
      data: [
        { key: '1', label: '停车场A', disabled: false },
        { key: '2', label: '停车场B', disabled: false },
        { key: '3', label: '停车场C', disabled: false }
      ]
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    handleChange (value, direction, movedKeys) {
      console.log(value, direction, movedKeys)
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
