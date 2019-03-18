// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Mint from 'mint-ui';
require('@/config/rem')
import store from '@/store/index'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import 'mint-ui/lib/style.css'

Vue.use(Mint);

require('@/mock/ranklist.mock.js')

require('@/styles/index.scss')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
