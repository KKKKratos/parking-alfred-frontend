<template>
    <div>
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
import { DEFAULT_MOBILE_BOY_TAB_ITEM } from '../../config/const-values'
export default {
  name: 'MobileFooter',
  data: function () {
    return {
      selectedId: '抢单',
      grabOrderValue: 0,
      isGrabOrderHidden: true,
      orderValue: 0,
      isOrderHidden: true
    }
  },
  watch: {
    selectedId: function (newValue, oldValue) {
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
    this.$store.commit(CHANGE_MOBILE_TAB_ITEM, { tabItemsSelected: DEFAULT_MOBILE_BOY_TAB_ITEM })
  }
}
</script>

<style scoped>

</style>
