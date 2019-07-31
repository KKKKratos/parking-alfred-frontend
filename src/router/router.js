import Vue from 'vue'
import VueRouter from 'vue-router'
import MobileHome from '../page/mobilePage/Home'
import WebHome from '../page/webPage/Home'
import ParkingBodyOrders from '../page/mobilePage/ParkingBodyOrders'
import CreatingOrder from '../page/mobilePage/CreatingOrder'
import GrabbingOrder from '../page/mobilePage/GrabbingOrder'
import ParkingLotList from '../page/mobilePage/ParkingLotList'
import OrderDetails from '../page/mobilePage/ParkingBoyOrderDetails'
import CustomerOrders from '../page/mobilePage/CustomerOrders'
import CustomerInfo from '../page/mobilePage/CustomerInformation'
import RoleLogin from '../page/RoleLogin'
import ParkingLotsManagement from '../page/webPage/ParkingLotsManagement'
import EmployeeManagement from '../page/webPage/EmployeeManagement'
import ParkingBoyManagement from '../page/webPage/ParkingBoyManagement'
import CustomerOrderDetails from '../page/mobilePage/CustomerOrderDetails'
import ParkingLotDashBoard from '../page/webPage/ParkingLotDashBoard'
import CustomerRegist from '../page/CustomerRegist'

Vue.use(VueRouter)

const routes = [
  { path: '/mobile-home',
    name: 'mobile-home',
    component: MobileHome,
    children: [
      { path: '/parking-boy-orders', name: 'parking-boy-orders', component: ParkingBodyOrders },
      { path: '/creating-order', name: 'creating-order', component: CreatingOrder },
      { path: '/grabbing-order', name: 'grabbing-order', component: GrabbingOrder },
      { path: '/parking-lot', name: 'parking-lot', component: ParkingLotList },
      { path: '/order-details', name: 'order-details', component: OrderDetails },
      { path: '/customer-orders', name: 'customer-orders', component: CustomerOrders },
      { path: '/customer-info', name: 'customer-info', component: CustomerInfo },
      { path: '/customer-order-details', name: 'customer-order-details', component: CustomerOrderDetails }
    ]
  },
  { path: '/web-home',
    name: 'web-home',
    component: WebHome,
    children: [
      { path: '/employees-management', name: 'employees-management', component: EmployeeManagement },
      { path: '/parking-boys-management', name: 'parking-boys-management', component: ParkingBoyManagement },
      { path: '/parking-lots-management', name: 'parking-lots-management', component: ParkingLotsManagement },
      { path: '/parking-lot-dashboard', name: 'parking-lot-dashboard', component: ParkingLotDashBoard }
    ],
    redirect: '/employees-management'
  },
  { path: '/role-login', name: 'role-login', component: RoleLogin },
  { path: '/customer-regist', name: 'customer-regist', component: CustomerRegist }
]

const router = new VueRouter({
  routes
})

export default router
