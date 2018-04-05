<template src='../views/finder.html'></template>

<script>

export default {
  name: 'Finder',
  data() {
    return {
      searchTerm: ''
    }
  },
  methods: {
    handleEnterKeyPress: function (e) {
      this.searchTerm = e.target.value
      this.$store.commit('getVideoList', this.searchTerm)
    }
  },
  mounted () {
    this.$store.commit('getVideoList', this.searchTerm)
  }
}
</script>
<style lang='scss'>
@import '../assets/finder.scss'
</style>
