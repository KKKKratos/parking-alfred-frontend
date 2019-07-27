<template>
  <div>
    <mt-tabbar v-model="selectedId">
      <mt-tab-item id="预约">
        <div>
          <img slot="icon" src="../../assets/img/book.png" style="height: 30px; width: 30px;"/>
        </div>
        预约
      </mt-tab-item>
      <mt-tab-item id="订单">
        <div>
          <img slot="icon" src="../../assets/img/order.png" style="height: 30px; width: 30px;"/>
        </div>
        订单
      </mt-tab-item>
      <mt-tab-item id="用户信息">
        <div>
          <img slot="icon" src="../../assets/img/user.png" style="height: 30px; width: 30px;"/>
        </div>
        用户信息
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import { CHANGE_MOBILE_TAB_ITEM } from '../../store/const-types'
import { DEFAULT_MOBILE_CUSTOMER_TAB_ITEM, MOBILE_TAB_ITEM_ORDER } from '../../config/const-values'
export default {
  name: 'MobileCustomerFooter',
  data: function () {
    return {
      selectedId: DEFAULT_MOBILE_CUSTOMER_TAB_ITEM
    }
  },
  watch: {
    selectedId: function (newValue, oldValue) {
      if (newValue === DEFAULT_MOBILE_CUSTOMER_TAB_ITEM) {
        this.$router.push('/created-order')
      } else if (newValue === MOBILE_TAB_ITEM_ORDER) {
        this.$router.push('/customer-order')
      }
      this.$store.commit(CHANGE_MOBILE_TAB_ITEM, { tabItemsSelected: newValue })
    }
  },
  mounted () {
    this.$router.push('/created-order')
    this.$store.commit(CHANGE_MOBILE_TAB_ITEM, { tabItemsSelected: DEFAULT_MOBILE_CUSTOMER_TAB_ITEM })
  }
}
</script>

<style scoped>

</style>
