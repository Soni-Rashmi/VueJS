import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import LoginForm from '../components/Login'
import YoutubeDashboard from '../components/YoutubeDashboard'
import Calendar from '../components/Calendar'
import DataTableComp from '../components/DataTableComp'
import AllCharts from '../components/AllCharts'
import GoogleMap from '../components/GoogleMap'
Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect:  '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/login',
    component: LoginForm
  },
  {
    path: '/youtube-dashboard',
    component: YoutubeDashboard,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/calendar',
    component: Calendar
  },
  {
    path: '/table',
    component: DataTableComp
  },
  {
    path: '/chart/:id',
    component: AllCharts
  },
  {
    path: '/chart',
    component: AllCharts
  },
  {
    path: '/map',
    component: GoogleMap
  }
]

export const router = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if(to.fullPath === '/chart/bar-chart'){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ x: 0, y: 0 })
        }, 300)
      })
    } else if (to.fullPath === '/chart/line-chart') {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ x: 0, y: 600 })
        }, 300)
      })
    } else if (to.fullPath === '/chart/doughnut-chart') {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ x: 0, y: 1200 })
        }, 300)
      })
    } else {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ x: 0, y: 0 })
        }, 300)
      })
    }
  },
  routes
})

router.beforeEach((to, from, next) => {
  let isAuthenticated;

  if (to.path === '/youtube-dashboard') {
    isAuthenticated = Vue.localStorage.get('isLoggedIn');
  }

  if (to.meta.requireAuth) {
    if (isAuthenticated) {
      return next()
    } else {
      return next({path: '/home'})
    }
  } else if((to.path === '/login' || to.path === '/home') &&  Vue.localStorage.get('isLoggedIn')){
    return next('/youtube-dashboard')
  }
  next()
})
