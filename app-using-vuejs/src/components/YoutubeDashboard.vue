<template src='../views/youtubeDashboard.html'></template>

<script>
import axios from 'axios'

import Finder from './Finder'
import VideoGroup from './VideoGroup'
import VideoDetail from './VideoDetail'

export default {
  name: 'YoutubeDashboard',
  data() {
    return {
      videoData: {},
    }
  },
  components: {
    'search-bar': Finder,
    'video-group': VideoGroup,
    'video-detail': VideoDetail
  },
  computed: {
    getVideoList: function () {
      return this.$store.state.videoList
    },
    getVideoData: function () {
      return this.$store.state.selectedVideo
    }
  }
}
</script>
</script>
<style lang='scss'>
@import '../assets/youtubeDash.scss'
</style>
