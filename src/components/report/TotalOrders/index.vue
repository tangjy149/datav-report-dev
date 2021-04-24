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
import { toRaw } from 'vue'
const echarts = require('echarts')
export default {
  mixins: [commonCardMixin, commonDataMixin, commonApiMixin],
  data () {
    return {
      orderOption: {
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
          data: this.dataTrend,
          areaStyle: {
            color: 'purple'
          },
          smooth: true
        }]
      }
    }
  },
  mounted () {
    // console.log(this.orderTrend)
  },
  methods: {},
  watch: {
    orderTrend () {
      // console.log(this.dataTrend)
      // console.log(this.orderTrend)
      // console.log(toRaw(this.orderTrend))
      this.orderOption.series[0].data = toRaw(this.orderTrend)
      // console.log(this.orderOption.series[0].data)
      const chartDom = echarts.init(
        document.getElementById('totalOrdersChart')
      )
      chartDom.setOption(this.orderOption)
      // console.log(this.orderOption)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../../style/mixins.scss";

.emphasis {
  @include commonEmphasis;
}
</style>
