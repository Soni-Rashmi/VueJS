import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    isLoggedIn: false,
    videoList: [],
    selectedVideo: {},
    userData: {},
    isModalOpen: false,
    events: [
      {
        'title'  : 'event1',
        'start'  : '2018-04-01',
        'end'    : '2018-04-02',
        'editable': true
      },
      {
        'title'  : 'event2',
        'start'  : '2018-04-07',
        'end'    : '2018-04-11',
        'editable': true
      },
      {
        'title'  : 'event3',
        'start'  : '2018-04-04',
        'end'    : '2018-04-06',
        'editable': true
      },
    ]
  },
  mutations: {
    isUserLoggedIn (state, data) {
      return state.isLoggedIn = data
    },
    getVideoList (state, payload) {
      let url = 'https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=12&key=AIzaSyBdyrXOlVP6BFWV2l5abQ4Wm1FGYxU_Opo&q='
      let textToSearch = 'React JS'
      if(payload) {
        textToSearch = payload
      }
      axios.get(`${url}${textToSearch}`).then(function (res) {
        state.videoList = []
        res.data.items.map(function(item) {
           state.videoList.push(item)
        })
        state.selectedVideo = {
          vId: state.videoList[0].id.videoId,
          vTitle: state.videoList[0].snippet.title
        }
        return state.videoList
      }).catch(function (error) { })
    },
    setVideo (state, payload) {
      state.selectedVideo = {
        vId: payload.vId,
        vTitle: payload.vTitle
      }
      return state.selectedVideo
    },
    userInfo (state, userData) {
      console.log(userData)
      return state.userData = userData
    },
    createEvent (state, eventData) {
      state.events.push(eventData)
      return state.events
    },
    deleteEvent (state, payload) {
      //
      console.log('payload', payload);
      console.log(state.events);
      state.events.filter((data, index) => {
        if(data.title === payload.title && data.start === payload.start && data.end === payload.end) {
          state.events.splice(index, 1)
          console.log(state.events);
          return state.events
        }
      })
      // console.log(state.events.indexOf(payload));
    },
    showModal (state, isModalOpen) {
      return state.isModalOpen = isModalOpen
    }
  }
})
