import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../page/Login'
import MobileHome from '../page/mobilePage/Home'
import WebHome from '../page/webPage/Home'
import CustomerOrder from '../component/CustomerOrder'
import ParkingBoyLogin from '../components/ParkingBoyLogin'

Vue.use(VueRouter)

const routes = [
  { path: '/login', name: 'login', component: Login },
  { path: '/mobile-home', name: 'mobile-home', component: MobileHome },
  { path: '/web-home', name: 'web-home', component: WebHome },
  { path: '/order',name:'order',component:Order},
  { path: '/customerOrder', name: 'customerOrder', component: CustomerOrder }
  { path: '/parkingboylogin',name:'parkingboylogin',component:ParkingBoyLogin}
]

const router = new VueRouter({
  routes
})

export default router
