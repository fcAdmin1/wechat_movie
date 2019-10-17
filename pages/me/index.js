// pages/me/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAdmin: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    this.getUser();
  },
  getUser() {
    wx.cloud.callFunction({
      // 云函数名称
      name: 'getUser',
      // 传给云函数的参数
      data: {
        // user_info: e.detail.userInfo,
      },
      success: (res) => {
        this.setData({
          isAdmin: res.result.user.type && res.result.user.type === 1
        })
        console.log(res, ']]]]]]') // 3
      },
      fail: console.error
    })
  },
  toAdminList() {
    wx.navigateTo({
      url: '/pages/adminList/index?id=1',
    })
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