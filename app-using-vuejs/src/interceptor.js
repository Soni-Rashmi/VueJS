import axios from 'axios'

export default function setup () {
  axios.interceptors.request.use(function (config) {
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiVTBERFlVTlNEIiwic3RhdHVzIjoiYWRtaW4iLCJpYXQiOjE1MjMwMTAzNTIsImV4cCI6MTUyMzAxMzk1Mn0.YJ2P54BPR3-2AZ0x0iU4TfrTSp5Kt6dd2gZJmo5-IW8"
    if (token) {
      config.headers['token'] = token
    }
    config.headers['content-type'] = 'application/json'
    return config
  }, function (error) {
    return Promise.reject(error)
  })

  axios.interceptors.response.use(function (response) {
    return response
  }, function (error) {
    return Promise.reject(error)
  })
}
