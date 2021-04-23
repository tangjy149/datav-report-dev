<template>
  <div class="home">
    <top-bar />
    <top-view />
    <sales-view />
    <bottom-view />
  </div>
</template>

<script>
import TopView from '../components/report/TopView'
import SalesView from '../components/report/SalesView'
import BottomView from '../components/report/BottomView'
import TopBar from '../components/TopBar'
import { dataReport, totalOrders, todayUsers } from '../api/data'
import { screenData } from '../api/report'
export default {
  name: 'Home',
  components: {
    TopView, SalesView, BottomView, TopBar
  },
  data () {
    return {
      totalData: null,
      totalUsers: null,
      totalOrders: null,
      todayUsers: null,
      reportData: null
    }
  },
  methods: {
    getTotalData () {
      return this.totalData
    },
    getTotalUsers () {
      return this.totalUsers
    },
    getTotalOrders () {
      return this.totalOrders
    },
    getTodayUsers () {
      return this.todayUsers
    },
    getReportData () {
      return this.reportData
    }

  },
  provide () {
    return {
      getTotalData: this.getTotalData,
      getTotalUsers: this.getTotalUsers,
      getTotalOrders: this.getTotalOrders,
      getTodayUsers: this.getTodayUsers,
      getReportData: this.getReportData
    }
  },
  mounted () {
    dataReport().then(data => { this.totalData = data[0] })
    dataReport().then(data => { this.totalUsers = data[1] })
    totalOrders().then(data => { this.totalOrders = data[0] })
    todayUsers().then(data => { this.todayUsers = data[0] })

    // api接入
    screenData().then(data => { this.reportData = data })

    // console.log(this.reportData)
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 12rem;
  padding: 0.2rem;
  background-color: #eeeeee;
  box-sizing: border-box;
}
</style>
