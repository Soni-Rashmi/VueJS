<template src='../views/videoDetail.html'></template>

<script>
export default {
  name: 'VideoDetail',
  props: ['videoDetail'],
  data() {
    return {
      url: ''
    }
  },
  computed: {
    getVideoUrl: function () {
      let base = 'https://www.youtube.com/embed/'
      this.url = base + this.videoDetail.vId
      return this.url
    },
    getVideoTitle: function () {
      return this.videoDetail.vTitle
    }
  }
}
</script>
<style lang='scss'>
@import '../assets/videoDetail.scss'
</style>
