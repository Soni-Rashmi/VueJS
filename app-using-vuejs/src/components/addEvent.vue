<template src='../views/addEvent.html'></template>

<script>
import Vue from 'vue'
import { Validator, ErrorBag } from 'vee-validate'
import Datepicker from 'vuejs-datepicker'
import moment from 'moment'

Validator.extend('eventEndDate', {
  getMessage: (field) => {
    return 'required'
  },
  validate: (value) => {
    if(value) {
      return true
    } else {
      return false
    }
  }
});

export default {
  name: 'AddEvent',
  data () {
    return {
      validClass: '',
      eventName: '',
      eventStartDate: '',
      eventEndDate: '',
      highlighted: {
        dates: [new Date()]
      }
    }
  },
  methods: {
    submitForm () {
      this.$validator.validateAll().then((result) => {
        let payload = {
          'title': this.eventName,
          'start': moment(new Date(this.eventStartDate)).format('YYYY-MM-DD'),
          'end': moment(moment(new Date(this.eventEndDate))).add(1, 'days').format('YYYY-MM-DD'),
          'editable': true
        }
        if (result) {
          this.$store.commit('showModal', false)
          this.$store.commit('createEvent', payload)
          return;
        }
      })
    },
    pickerClosed () {
      if(!this.eventEndDate) {
         this.validClass += "has-error"
      }
    }
  },
  components: {
    Datepicker
  }
}
</script>
<style lang='scss'>
@import '../assets/addEvent.scss'
</style>
