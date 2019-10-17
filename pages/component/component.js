// pages/component/component.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: [1,2,3,4]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/top250',
      method: 'GET',
      header: {
        'content-type': 'json' // 默认值
      },
      success(res) {
        console.log(res);
      }
    })
  },
  clickBtn(e, options) {
    console.log(e, options)
  },
  handleTap1(e) {
    console.log('handleTap1')
  },
  handleTap2(e) {
    console.log('handleTap2')
  },
  handleTap3(e) {
    console.log('handleTap3')
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