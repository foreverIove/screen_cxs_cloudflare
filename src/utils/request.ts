import axios from 'axios'
const requests = axios.create({
  // 基础路径，requests发出的请求在端口号后面会跟改baseURl
  baseURL: '/api',
  timeout: 5000
})
requests.interceptors.request.use((config) => {
  // config内主要是对请求头Header配置
  config.params = { optid: 1 }
  // 比如添加token
  return config
})
requests.interceptors.response.use(
  (res) => {
    return res.data
  },
  (error) => {
    console.log('响应失败' + error)
    return Promise.reject(new Error('fail'))
  }
)
export default requests
