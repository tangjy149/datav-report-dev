import request from '../utils/requsetAPI'

export function screenData () {
  return request({
    url: '/screen/data',
    method: 'get',
    params: { icode: 'D3BD6BAF2CAE2DC6' }

  })
}

export function wordCloud () {
  return request({
    url: '/screen/wordcloud',
    method: 'get',
    params: { icode: 'D3BD6BAF2CAE2DC6' }

  })
}
