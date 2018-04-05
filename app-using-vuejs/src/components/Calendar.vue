<template src='../views/calendar.html'></template>

<script>
import Modal from './modal.vue'
import AddEvent from './add-event.vue'

export default {
  data() {
    return {
      eventName: {},
      config: {
        defaultView: 'month'
      },
      eventSources: []
    }
  },
  name: 'Calendar',
  components: {
    'app-modal': Modal,
    'add-event': AddEvent
  },
  methods: {
    eventSelected(event) {
      this.eventDrop(event)
    },
    eventCreated(event) {
      this.openModal()
    },
    openModal () {
      this.$store.commit('showModal', true)
    },
    closeModal () {
      this.$store.commit('showModal', false)
    },
    eventDrop (event) {
      let payload = {
        'title': event.title,
        'start': event.start._i,
        'end': event.end._i,
        'editable': true
      }
      this.$store.commit('deleteEvent', payload)
    }
  },
  computed: {
    getEvents () {
      return this.$store.state.events
    },
    isShowModal () {
      return this.$store.state.isModalOpen
    }
  }
}
</script>
<style lang="scss">
// @import './assets/calendar.scss';
@import 'fullcalendar/dist/fullcalendar.css';
</style>
