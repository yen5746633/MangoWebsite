import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/sell',
    name: 'Sell',
    component: () => import('../views/Sell.vue'),
  },
  {
    path: '/backstagelogin/backstagelist',
    name: 'Backstage',
    component: () => import('../views/BackstageList.vue'),
  },
  {
    path: '/backstagelogin',
    name: 'BackstageLogin',
    component: () => import('../views/BackstageLogin.vue'),
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router

