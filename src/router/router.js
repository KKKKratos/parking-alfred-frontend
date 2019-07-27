import Vue from 'vue'
import VueRouter from 'vue-router'
import MobileHome from '../page/mobilePage/Home'
import WebHome from '../page/webPage/Home'
import CustomerOrder from '../component/CustomerOrder'

Vue.use(VueRouter)

const routes = [
  { path: '/mobile-home', name: 'mobile-home', component: MobileHome },
  { path: '/web-home', name: 'web-home', component: WebHome },
  { path: '/customerOrder', name: 'customerOrder', component: CustomerOrder }
]

const router = new VueRouter({
  routes
})

export default router
