<template src='../views/googleMap.html'></template>

<script>
export default {
  name: 'GoogleMap',
  data() {
      return {
        // default to Montreal to keep it simple
        // change this to whatever makes sense
        center: { lat: 22.726, lng: 75.882 },
        markers: [],
        places: [],
        currentPlace: null
      };
    },
    mounted() {
      this.geolocate()
    },
    methods: {
      setPlace(place) {
        this.currentPlace = place
      },
      addMarker() {
        if (this.currentPlace) {
          const marker = {
            lat: this.currentPlace.geometry.location.lat(),
            lng: this.currentPlace.geometry.location.lng()
          }
          this.markers.push({ position: marker })
          this.places.push(this.currentPlace)
          this.center = marker
          this.currentPlace = null
        }
      },
      geolocate: function() {
        navigator.geolocation.getCurrentPosition(position => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        });
      }
    }
  }
</script>
<style lang="scss">
  @import '../assets/googleMap.scss'
</style>
