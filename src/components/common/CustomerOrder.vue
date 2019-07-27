<template>
    <div id ='item'>
        <div id = 'customerOrders'>
            <el-tag :type="isSureCss">粤C17278K(香洲区快乐停车场2号)&nbsp;8:00 </el-tag>
            <el-button v-if="!isSure" type="primary" size='mini' @click="toMakeSure">待确认</el-button>
            <el-tag type="info" v-else>已完成</el-tag>
        </div>
    </div>
</template>
<script>
export default {
   data() {
       return {
            isSure:false,
            isSureCss:'none'
       }
   },
   methods:{
       toMakeSure:function(){
           console.log(this.isSure)
           this.isSure=true;
           this.isSureCss='info';
       }
   }
}
</script>

