<template>
  <div style="height: 60px">
    <mt-tabbar :value="selectedId">
      <mt-tab-item id="预约" @click.native="clickCreateOrderTab">
        <div>
          <img slot="icon" src="../../assets/img/book.png" style="height: 30px; width: 30px;"/>
        </div>
        预约
      </mt-tab-item>
      <mt-tab-item id="订单" @click.native="clickOrderTab">
        <div>
          <img slot="icon" src="../../assets/img/order.png" style="height: 30px; width: 30px;"/>
        </div>
        订单
      </mt-tab-item>
      <mt-tab-item id="用户信息" @click.native="clickMyInfoTab">
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
import { DEFAULT_MOBILE_CUSTOMER_TAB_ITEM, MOBILE_TAB_ITEM_ORDER, MOBILE_TAB_ITEM_MY_INFO } from '../../config/const-values'
export default {
  name: 'MobileCustomerFooter',
  data: function () {
    return {
    }
  },
  computed: {
    selectedId: function () {
      return this.$store.state.tabItemsSelected
    }
  },
  watch: {
    selectedId: function (newValue, oldValue) {
      this.$store.commit(CHANGE_MOBILE_TAB_ITEM, { tabItemsSelected: newValue })
    }
  },
  methods: {
    clickCreateOrderTab () {
      this.$router.push('/creating-order')
      this.$store.commit(CHANGE_MOBILE_TAB_ITEM, { tabItemsSelected: DEFAULT_MOBILE_CUSTOMER_TAB_ITEM })
    },
    clickOrderTab () {
      this.$router.push('/customer-orders')
      this.$store.commit(CHANGE_MOBILE_TAB_ITEM, { tabItemsSelected: MOBILE_TAB_ITEM_ORDER })
    },
    clickMyInfoTab () {
      this.$router.push('/customer-info')
      this.$store.commit(CHANGE_MOBILE_TAB_ITEM, { tabItemsSelected: MOBILE_TAB_ITEM_MY_INFO })
    }
  },
  mounted () {
    this.$router.push('/creating-order')
    this.$store.commit(CHANGE_MOBILE_TAB_ITEM, { tabItemsSelected: DEFAULT_MOBILE_CUSTOMER_TAB_ITEM })
  }
}
</script>

<style scoped>

</style>
