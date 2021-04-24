function format (v) {
  // return v.toLocaleString()
  const reg = /\d{1,3}(?=(\d{3})+$)/g
  return `${v}`.replace(reg, '$&,')
}
function wrapperMoney (o, k) {
  return o && o[k] ? `￥ ${format(o[k])}` : '￥ 0.00'
}

function wrapperNumber (o, k) {
  return o && o[k] ? format(o[k]) : '0'
}

function wrapperPercentage (o, k) {
  return o && o[k] ? `${o[k]}% ` : '0%'
}
export default {
  inject: ['getTotalData', 'getTotalUsers', 'getTotalOrders', 'getTodayUsers', 'getBrandData', 'getProductData'],
  computed: {
    // 累计销售
    totalData () {
      return this.getTotalData()
    },
    salesToday () {
      return wrapperMoney(this.totalData, 'total')
    },
    salesToday_dayRate () {
      return wrapperPercentage(this.totalData, 'dayRate')
    },
    salesToday_monthRate () {
      return wrapperPercentage(this.totalData, 'monthRate')
    },
    salesToday_yesterdayTotal () {
      return wrapperMoney(this.totalData, 'yesterdayTotal')
    },

    // 总计用户
    totalUsers () {
      return this.getTotalUsers()
    },
    totalUsers_total () {
      return wrapperNumber(this.totalUsers, 'total')
    },
    totalUsers_dayRate () {
      return wrapperPercentage(this.totalUsers, 'dayRate')
    },
    totalUsers_monthRate () {
      return wrapperPercentage(this.totalUsers, 'monthRate')
    },
    totalUsers_yesterdayTotal () {
      return wrapperMoney(this.totalUsers, 'yesterdayTotal')
    },

    // 总计订单
    totalOrders () {
      return this.getTotalOrders()
    },
    totalOrders_total () {
      return wrapperNumber(this.totalOrders, 'total')
    },
    totalOrders_yesterdayTotal () {
      return wrapperNumber(this.totalOrders, 'yesterdayTotal')
    },

    // 今日用户
    todayUsers () {
      return this.getTodayUsers()
    },
    todayUsers_total () {
      return wrapperNumber(this.todayUsers, 'total')
    },
    todayUsers_backRate () {
      return wrapperPercentage(this.todayUsers, 'backRate')
    },

    // 品牌数据
    brandData () {
      return this.getBrandData()
    },
    productData () {
      return this.getProductData()
    }

  },
  methods: {
    exFormat (v) {
      return format(v)
    }
  }
}
