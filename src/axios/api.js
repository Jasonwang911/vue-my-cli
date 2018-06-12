/*
 *   axios基本配置、请求拦截器、相应拦截器
 *
 */
// axios 引入
import axios from 'axios'
// qs 
import $qs from 'qs'
// baseUrl引入： 
import {
  baseUrl
} from '@/config/env'

// axios.defaults.headers.post['Content-Type'] = 'Content-Type: application/json'
// baseURL配置
// axios.defaults.baseURL = baseUrl

var server = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json',
  },
});


// 请求拦截器
server.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
})
// 响应拦截器
server.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})


/*
 *   axios的get请求
 *   @params  url
 *   @params  params
 *   @returns {Promise}
 */
export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    // get 请求
    server.get(url, {
        params
      })
      .then(response => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      })
  })
}

/*
 *   axios的post请求
 *   @params  url
 *   @params  params
 *   @returns {Promise}
 */
export function post(url, params = {}) {
  return new Promise((resolve, reject) => {
    // post请求
    server.post(url, $qs.stringify(params))
      .then(response => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      })
  })
}