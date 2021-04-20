<template>
  <div class="salesView">
    <el-card shadow="hover" body-style="padding:0">
      <template v-slot:header>
        <div class="salesView__menuWrapper">
          <el-menu
            class="salesView__menuWrapper__left"
            mode="horizontal"
            :default-active="activeIndex"
            @select="onMenuSelect"
          >
            <el-menu-item class="salesView__menuWrapper__left__item" index="1">销售额</el-menu-item>
            <el-menu-item class="salesView__menuWrapper__left__item" index="2">访问量</el-menu-item>
          </el-menu>
          <div class="salesView__menuWrapper__right">
            <el-radio-group v-model="radioSelect" size="small">
              <el-radio-button label="今日" />
              <el-radio-button label="本周" />
              <el-radio-button label="本月" />
              <el-radio-button label="今年" />
            </el-radio-group>
            <el-date-picker
              type="daterange"
              v-model="date"
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              size="small"
              unlink-panels
              :shortcuts="shortcuts"
              class="salesView__menuWrapper__right__picker"
            />
          </div>
        </div>
      </template>
      <div class="salesView__chartWrapper">
        <div id="TotalChangeChart" :style="{width:'100%', height:'100%'}"></div>
        <div class="salesView__chartWrapper__list">
          <div class="salesView__chartWrapper__list__title">排行榜</div>
          <div class="salesView__chartWrapper__list__item" v-for="item in rankData" :key="item.no">
            <div
              :class="['salesView__chartWrapper__list__item__No',+item.no<=3 ?'topNo':'']"
            >{{item.no}}</div>
            <div class="salesView__chartWrapper__list__item__name">{{item.name}}</div>
            <div class="salesView__chartWrapper__list__item__money">{{item.money}}</div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
const oneDay = 3600 * 24 * 1000
const echarts = require('echarts')
export default {
  data () {
    return {
      activeIndex: '1',
      radioSelect: '今日',
      date: null,
      shortcuts: [{
        text: '最近一周',
        value: (() => {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - oneDay * 7)
          return [start, end]
        })()
      }, {
        text: '最近一个月',
        value: (() => {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - oneDay * 30)
          return [start, end]
        })()
      }, {
        text: '最近一季度',
        value: (() => {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - oneDay * 90)
          return [start, end]
        })()
      }],
      rankData: [{
        no: 1,
        name: '肯德基',
        money: '323,234'
      }, {
        no: 2,
        name: '肯德基',
        money: '323,234'
      }, {
        no: 3,
        name: '肯德基',
        money: '323,234'
      },
      {
        no: 4,
        name: '肯德基',
        money: '323,234'
      }, {
        no: 5,
        name: '肯德基',
        money: '323,234'
      }, {
        no: 6,
        name: '肯德基',
        money: '323,234'
      }, {
        no: 7,
        name: '肯德基',
        money: '323,234'
      }]
    }
  },
  methods: {
    onMenuSelect (index) {
      this.activeIndex = index
    }
  },
  mounted () {
    const chartDom = echarts.init(
      document.getElementById('TotalChangeChart')
    )
    chartDom.setOption({
      title: {
        text: '年度销售额',
        textStyle: {
          fontSize: 15,
          color: '#666666'
        },
        left: 25,
        top: 20
      },
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        top: 70,
        bottom: 60,
        left: 50,
        right: 50,
        tooltip: {
          show: true
        }
      },
      series: [{
        type: 'bar',
        barWidth: '35%',
        data: [200, 230, 256, 304, 234, 200, 230, 256, 304, 234, 234, 545]
      }]
    })
  }
}
</script>

<style lang="scss" scoped>
.salesView {
  margin-top: 0.2rem;
  &__menuWrapper {
    position: relative;
    display: flex;
    &__left {
      width: 100%;
      padding-left: 0.2rem;
      &__item {
        height: 0.5rem;
        line-height: 0.5rem;
      }
    }
    &__right {
      position: absolute;
      top: 0.12rem;
      right: 0.1rem;
      height: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
  &__chartWrapper {
    display: flex;
    height: 2.8rem;
    &__list {
      flex: 1;
      width: 100%;
      height: 100;
      overflow: hidden;
      margin-top: 0.15rem;
      &__title {
        margin: 0.1rem 0;
        color: #666666;
        font-weight: bold;
      }
      &__item {
        display: flex;
        flex-direction: row;
        height: 0.2rem;
        padding: 0.06rem 0.2rem 0.06rem 0;
        &__No {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 0.2rem;
          height: 0.2rem;
          color: #333333;
          &.topNo {
            background-color: #000000;
            border-radius: 50%;
            color: #ffffff;
            font-weight: bold;
          }
        }
        &__name {
          margin-left: 0.1rem;
          color: #333333;
        }
        &__money {
          flex: 1;
          text-align: right;
        }
      }
    }
  }
}
#TotalChangeChart {
  flex: 0 0 70%;
  width: 70%;
  height: 100%;
}
</style>
