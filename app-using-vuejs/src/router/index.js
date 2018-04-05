import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import LoginForm from '../components/Login'
import YoutubeDashboard from '../components/YoutubeDashboard'
import Calendar from '../components/Calendar'

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
  }
]

export const router = new Router({
  mode: 'history',
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
