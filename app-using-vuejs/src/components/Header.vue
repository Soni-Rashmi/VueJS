<template src='../views/header.html'></template>

<script>
export default {
  name: 'Header',
  mounted() {
    this.$store.commit('isUserLoggedIn', (this.$localStorage.get('isLoggedIn') ? this.$localStorage.get('isLoggedIn') : '' ))
  },
  methods: {
    logout: function () {
      this.$localStorage.remove('isLoggedIn');
      this.$store.commit('isUserLoggedIn', false)
      this.$router.push('/login')
    }
  },
  computed: {
    isLoggedInUser: function() {
      return this.$store.state.isLoggedIn
    },
    getUser: function () {
      return this.$store.state.userData
    }
  }
}
</script>
<style lang ='scss'>
@import '../assets/header.scss'
</style>
