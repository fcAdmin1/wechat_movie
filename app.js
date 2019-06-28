//app.js
App({
  onLaunch: function () {
    console.log('sdfsdfsf')
    console.log(this.config)
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  globalData: {
    userInfo: null
  },
  config: {
    sys: '23094803840'
  }
})