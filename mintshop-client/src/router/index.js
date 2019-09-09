import Vue from 'vue'
import Router from 'vue-router'

import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'

// import MSite from '../pages/MSite/MSite.vue'
// import Search from '../pages/Search/Search.vue'
// import Order from '../pages/Order/Order.vue'
// import Profile from '../pages/Profile/Profile.vue'
// 路由组件懒加载
const MSite = () => import('../pages/Msite/Msite.vue')
const Search = () => import('../pages/Search/Search.vue')
const Order = () => import('../pages/Order/Order.vue')
const Profile = () => import('../pages/Profile/Profile.vue')
const confirmOrder = () => import('../pages/confirmOrder/confirmOrder.vue')


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/msite',
      component: MSite,
      // 此时的Msite等都是返回路由组件的函数，只有请求对应的路由路径时(第一次)才会执行此函数并加载路由组件
      // 标识此路由是否显示FooterGuide
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/confirmOrder',
      component: confirmOrder,
      meta: {
        showFooter: false
      }
    },
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/shop',
      component: Shop,
      children: [{
        path: '/shop/goods',
        component: ShopGoods
      },
      {
        path: '/shop/ratings',
        component: ShopRatings
      },
      {
        path: '/shop/info',
        component: ShopInfo
      },
      {
        path: '',
        redirect: '/shop/goods'
      }]
    }
  ]
})
