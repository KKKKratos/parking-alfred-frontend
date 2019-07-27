import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/router'
import ElementUI from 'element-ui'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(MintUI)


Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
