<template src='../views/datePickerComp.html'></template>

<script>
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'DatePickerComp',
  data () {
    return {
      state: {
        date: ''
      }
    }
  },
  components: {
     Datepicker
  }
}
</script>
<!-- // <style lang='scss'>
// @import '../assets/dataTable.scss'
// </style> -->
