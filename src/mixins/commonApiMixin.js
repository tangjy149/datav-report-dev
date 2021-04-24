// function format (v) {
//   // return v.toLocaleString()
//   const reg = /\d{1,3}(?=(\d{3})+$)/g
//   return `${v}`.replace(reg, '$&,')
// }
// function wrapperMoney (o, k) {
//   return o && o[k] ? `￥ ${format(o[k])}` : '￥ 0.00'
// }

function wrapperArray (o, k) {
  return o && o[k] ? o[k] : []
}

function wrapperObject (o, k) {
  if (o && k.indexOf('.' >= 0)) {
    const keys = k.split('.')
    keys.forEach((key) => {
      o = o[key]
    })
    return o
  } else {
    return o && o[k] ? o[k] : {}
  }
}
// function wrapperPercentage (o, k) {
//   return o && o[k] ? `${o[k]}% ` : '0%'
// }
export default {
  inject: ['getReportData', 'getWordCloudData'],
  computed: {
    reportData () {
      return this.getReportData()
    },
    orderTrend () {
      return wrapperArray(this.reportData, 'orderTrend')
    },
    orderUserTrend () {
      return wrapperArray(this.reportData, 'orderUserTrend')
    },

    // 销售组件
    orderFullYear () {
      return wrapperArray(this.reportData, 'orderFullYear')
    },
    orderFullYearAxis () {
      return wrapperArray(this.reportData, 'orderFullYearAxis')
    },
    orderRank () {
      return wrapperArray(this.reportData, 'orderRank')
    },
    userFullYear () {
      return wrapperArray(this.reportData, 'userFullYear')
    },
    userFullYearAxis () {
      return wrapperArray(this.reportData, 'userFullYearAxis')
    },
    userRank () {
      return wrapperArray(this.reportData, 'userRank')
    },

    // 搜索数据
    wordCloudData () {
      return this.getWordCloudData()
    },

    // 品类数据
    category () {
      return wrapperObject(this.reportData, 'category.data2')
    }
  }
}
