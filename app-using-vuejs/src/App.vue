<template src='./views/app.html'></template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    'app-header': Header
  }
}
</script>

<style>
@import './assets/app.scss'
</style>
