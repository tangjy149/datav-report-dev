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
export default service
