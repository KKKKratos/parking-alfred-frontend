<template>
    <div id ='item'>
        <div id = 'parkingBoyOrders' style="text-align: left;">
            <mt-cell title="粤C17278K" label="(香洲区快乐停车场2号)8:00" >
                <el-button v-if="!isSure" type="primary" size='mini' @click="toMakeSure">待确认</el-button>
                <img style='float:right' type="info" slot="icon" src="../../assets/img/tick.png" width="40" height="40" v-else/>
            </mt-cell>
        </div>
    </div>
</template>

<script>
export default {
  name: 'parkingBoyOrders',
  data () {
    return {
      isSure: false
    }
  },
  methods: {
    toMakeSure: function () {
      this.isSure = true
    }
  }
}
</script>

<style scoped>

</style>
