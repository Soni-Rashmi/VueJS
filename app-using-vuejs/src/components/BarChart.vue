<!-- <template src='../views/dataTable.html'></template> -->

<script>
import { Bar, mixins } from 'vue-chartjs'

export default {
  name: 'BarChartComp',
  extends: Bar,
  props: ['data'],
  mounted () {
    this.renderChart(this.data,  {responsive: true, maintainAspectRatio: false,})
  }
}
</script>
<!-- // <style lang='scss'>
// @import '../assets/dataTable.scss'
// </style> -->
