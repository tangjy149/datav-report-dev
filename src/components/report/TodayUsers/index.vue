<template>
  <common-card title="今日交易用户数" value="57,420">
    <template v-slot:chart>
      <div id="TodayUsersChart" :style="{width:'100%', height:'100%'}"></div>
    </template>
    <template v-slot:footer>
      <span>退货率:</span>
      <span class="emphasis">5.14%</span>
    </template>
  </common-card>
</template>
<script>
import commonCardMixin from '../../../mixins/commonCardMixin'
const echarts = require('echarts')
export default {
  mixins: [commonCardMixin],
  mounted () {
    const chartDom = echarts.init(
      document.getElementById('TodayUsersChart')
    )
    chartDom.setOption({
      color: ['#3398db'],
      xAxis: {
        type: 'category',
        data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00',
          '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00'],
        show: false
      },
      yAxis: {
        show: false
      },
      grid: {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
      },
      series: [{
        type: 'bar',
        barwidth: '60%',
        data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290, 330, 150],
        areaStyle: {
          color: '#0c57a3'
        }
      }]
    })
  }
}
</script>
<style lang="scss" scoped>
@import "../../../style/mixins.scss";

.emphasis {
  @include commonEmphasis;
}
</style>
