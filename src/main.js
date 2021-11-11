import App from './App.vue'
import Vue from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'


Vue.config.productionTip = false;

import Router from 'vue-router'
import router from './router/index'
import axios from "axios"
import papaparse from "papaparse"
import './styles/style.css'

import { BPagination } from 'bootstrap-vue'
Vue.component('b-pagination', BPagination)

import jQuery from 'jquery'
window.$ = window.jQuery = jQuery

Vue.prototype.$axios = axios
Vue.prototype.$papa = papaparse
Vue.use(Router)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
