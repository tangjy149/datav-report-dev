<template>
  <common-card title="共计用户数" value="1,957,420">
    <template v-slot:chart>
      <div id="TotalUsersChart" :style="{width:'100%', height:'100%'}"></div>
    </template>
    <template v-slot:footer>
      <div class="totalUsersCompare">
        <span>日同比:</span>
        <span class="emphasis">5.14%</span>
        <div class="increase"></div>
        <span class="totalUsersCompare__month">月同比:</span>
        <span class="emphasis">32.42%</span>
        <div class="decrease"></div>
      </div>
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
      document.getElementById('TotalUsersChart')
    )
    chartDom.setOption({
      xAxis: {
        type: 'value',
        show: false
      },
      yAxis: {
        type: 'category',
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
        stack: '总量',
        data: [100],
        itemStyle: {
          color: '#45c946'
        }
      }, {
        type: 'bar',
        stack: '总量',
        barWidth: 10,
        data: [250],
        itemStyle: {
          color: '#eeeeee'
        }
      }, {
        type: 'custom',
        stack: '总量',
        data: [100],
        renderItem: (params, api) => {
          const value = api.value(0)
          const endPoint = api.coord([value, 0])// 计算坐标位置
          return {

            type: 'group',
            position: endPoint,
            children: [{
              type: 'path',
              shape: {
                // d: 'M512 341.333333l-298.666667 298.666667h597.333334z',
                d: 'M512 682.666667l298.666667-298.666667H213.333333z',
                x: -10,
                y: -22,
                width: 20,
                height: 20

              },
              style: {
                fill: '#45c946'
              }
            }, {
              type: 'path',
              shape: {
                d: 'M512 341.333333l-298.666667 298.666667h597.333334z',
                // d: 'M512 682.666667l298.666667-298.666667H213.333333z',
                x: -10,
                y: 2,
                width: 20,
                height: 20
              },
              style: {
                fill: '#45c946'
              }
            }]

          }
        }
      }]
    })
  }
}
</script>
<style lang="scss" scoped>
@import "../../../style/mixins.scss";
.totalUsersCompare {
  display: flex;
  align-items: center;
  &__month {
    margin-left: 0.2rem;
  }
}
.emphasis {
  @include commonEmphasis;
}
.increase {
  @include commonIncrease;
}
.decrease {
  @include commonDecrease;
}
</style>
