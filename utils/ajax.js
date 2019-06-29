import config from './config.js';

class Base {
  constructor() {
  }
  request({ method, url, params }) {
    console.log(params)
    return new Promise((resole, reject) => {
      wx.showLoading({
        mask: true,
        title: '加载中...',
      })
      wx.request({
        url: config.doubanBaseHost + url,
        data: params,
        method,
        header: {
          'Content-Type': 'json',
        },
        success(res) {
          resole(res.data);
        },
        fail(err) {
          reject(err);
        },
        complete() {
          wx.hideLoading();
        }
      })
    })
  }

}

export default Base;