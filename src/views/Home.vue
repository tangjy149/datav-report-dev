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
import { dataReport, totalOrders, todayUsers, brandData, productData } from '../api/data'
import { screenData, wordCloud } from '../api/report'
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
      reportData: null,
      wordCloudData: null,
      brandData: null,
      productData: null
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
    },
    getWordCloudData () {
      return this.wordCloudData
    },
    getBrandData () {
      return this.brandData
    },
    getProductData () {
      return this.productData
    }

  },
  provide () {
    return {
      getTotalData: this.getTotalData,
      getTotalUsers: this.getTotalUsers,
      getTotalOrders: this.getTotalOrders,
      getTodayUsers: this.getTodayUsers,
      getReportData: this.getReportData,
      getWordCloudData: this.getWordCloudData,
      getBrandData: this.getBrandData,
      getProductData: this.getProductData
    }
  },
  mounted () {
    dataReport().then(data => { this.totalData = data[0] })
    dataReport().then(data => { this.totalUsers = data[1] })
    totalOrders().then(data => { this.totalOrders = data[0] })
    todayUsers().then(data => { this.todayUsers = data[0] })
    brandData().then(data => { this.brandData = data })
    productData().then(data => { this.productData = data })
    // api接入
    screenData().then(data => { this.reportData = data })
    wordCloud().then(data => {
      this.wordCloudData = data
    })
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
