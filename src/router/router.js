import Vue from 'vue'
import VueRouter from 'vue-router'
import MobileHome from '../page/mobilePage/Home'
import WebHome from '../page/webPage/Home'
import Order from '../components/Order'
import ParkingBoyLogin from '../components/ParkingBoyLogin'

Vue.use(VueRouter)

const routes = [
  { path: '/mobile-home', name: 'mobile-home', component: MobileHome },
  { path: '/web-home', name: 'web-home', component: WebHome },
  { path: '/order',name:'order',component:Order},
  { path: '/parkingboylogin',name:'parkingboylogin',component:ParkingBoyLogin}
]

const router = new VueRouter({
  routes
})

export default router
