import axios from 'axios'
const service = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 5000
})
service.interceptors.response.use(
  response => {
    // console.log(response)
    if (response.status === 200 && response.data) {
      // console.log(response.data.data)
      return response.data.data
    } else {
      return Promise.reject(new Error('请求失败'))
    }
  },
  err => {
    return Promise.reject(err)
  }
)

export const post = (url, data = {}) => {
  // console.log(data)
  let resData = null
  return new Promise((resolve, reject) => {
    service.post(url, data, {
      transformResponse: [function (data) {
        // 对 data 进行任意转换处理
        // console.log(data)
        resData = data
        return data
      }],
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      // console.log(resData)
      resolve(resData)
    }, error => {
      reject(error)
    })
  })
}
export default service
