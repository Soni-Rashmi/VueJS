import Vue from 'vue'
import VeeValidate from 'vee-validate'
import VueLocalStorage from 'vue-localstorage'
import GoogleAuth from 'vue-google-auth'
import FullCalendar from 'vue-full-calendar'
import VueGoodTable from 'vue-good-table'
import IdleVue from 'idle-vue'
import VuejsDialog from "vuejs-dialog"
import * as VueGoogleMaps from 'vue2-google-maps'

import 'vue-good-table/dist/vue-good-table.css'
import 'fullcalendar/dist/fullcalendar.css'

import App from './App'
import { store } from './store'
import { router } from './router'
const eventsHub = new Vue()
Vue.use(IdleVue, {eventEmitter: eventsHub,
  idleTime: 100000})

Vue.use(VueLocalStorage)
Vue.use(VeeValidate)
Vue.use(FullCalendar)
Vue.use(VueGoodTable)
Vue.use(GoogleAuth, {client_id: '173355314889-jjp19dl90fsj5tr4gnfja8tgbs30orvi.apps.googleusercontent.com'})
Vue.googleAuth().load()

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAvEdGohm1AwwcV_QYIIBUjfR1heSOtDKg',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})

Vue.use(VuejsDialog)
// Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

//173355314889-jjp19dl90fsj5tr4gnfja8tgbs30orvi.apps.googleusercontent.com : heroku

//173355314889-rhdhjmbd9l24gr744rpje1non3gaclfm.apps.googleusercontent.com: localhost
