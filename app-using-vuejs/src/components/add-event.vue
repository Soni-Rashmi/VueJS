<template src='../views/add-event.html'></template>

<script>
import Vue from 'vue'
import { Validator, ErrorBag } from 'vee-validate'
import moment from 'moment'
export default {
  name: 'AddEvent',
  data () {
    return {
      eventName: '',
      eventStartDate: '',
      eventEndDate: ''
    }
  },
  methods: {
    submitForm () {
      this.$validator.validateAll().then((result) => {
        console.log("end", this.eventEndDate);
        let payload = {
          'title': this.eventName,
          'start': this.eventStartDate,
          'end': moment(moment(new Date(this.eventEndDate))).add(1, 'days').format('YYYY-MM-DD'),
          'editable': true
        }
        if (result) {
          this.$store.commit('showModal', false)
          this.$store.commit('createEvent', payload)
          return;
        }
      })
    }
  }
}
</script>
<style lang='scss'>
// @import '../assets/login.scss'
</style>
