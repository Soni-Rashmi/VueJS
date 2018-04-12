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
    previousData: {},
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
    ],
    rows: [
      { id:2, name:'Jane', createdAt: '20-10-2000', score: 0.03343 },
      { id:3, name:'Susan', createdAt: '19-09-1993', score: 0.03343 },
      { id:4, name:'Chris', createdAt: '17-05-2018', score: 0.03343 },
      { id:5, name:'Dan', createdAt: '04-04-2017', score: 0.03343 },
      { id:6, name:'John', createdAt: '12-06-2016', score: 0.03343 },
      { id:7, name:'Jane', createdAt: '30-04-2018' },
      { id:8, name:'Susan', createdAt: '08-03-2018', score: 0.03343 },
      { id:9, name:'John', createdAt: '31-10-2017:9: 35 am',score: 0.03343 },
      { id:20, name:'Jane', createdAt: '19-10-1998', score: 0.03343 },
      { id:30, name:'Susan', createdAt: '19-09-1990', score: 0.03343 },
      { id:40, name:'Chris', createdAt: '17-05-2018', score: 0.03343 },
      { id:50, name:'Dan', createdAt: '04-04-2017', score: 0.03343 },
      { id:60, name:'John', createdAt: '12-06-2016', score: 0.03343 },
      { id:70, name:'Jane', createdAt: '30-04-2018' },
      { id:80, name:'Susan', createdAt: '08-03-2018', score: 0.03343 },
      { id:10, name:'John', createdAt: '31-10-2017:9: 35 am',score: 0.03343 },
      { id:21, name:'Jane', createdAt: '19-10-2015', score: 0.03343 },
      { id:31, name:'Susan', createdAt: '19-09-2016', score: 0.03343 },
      { id:41, name:'Chris', createdAt: '17-05-2018', score: 0.03343 },
      { id:51, name:'Dan', createdAt: '04-04-2017', score: 0.03343 },
      { id:61, name:'John', createdAt: '12-06-2016', score: 0.03343 },
      { id:71, name:'Jane', createdAt: '30-04-2018' },
      { id:81, name:'Susan', createdAt: '08-03-2018', score: 0.03343 }
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
      return state.userData = userData
    },
    createEvent (state, eventData) {
      state.events.push(eventData)
      return state.events
    },
    deleteEvent (state, payload) {
      state.events.filter((data, index) => {
        if(data.title === payload.title && data.start === payload.start && data.end === payload.end) {
          state.events.splice(index, 1)
          return state.events
        }
      })
    },
    showModal (state, isModalOpen) {
      return state.isModalOpen = isModalOpen
    },
    deleteRowData (state, rowData) {
      state.rows.filter((data, index) => {
        if(data.id === rowData.id && data.name === rowData.name && data.createdAt === rowData.createdAt && data.score === rowData.score) {
          state.rows.splice(index, 1)
          return state.rows
        }
      })
    },
    updateRowData (state, payload) {
      state.rows.filter((data, index) => {
        if(data.id === payload.updatedData.id) {
          if(payload.isUpdate) {
            state.rows.splice(index, 1, payload.updatedData)
            return state.rows
          } else {
            state.rows.push(state.rows.splice(index, 1)[0])
            return state.rows
          }
        }
      })
    },
    updateEventData (state, payload) {
      state.events.filter((data, index) => {
        if(data.title === payload.oldData.eventName && data.start === payload.oldData.eventStartDate && data.end === payload.oldData.eventEndDate) {
          if(payload.isEdit) {
            state.events.splice(index, 1, payload.updatedData)
            return state.events
          } else {
            state.events.push(state.events.splice(index, 1)[0])
            return state.events
          }
        }
      })
    }
  }
})
