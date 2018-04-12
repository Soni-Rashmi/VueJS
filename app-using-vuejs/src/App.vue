<template src='./views/app.html'></template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  data () {
    return {
      messageStr: ''
    }
  },
  onIdle() {
    if(this.$localStorage.get('isLoggedIn')) {
      this.messageStr = 'Logged Out. Try again!'
      this.$localStorage.remove('isLoggedIn');
      this.$store.commit('isUserLoggedIn', false)
      this.$router.push('/login')
    }
  },
  onActive() {
    this.messageStr = ''
  },
  components: {
    'app-header': Header
  }
}
</script>

<style>
@import './assets/app.scss'
</style>
