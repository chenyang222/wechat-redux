const globalUrl = 'https://test.com';
// 接口请求
const fetch = function ({ method = "GET", url, data = {} }) {
    wx.showLoading({
      title: '加载中',
    })
    // let header = {};
    // header设置token
    // if (token) {
    //   header["Authorization"] = token;
    // }
    // promise 封装 wx.request
    return new Promise((resolve, reject) => {
      wx.request({
        method: method,
        url: `${globalUrl}${url}`,
        data: data,
        // header: header,
        success: function (response) {
          wx.hideLoading()
          // 接口返回 errcode 统一处理
          if (response.data.errcode == 0) {
            resolve(response.data.data)
          } else if (response.data.errcode == 10003) {
            wx.showToast({
              title: '登陆信息已过期，将自动重新登陆',
              icon: 'none',
              duration: 1000,
              mask: true
            })
          } else {
            wx.showToast({
              title: response.data.errmsg,
              icon: 'none',
              duration: 1000,
              mask: true
            })
          }
        },
        fail: function (response) {
          wx.hideLoading()
          reject(response)
        }
      })
    })
  }

  module.exports = {
    fetch: fetch
  }