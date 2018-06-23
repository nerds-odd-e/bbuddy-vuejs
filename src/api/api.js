import axios from 'axios'
import { HOST } from '@/config'

export const callApi = (endpoint, method, data) => {
  return axios.request({
    url: HOST + endpoint,
    headers: {
      'access-token': 'evpZgOmKhHDhvyGCWAnxmQ',
      'token-type': 'Bearer',
      'uid': 'joseph.yao.ruozhou@gmail.com',
      'client': 'Tu2Zec9pa3PDuHvQgkEQsA',
      'expiry': 1530859183
    },
    method,
    data
  })
}
