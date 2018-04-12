<template src='../views/allChart.html'></template>
<script>
import BarChartComp from './BarChart'
import LineChart from './LineChart'
import Doughnut from './DoughnutChart'

export default {
  name: 'AllCharts',
  data () {
    return {
      chartData: {
        'labels':
          ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        'datasets': [{
          label: 'Monthly Data',
          backgroundColor: '#f87979',
          data: [40, 20, 120, 39, 17, 40, 39, 80, 40, 20, 12, 60],
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  
                  stepSize: 10
                }
              }]
            }
          }
        }]
      },
      lineChartData: {
        'labels':
          ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        'datasets': [{
          label: 'Monthly Data',
          backgroundColor: '#f87979',
          data: [40, 20, 120, 39, 17, 40, 39, 80, 40, 20, 12, 60],
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero:true
                }
              }]
            }
          }
        },
      {
        label: 'Year data',
        backgroundColor: '#ccc',
        data: [80, 40, 20, 12, 60, 55, 33, 77, 24, 90, 9, 10],
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true
              }
            }]
          }
        }
      }]
      }
    }
  },
  components: {
    'bar-chart': BarChartComp,
    'line-chart': LineChart,
    'doughnut-chart': Doughnut
  }
}
</script>
<style lang ='scss' scoped>
@import '../assets/allChart.scss'
</style>
