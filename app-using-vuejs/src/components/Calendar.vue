<template src='../views/calendar.html'></template>

<script>
import Modal from './ModalComponent.vue'
import { Validator, ErrorBag } from 'vee-validate'
import Datepicker from 'vuejs-datepicker'
import moment from 'moment'

Validator.extend('eventEndDate', {
  getMessage: (field) => {
    return 'required'
  },
  validate: (value) => {
    if(value) {
      return true
    } else {
      return false
    }
  }
});

export default {
  data() {
    return {
      config: {
        defaultView: 'month'
      },
      eventSources: [],
      validClass: '',
      eventData : {
        'eventName': '',
        'eventStartDate': '',
        'eventEndDate': ''
      },
      highlighted: {
        dates: [new Date()]
      },
      isEdit : false,
      eData: {}
    }
  },
  components: {
    'app-modal': Modal,
     Datepicker
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
      this.eventData = {}
      this.$store.commit('showModal', false)
    },
    eventDrop (event) {
      let options = {
        html: true,
        okText: 'Edit',
        cancelText: 'Delete'
      };
      this.$dialog.confirm('Select action?', options)
        .then(() => {
          this.isEdit = true
          this.eventData={
            'eventName' : event.title,
            'eventStartDate' : event.start._i,
            'eventEndDate' : event.end._i
          }
          this.eData = Object.assign({}, this.eventData);
          this.openModal()
        })
        .catch(() => {
          this.$dialog.confirm(`Want to delete <b>${event.title}</b>`, {html: true})
          .then(() => {
            let payload = {
              'title': event.title,
              'start': event.start._i,
              'end': event.end._i,
              'editable': true
            }
            this.$store.commit('deleteEvent', payload)
          })
        .catch(function () {
          // console.log("clicked cancel");
        })
      })
    },
    submitForm () {
      this.$validator.validateAll().then((result) => {
        let payload = {
          'title': this.eventData.eventName,
          'start': moment(new Date(this.eventData.eventStartDate)).format('YYYY-MM-DD'),
          'end': moment(moment(new Date(this.eventData.eventEndDate))).add(1,    'days').format('YYYY-MM-DD'),
          'editable': true
        }
        if (result) {
          this.eventData.eventName = ''
          this.eventData.eventStartDate = ''
          this.eventData.eventEndDate = ''
          this.$store.commit('showModal', false)
          if(this.isEdit) {
            this.$store.commit('updateEventData', {updatedData: payload, oldData: this.eData, isEdit: this.isEdit})
          } else {
            this.$store.commit('createEvent', payload)
          }
          return;
        }
      })
    },
    pickerClosed () {
      if(!this.eventEndDate) {
         this.validClass += "has-error"
      }
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
@import '../assets/addEvent.scss'
</style>
