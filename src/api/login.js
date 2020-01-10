// axios 导入
import axios from 'axios'
// 定义一个登陆的方式 并暴露出去
export function login(data){
  return axios({
    url: process.env.VUE_APP_BASEURL + "/login",
    method: "post",
    // 跨域是否携带 token
    withCredentials: true,
    data
  })
}

