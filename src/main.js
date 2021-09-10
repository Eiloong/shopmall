import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/common/toast'

import Less from 'less'
import VueLazyLoad from 'vue-lazyload'

import FastClick from 'fastclick'

Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

FastClick.attach(document.body)

Vue.use(Less)
Vue.use(toast)
Vue.use( VueLazyLoad, { //选项对象
  loading: require('assets/img/common/load.jpg'), //图片加载的时候显示该图片
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
