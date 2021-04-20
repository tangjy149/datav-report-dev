<template>
  <div class="bottomView">
    <div class="bottomView__view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="bottomView__view__titleWrapper">搜索关键字</div>
        </template>
        <div class="bottomView__view__baseBox">
          <div class="bottomView__view__baseBox__chartWrapper">
            <div class="chart">
              <div class="chart__title">搜索用户数</div>
              <div class="chart__data">94,234</div>
              <div id="SreachUsersChart" style="height:.5rem;" />
            </div>
            <div class="chart">
              <div class="chart__title">搜索量趋势</div>
              <div class="chart__data">198,234</div>
              <div id="SreachNumberChart" style="height:.5rem;" />
            </div>
          </div>
          <div class="bottomView__view__baseBox__tableWrapper">
            <el-table :data="tableData">
              <el-table-column prop="rank" label="rank" width="180px"></el-table-column>
              <el-table-column prop="keyword" label="keyword" width="160px"></el-table-column>
              <el-table-column prop="count" label="count"></el-table-column>
              <el-table-column prop="users" label="users"></el-table-column>
            </el-table>
            <el-pagination :total="100" :page-size="5" @current-change="onPageChange"></el-pagination>
          </div>
        </div>
      </el-card>
    </div>
    <div class="bottomView__view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="bottomView__view__titleWrapper">
            <div class="bottomView__view__titleWrapper__title">分类销售排行</div>
            <div class="bottomView__view__titleWrapper__radioWrapper">
              <el-radio-group v-model="radioSelect" size="small">
                <el-radio-button label="类别"></el-radio-button>
                <el-radio-button label="产品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <div class="bottomView__view__pieBox">
          <div id="CategoryChart" :style="{width:'100%', height:'100%'}"></div>
        </div>
      </el-card>
    </div>
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
      document.getElementById('SreachUsersChart')
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
.bottomView {
  display: flex;
  margin-top: 0.2rem;
  &__view {
    flex: 1;
    width: 50%;
    box-sizing: border-box;
    &:first-child {
      padding: 0 0.1rem 0 0;
    }
    &:last-child {
      padding: 0 0 0 0.1rem;
    }
    &__titleWrapper {
      display: flex;
      align-items: center;
      height: 0.6rem;
      box-sizing: border-box;
      border-bottom: solid 0.01rem #eeeeee;
      font-size: 0.15rem;
      padding: 0 0 0 0.2rem;
      font-weight: bold;
      &__radioWrapper {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        padding: 0 0 0 0.2rem;
      }
    }
    &__baseBox {
      display: flex;
      flex-direction: column;
      height: 4.6rem;
      &__chartWrapper {
        display: flex;
        flex: 1;
        padding: 0 0.1rem;
        margin-top: 0.2rem;
        .chart {
          flex: 1;
          padding: 0 0.1rem;
          &__title {
            color: #999999;
            font-size: 0.14rem;
          }
          &__data {
            font-size: 0.22rem;
            font-weight: bold;
            color: #333333;
            letter-spacing: 0.02rem;
          }
        }
      }
      &__tableWrapper {
        flex: 1;
        margin-top: 0.2rem;
        padding: 0 0.2rem 0.2rem 0.2rem;
        .el-pagination {
          display: flex;
          justify-content: center;
          margin-top: 0.2rem;
        }
      }
    }
    &__pieBox {
      height: 4.6rem;
    }
  }
}
</style>
