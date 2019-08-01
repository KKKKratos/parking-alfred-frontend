<template>
  <div class="parking-income-manage-div">
    <div class="header-div">
      <i class="el-icon-money" style="float: left"></i>
      <span>总收益：{{income}}</span>
    </div>
    <div style="text-align: left; margin-top: 20px">
      <el-card style="margin-bottom: 20px">
        <div slot="header" class="clearfix">
          <span>本月收益变化</span>
        </div>
        <div>
          <ProfitHistogram></ProfitHistogram>
        </div>
      </el-card>
      <el-card>
        <div slot="header" class="clearfix">
          <span>优惠券发放情况</span>
        </div>
        <div>
          <CouponTypePieChart></CouponTypePieChart>
          <CouponPieChart></CouponPieChart>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import CouponPieChart from '../../components/common/CouponPieChart'
import CouponTypePieChart from '../../components/common/CouponTypePieChart'
import ProfitHistogram from '../../components/common/ProfitHistogram'
export default {
  name: 'ParkingIncomeManagement',
  components: { CouponPieChart, CouponTypePieChart, ProfitHistogram },
  data () {
    return {
      income: 126450
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .parking-income-manage-div {
    height: 90%;
    width: 100%;
    background-color: white;
    margin-top: 20px;
  }
  .header-div {
    padding-top: 20px;
    padding-bottom: 20px;
    margin: 0 auto;
    border: 1px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 30px; width: 20%;
    text-align: left;
    padding-left: 100px;
  }
</style>
