// import axios from 'axios'

// // 设置请求地址
// axios.defaults.baseURL = "http://47.100.13.76:8083"
// // 设置超时
// axios.defaults.timeout = 10000;
// // 设置请求头
// // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// // 请求拦截
// // 响应拦截
// axios.interceptors.response.use(
//   response => {
//     if (response.status == 200) {
//       return Promise.resolve(response)
//     } else {
//       return Promise.resolve(response)
//     }
//   },
//   error => {
//     if (error.response.status) {
//       switch (error.response.status) {
//         //401--未登录
//         case 401:
//           router.replace({
//             path: '/login',
//             query: {
//               redirect: router.currentRoute.fullPath
//             }
//           })
//           break;
//           //token过期
//         case 403:
//           this.$message('登录信息过期，请重新登录')
//           // 清除token
//           localStorage.removeItem('token');
//           store.commit('loginSuccess', null);
//           // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面 
//           setTimeout(() => {
//             router.replace({
//               path: '/login',
//               query: {
//                 redirect: router.currentRoute.fullPath
//               }
//             });
//           }, 1000);
//           break;
//           //404请求不存在
//         case 404:
//           Toast({
//             message: '网络请求不存在',
//             duration: 1500,
//             forbidClick: true
//           });
//           break;
//           // 其他错误，直接抛出错误提示
//         default:
//           Toast({
//             message: error.response.data.message,
//             duration: 1500,
//             forbidClick: true
//           });
//       }
//       return Promise.reject(error.response);
//     }
//   }
// )
// console.log(axios)
// export default {
//     axios,
//     post(url, data) {
//       return axios({
//         method: 'post',
//         baseURL: config.baseURL,
//         url,
//         data: data,
//         timeout: config.timeout,
//         headers: config.getHeaders()
//       })
//     },
//     get (url, params) {
//       return axios({
//         method: 'get',
//         baseURL: config.baseURL,
//         url,
//         params, // get 请求时带的参数
//         timeout: config.timeout,
//         headers: config.getHeaders()
//       })
//     },
//     put (url,data){
//       return axios({
//         method: 'put',
//         baseURL: config.baseURL,
//         url,
//         data: data,
//         timeout: config.timeout,
//         headers: config.getHeaders()
//       })
//     },
//     patch (url,data) {
//       return axios({
//         method: 'patch',
//         baseURL: config.baseURL,
//         url,
//         data: data,
//         timeout: config.timeout,
//         headers: config.getHeaders()
//       })
//     },
//     delete(url,data){
//       return axios({
//         method: 'delete',
//         baseURL: config.baseURL,
//         data:data,
//         url,
//         timeout: config.timeout,
//         headers: config.getHeaders()
//       })
//     },
//     getData (url, params) {
//       return axios({
//         method: 'get',
//         baseURL: config.baseURL,
//         url,
//         params, // get 请求时带的参数
//         timeout: config.timeout,
//         headers: config.getHeaders()
//       })
//     },
//     post_callback (url, data) {
//       return axios({
//         method: 'post',
//         baseURL: config.baseURL,
//         url,
//         data: data,
//         timeout: config.timeout,
//         headers: config.getHeaders()
//       })
//     },
//   }


// 发送请求

import axios from "axios"
import {
  Message
} from 'element-ui'

const Http = {}
Http.install = function (Vue) {

  // axios.defaults.baseURL = "http://47.100.13.76:8083"
  axios.defaults.baseURL = "/api"


  // if (process.env.NODE_ENV == 'development') {    
  //   axios.defaults.baseURL = 'http://47.100.13.76:8081';} 
  // else if (process.env.NODE_ENV == 'production') {    
  //   axios.defaults.baseURL = 'localhost:8080';
  // }


  // 添加请求拦截器
  axios.interceptors.request.use(function (config) {
    // 在发送请求之前,会先到这里
    // console.log(config)
    if (config.url !== "user/login") {
      const AUTH_TOKEN = localStorage.getItem("token")
      // this.$http.defaults.headers.common["Authorization"] = AUTH_TOKEN
      config.headers.Authorization = AUTH_TOKEN
    }
    return config
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  })

  // 添加响应拦截器
  axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // console.log("拦截器----");

    // console.log(response);
    const {
      message,
      code
    } = response.data;
    // 统一处理所有非200和201的响应
    if (code !== 200 && code !== 201) {
      Message.warning(message);
    }

    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  // 4. 添加实例方法
  Vue.prototype.$http = axios
}

export default Http

  
