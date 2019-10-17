// pages/author/author.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.login({
    //   success(res) {
    //     if (res.code) {
    //       //发起网络请求
    //       console.log(res.code)
    //       wx.request({
    //         url: 'http://127.0.0.1:7001/wechat/login',
    //         data: {
    //           code: res.code
    //         },
    //         success(res) {
    //           const { token } = res.data.data;
    //           wx.setStorageSync('token', token);
    //         }
    //       })
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   }
    // })
  },
  getUserInfo(e) {
    wx.login({
      success(res) {
        if (res.code) {
          //发起网络请求
          console.log(res.code)
          wx.request({
            url: 'http://127.0.0.1:7001/wechat/authorization',
            data: {
              code: res.code,
              authorize: {
                cloudID: e.detail.cloudID,
                encryptedData: e.detail.encryptedData,
                iv: e.detail.iv,
                signature: e.detail.signature,
                clourawDatadID: e.detail.rawData,
                errMsg: e.detail.errMsg,
              },
              userInfo: e.detail.userInfo
            },
            success(res) {
              const { token } = res.data.data;
              wx.setStorageSync('token', token);
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})