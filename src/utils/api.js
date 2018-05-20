import request from './request'
export const API = {
  // 登录的接口
  login: (picKey, username, password, picCode) => {
    return request({
      url: '/admin/login/check',
      method: 'post',
      data: {
        picKey,
        username,
        password,
        picCode
      }
    })
  }
}
