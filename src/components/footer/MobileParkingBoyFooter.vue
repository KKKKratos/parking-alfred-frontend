<template>
    <div style="height: 60px">
      <mt-tabbar v-model="selectedId">
        <mt-tab-item id="抢单">
          <el-badge :value="grabOrderValue" :hidden="isGrabOrderHidden">
            <div>
              <img slot="icon" src="../../assets/img/book.png" style="height: 30px; width: 30px;"/>
            </div>
            抢单
          </el-badge>
        </mt-tab-item>
        <mt-tab-item id="订单">
          <el-badge :value="orderValue" :hidden="isOrderHidden">
            <div>
              <img slot="icon" src="../../assets/img/order.png" style="height: 30px; width: 30px;"/>
            </div>
            订单
          </el-badge>
        </mt-tab-item>
        <mt-tab-item id="我的">
          <div>
            <img slot="icon" src="../../assets/img/user.png" style="height: 30px; width: 30px;"/>
          </div>
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
</template>

<script>
import { CHANGE_MOBILE_TAB_ITEM } from '../../store/const-types'
import { DEFAULT_MOBILE_BOY_TAB_ITEM, MOBILE_TAB_ITEM_ORDER, MOBILE_TAB_ITEM_MY_INFO } from '../../config/const-values'
export default {
  name: 'MobileFooter',
  data: function () {
    return {
      selectedId: DEFAULT_MOBILE_BOY_TAB_ITEM,
      grabOrderValue: 0,
      isGrabOrderHidden: true,
      orderValue: 0,
      isOrderHidden: true
    }
  },
  watch: {
    selectedId: function (newValue, oldValue) {
      if (newValue === DEFAULT_MOBILE_BOY_TAB_ITEM) {
        this.$router.push('/grabbed-order')
      } else if (newValue === MOBILE_TAB_ITEM_ORDER) {
        this.$router.push('/parking-boy-orders')
      } else {
        this.$router.push('/customer-info')
      }
      this.$store.commit(CHANGE_MOBILE_TAB_ITEM, { tabItemsSelected: newValue })
    },
    grabOrderValue: function (newValue) {
      if (newValue > 0) {
        this.isGrabOrderHidden = false
      }
    },
    orderValue: function (newValue) {
      if (newValue > 0) {
        this.isOrderHidden = false
      }
    }
  },
  mounted () {
    this.$router.push('/grabbed-order')
    this.$store.commit(CHANGE_MOBILE_TAB_ITEM, { tabItemsSelected: DEFAULT_MOBILE_BOY_TAB_ITEM })
  }
}
</script>

<style scoped>

</style>
