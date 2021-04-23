<template>
  <common-card title="累计订单量" :value="totalOrders_total">
    <template v-slot:chart>
      <div id="totalOrdersChart" :style="{width:'100%', height:'100%'}"></div>
    </template>
    <template v-slot:footer>
      <span>昨日订单量:</span>
      <span class="emphasis">{{totalOrders_yesterdayTotal}}</span>
      <!-- <span class="emphasis">{{orderTrend}}</span> -->
    </template>
  </common-card>
</template>
<script>
import commonCardMixin from '../../../mixins/commonCardMixin'
import commonDataMixin from '../../../mixins/commonDataMixin'
import commonApiMixin from '../../../mixins/commonApiMixin'

const echarts = require('echarts')
export default {
  mixins: [commonCardMixin, commonDataMixin, commonApiMixin],
  mounted () {
    const chartDom = echarts.init(
      document.getElementById('totalOrdersChart')
    )
    // console.log(this.orderTrend)
    chartDom.setOption({
      xAxis: {
        type: 'category',
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
        type: 'line',
        lineStyle: {
          width: 0
        },
        itemStyle: {
          opacity: 0
        },
        data: this.orderTrend,
        areaStyle: {
          color: 'purple'
        },
        smooth: true
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
