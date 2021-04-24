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
              <div class="chart__data">{{userCount}}</div>
              <div id="SreachUsersChart" style="height:.5rem;" />
            </div>
            <div class="chart">
              <div class="chart__title">搜索量趋势</div>
              <div class="chart__data">{{searchCount}}</div>
              <div id="SreachNumberChart" style="height:.5rem;" />
            </div>
          </div>
          <div class="bottomView__view__baseBox__tableWrapper">
            <el-table :data="tableData">
              <el-table-column prop="rank" label="rank" width="180px"></el-table-column>
              <el-table-column prop="keyword" label="keyword" width="160px"></el-table-column>
              <el-table-column prop="count" label="count"></el-table-column>
              <el-table-column prop="users" label="users"></el-table-column>
              <el-table-column prop="range" label="range"></el-table-column>
            </el-table>
            <el-pagination :total="totalNum" :page-size="pageSize" @current-change="onPageChange"></el-pagination>
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
import commonApiMixin from '../../../mixins/commonApiMixin'
import commonDataMixin from '../../../mixins/commonDataMixin'
import { toRaw } from 'vue'
const echarts = require('echarts')
export default {
  mixins: [commonApiMixin, commonDataMixin],
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
      }],
      searchUserOption: {
        xAxis: {
          type: 'category'
        },
        yAxis: {
          show: false
        },
        grid: {
          top: 0,
          bottom: 0,
          left: -20,
          right: 20
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
      },
      searchNumberOption: {
        xAxis: {
          type: 'category'
        },
        yAxis: {
          show: false
        },
        grid: {
          top: 0,
          bottom: 0,
          left: -20,
          right: 20
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
      },
      categoryOption: {
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
      },
      totalData: [],
      totalNum: 0,
      pageSize: 5,
      userCount: 0,
      searchCount: 0
    }
  },
  methods: {
    onPageChange (page) {
      this.renderTable(page)
    },
    // 设置表格内部的值
    renderTable (page) {
      const pageStart = (page - 1) * this.pageSize
      const pageEnd = (page - 1) * this.pageSize + this.pageSize
      this.tableData = this.totalData.slice(pageStart, pageEnd)
    },
    renderLineChart () {
      // 设置趋势图
      const userData = []
      const numberData = []
      this.wordCloudData.forEach(item => {
        userData.push(item.user)
      })
      this.wordCloudData.forEach(item => {
        numberData.push(item.count)
      })
      // console.log(userData)
      this.searchUserOption.series[0].data = userData
      this.searchNumberOption.series[0].data = numberData
    }
  },
  mounted () {
    // 环形图参数

  },
  watch: {
    wordCloudData () {
      // console.log(this.wordCloudData)
      const totalData = []
      this.wordCloudData.forEach((item, index) => {
        totalData.push({
          id: index + 1,
          rank: index + 1,
          keyword: item.word,
          count: item.count,
          users: item.user,
          range: `${((item.user / item.count) * 100).toFixed(2)}%`
        })
      })
      this.totalData = totalData
      this.totalNum = this.totalData.length
      // console.log(this.totalData)
      this.renderTable(1)

      // 用户和销售趋势&总数
      this.userCount = this.exFormat(totalData.reduce((s, i) => i.users + s, 0))
      this.searchCount = this.exFormat(totalData.reduce((s, i) => i.count + s, 0))
      // 趋势绘制
      this.renderLineChart()
      const chartDomUser = echarts.init(
        document.getElementById('SreachUsersChart')
      )
      chartDomUser.setOption(this.searchUserOption)
      const chartDomNum = echarts.init(
        document.getElementById('SreachNumberChart')
      )
      chartDomNum.setOption(this.searchNumberOption)
    },
    brandData () {
      // console.log(this.brandData)
      this.categoryOption.series[0].data = toRaw(this.brandData)
      const pieDom = echarts.init(document.getElementById('CategoryChart'))
      pieDom.setOption(this.categoryOption)
    },
    productData () {
      // this.categoryOption.series[0].data = toRaw(this.brandData)
      console.log(this.productData)
    },
    radioSelect () {
      if (this.radioSelect === '类别') {
        this.categoryOption.series[0].data = toRaw(this.brandData)
        this.categoryOption.title[0].text = '品牌分布'
      } else {
        this.categoryOption.series[0].data = toRaw(this.productData)
        this.categoryOption.title[0].text = '产品分布'
      }
      const pieDom = echarts.init(document.getElementById('CategoryChart'))
      pieDom.setOption(this.categoryOption)
    }
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
