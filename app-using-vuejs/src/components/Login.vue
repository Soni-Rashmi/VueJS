<template src='../views/login.html'></template>

<script>
import Vue from 'vue'
import { Validator, ErrorBag } from 'vee-validate'
import facebookLogin from 'facebook-login-vuejs'

const customMsg = {
  custom: {
    email: {
      required: 'Your email is empty'
    },
    pwd: {
      required: 'Your password is empty'
    }
  }
};

Validator.extend('email', {
  getMessage: (field) => {
    return 'Email must be in a valid format'
  },
  validate: (value) => {
    return (/^[a-zA-Z0-9._-]+@[a-zA-Z]+\.com$/i.test(value))
  }
});

export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      pwd: '',
      gender: null,
      terms: '',
      userData: {}
    }
  },
  methods: {
    submitForm: function () {
      this.$validator.localize('en', customMsg);
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$localStorage.set('isLoggedIn', true)
          this.$store.commit('isUserLoggedIn', true)
          this.$router.push('/youtube-dashboard')
          return;
        }
      })
    },
    getUserData: function (data) {
      let self = this
      console.log(data);
      data.FB.api('/me', 'get', {fields: 'name, email, picture, cover'}, function(response) {
        console.log(response);
        self.userData = {
          'userName': response.name,
          'userEmail': response.email,
          'profileImg': response.picture.data.url
        }
        self.$localStorage.set('isLoggedIn', true)
        self.$store.commit('userInfo', self.userData)
        self.$store.commit('isUserLoggedIn', true)
        self.$router.push('/youtube-dashboard')
      });
      return data
    },
    onLogout: function () {
      return {}
    },
    signIn: function () {
      Vue.googleAuth().directAccess()
      Vue.googleAuth().signIn(this.onSignInSuccess, this.onSignInError)
     },
     onSignInSuccess: function (authorizationData) {
       this.userData = {
         'userName': authorizationData.w3.ig,
         'userEmail': authorizationData.w3.U3,
         'profileImg': authorizationData.w3.Paa
       }
       this.$localStorage.set('isLoggedIn', true)
       this.$store.commit('userInfo', this.userData)
       this.$store.commit('isUserLoggedIn', true)
       this.$router.push('/youtube-dashboard')
     },
     onSignInError: function(error) {
       console.log(error)
     }
  },
  components: {
    'fb-login': facebookLogin
  }
}
</script>
<style lang='scss'>
@import '../assets/login.scss'
</style>
