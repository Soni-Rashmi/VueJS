<template src='../views/videoGroup.html'></template>

<script>

export default {
  name: 'VideoGroup',
  props: ['videoList'],
  methods: {
    getVideoDetail: function (videoDetail) {
      let vId, vTitle
      vTitle = videoDetail.snippet.title
      vId = videoDetail.id.videoId
      this.$store.commit('setVideo', {vId, vTitle})
    }
  },
  computed: {
    selectedVid: function () {
      return this.$store.state.selectedVideo.vId
    }
  }
}
</script>
<style lang='scss'>
@import '../assets/videoGroup.scss'
</style>
