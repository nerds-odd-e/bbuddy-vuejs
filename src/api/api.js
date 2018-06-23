import axios from 'axios'

export const callApi = (endpoint, method, data) => {
  return axios.request({
    url: 'http://localhost:3000/' + endpoint,
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
