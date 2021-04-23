import request from '../utils/request'

export function dataReport () {
  return request({
    url: '/api/dataReport/getTotalNum',
    method: 'get'
  })
}

export function totalOrders () {
  return request({
    url: '/api/dataReport/getTotalOrders',
    method: 'get'
  })
}

export function todayUsers () {
  return request({
    url: '/api/dataReport/getTodayUsers',
    method: 'get'
  })
}
