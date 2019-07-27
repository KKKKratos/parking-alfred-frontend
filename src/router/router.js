import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../page/Login'
import MobileHome from '../page/mobilePage/Home'
import WebHome from '../page/webPage/Home'
import CustomerOrder from '../page/mobilePage/CustomerOrder'
import CreatedOrder from '../page/mobilePage/CreatedOrder'
import GrabbedOrder from '../page/mobilePage/GrabbedOrder'
import ParkingLotList from '../page/mobilePage/ParkingLotList'

Vue.use(VueRouter)

const routes = [
  { path: '/login', name: 'login', component: Login },
  { path: '/mobile-home',
    name: 'mobile-home',
    component: MobileHome,
    children: [
      { path: '/customer-order', name: 'customer-order', component: CustomerOrder },
      { path: '/created-order', name: 'created-order', component: CreatedOrder },
      { path: '/grabbed-order', name: 'grabbed-order', component: GrabbedOrder }      
    ]
  },
  { path: '/web-home', name: 'web-home', component: WebHome },
  { path: '/prking-lot', name: 'prking-lot', component: ParkingLotList }
]

const router = new VueRouter({
  routes
})

export default router
