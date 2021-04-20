<template>
  <div class="mapView">
    <div id="mapChart" :style="{width:'100%', height:'100%'}"></div>
  </div>
</template>

<script>
const echarts = require('echarts')
export default {
  data () {
    return {
      tableData: [{
        id: 1, rank: 1, keyword: '北京', count: 100, users: 90, range: '90%'
      }, {
        id: 2, rank: 2, keyword: '北京', count: 100, users: 90, range: '90%'
      }, {
        id: 3, rank: 3, keyword: '北京', count: 100, users: 90, range: '90%'
      }, {
        id: 4, rank: 4, keyword: '北京', count: 100, users: 90, range: '90%'
      }, {
        id: 5, rank: 5, keyword: '北京', count: 100, users: 90, range: '90%'
      }],
      radioSelect: '类别',
      mockData: [{
        name: '粉面粥店',
        value: 67
      }, {
        name: '简餐便当',
        value: 97
      }, {
        name: '汉堡披萨',
        value: 92
      }]
    }
  },
  methods: {
    onPageChange (page) {
      console.log(page)
    }
  },
  mounted () {
    const chartDom = echarts.init(
      document.getElementById('mapChart')
    )
    chartDom.setOption({
      xAxis: {
        type: 'category'
      },
      yAxis: {
        show: false
      },
      grid: {
        top: 0,
        bottom: 0,
        left: -10,
        right: 0
      },
      series: [{
        type: 'line',
        areaStyle: {
          color: 'rgba(88,187,255,.5)'
        },
        itemStyle: {
          opacity: 0
        },
        smooth: true,
        data: [200, 230, 256, 304, 234, 200, 230, 256, 304, 234, 234, 545]
      }]
    })

    // 环形图参数
    const pieDom = echarts.init(document.getElementById('CategoryChart'))
    pieDom.setOption({
      title: [{
        text: '品牌分布',
        textStyle: {
          fontSize: 14,
          color: '#666666'
        },
        left: 20,
        top: 20
      }],
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)'
      },
      legend: {
        top: '5%',
        left: 'right',
        orient: 'vertical'
      },
      series: [{
        type: 'pie',
        data: this.mockData,
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        }
      }]
    })
  }
}

</script>

<style lang="scss" scoped>
</style>
