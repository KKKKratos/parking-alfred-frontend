import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../page/Login'
import MobileHome from '../page/mobilePage/Home'
import WebHome from '../page/webPage/Home'
import ParkingBodyOrders from '../page/mobilePage/ParkingBodyOrders'
import CreatingOrder from '../page/mobilePage/CreatingOrder'
import GrabbingOrder from '../page/mobilePage/GrabbingOrder'
import ParkingLotList from '../page/mobilePage/ParkingLotList'
import OrderDetails from '../page/mobilePage/ParkingBoyOrderDetails'
import CustomerOrders from '../page/mobilePage/CustomerOrders'
import CustomerInfo from '../page/mobilePage/CustomerInformation'
import RoleLogin from '../components/RoleLogin'
import EmployeeManagement from '../page/webPage/EmployeeManagement'

Vue.use(VueRouter)

const routes = [
  { path: '/login', name: 'login', component: Login },
  { path: '/mobile-home',
    name: 'mobile-home',
    component: MobileHome,
    children: [
      { path: '/parking-boy-orders', name: 'parking-boy-orders', component: ParkingBodyOrders },
      { path: '/created-order', name: 'created-order', component: CreatingOrder },
      { path: '/grabbed-order', name: 'grabbed-order', component: GrabbingOrder },
      { path: '/parking-lot', name: 'parking-lot', component: ParkingLotList },
      { path: '/order-details', name: 'order-details', component: OrderDetails },
      { path: '/customer-orders', name: 'customer-orders', component: CustomerOrders },
      { path: '/customer-info', name: 'customer-info', component: CustomerInfo }
    ]
  },
  { path: '/web-home',
    name: 'web-home',
    component: WebHome,
    children: [
      { path: '/employees-management', name: 'employees-management', component: EmployeeManagement }
    ],
    redirect: '/employees-management'
  },
  { path: '/role-login/:selectedRole', name: 'role-login', component: RoleLogin }
]

const router = new VueRouter({
  routes
})

export default router
