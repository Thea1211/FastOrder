// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import {Button} from 'mint-ui'
Vue.component(Button.name, Button) // <mt-button>
import store from './store'
// 引入VueLazyload插件
import VueLazyload from 'vue-lazyload'
// 将一张loading图片加载进来
import loading from './common/imgs/loading.gif'
// 加载mockServer
import './mock/mockServer.js'

Vue.config.productionTip = false
Vue.use(VueLazyload, { // 内部自定义一个指令lazy
  loading
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
