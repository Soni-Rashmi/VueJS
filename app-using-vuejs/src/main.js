import Vue from 'vue'
import VeeValidate from 'vee-validate'
import VueLocalStorage from 'vue-localstorage';
import GoogleAuth from 'vue-google-auth'
import FullCalendar from 'vue-full-calendar'

import App from './App'
import { store } from './store'
import {router} from './router'

Vue.use(VueLocalStorage)
Vue.use(VeeValidate)
Vue.use(FullCalendar)

Vue.use(GoogleAuth, {client_id: '173355314889-rhdhjmbd9l24gr744rpje1non3gaclfm.apps.googleusercontent.com'})

Vue.googleAuth().load()
// Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
