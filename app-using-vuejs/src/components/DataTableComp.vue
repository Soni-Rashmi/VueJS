<template src='../views/dataTable.html'></template>

<script>
import Modal from './ModalComponent.vue'

export default {
  name: 'DataTableComp',
  data () {
    return {
      rowContent: '',
      columns: [
        {
          label: 'Id',
          field: 'id',
          type: 'number',
          tdClass: 'custom-td-class ',
          thClass: 'custom-th-class'
        },
        {
          label: 'Name',
          field: 'name',
          filterOptions: {
            enabled: true,
          },
          tdClass: 'custom-td-class',
          thClass: 'custom-th-class'
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'DD-MM-YYYY',
          dateOutputFormat: 'Do MMM YYYY',
          tdClass: 'custom-td-class',
          thClass: 'custom-th-class',
          filterOptions: {
            enabled: true,
          }
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
          tdClass: 'custom-td-class',
          thClass: 'custom-th-class'
        },
        {
          label: 'Action',
          field: 'action',
          tdClass: 'custom-td-class',
          thClass: 'custom-th-class',
          html: true,
          sortable: false
        }
      ],
      name: '',
      createdAt: '',
      scrore: ''
    }
  },
  methods: {
    doNothing: function() {
      // console.log("cancel");
    },
    submitForm () {
      let data = {
         id: this.rowContent.id,
         name:this.rowContent.name,
         createdAt: this.rowContent.createdAt,
         score: this.rowContent.score
      }
      this.$store.commit('updateRowData', {updatedData:data, isUpdate: true})
      this.$store.commit('showModal', false)
    },
    editRow: function (data) {
      this.rowContent = data
      this.openModal()
    },
    deleteRow: function (data) {
      this.$store.commit('deleteRowData', data)
    },
    openModal () {
      this.$store.commit('showModal', true)
    },
    closeModal () {
      this.$store.commit('updateRowData', {updatedData: this.rowContent, isUpdate: false})
      this.$store.commit('showModal', false)
    }
  },
  computed: {
    rowData: function () {
      return this.$store.state.rows
    },
    isShowModal: function () {
      return this.$store.state.isModalOpen
    }
  },
  components: {
    'app-modal': Modal
  }
}
</script>
<style lang='scss'>
@import '../assets/dataTable.scss'
</style>
