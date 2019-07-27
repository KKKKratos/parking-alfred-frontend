import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../page/Login'
import MobileHome from '../page/mobilePage/Home'
import WebHome from '../page/webPage/Home'
import CustomerOrder from '../page/mobilePage/CustomerOrder'
import CreatingOrder from '../page/mobilePage/CreatingOrder'
import GrabbingOrder from '../page/mobilePage/GrabbingOrder'

Vue.use(VueRouter)

const routes = [
  { path: '/login', name: 'login', component: Login },
  { path: '/mobile-home',
    name: 'mobile-home',
    component: MobileHome,
    children: [
      { path: '/customer-order', name: 'customer-order', component: CustomerOrder },
      { path: '/created-order', name: 'created-order', component: CreatingOrder },
      { path: '/grabbed-order', name: 'grabbed-order', component: GrabbingOrder }
    ]
  },
  { path: '/web-home', name: 'web-home', component: WebHome }
]

const router = new VueRouter({  
  routes
})

export default router 
