Page({
  data: {
    swiperConfig: {
      indicatorDots: true,
      indicatorColor: 'rgba(0, 0, 0, 0.3)',
      indicatorActiveColor: "#0491FF",
      autoplay: true,
      interval: 5000,
      duration: 1000,
      circular: true,
    },
    imgUrls: [
      '/images/banner/banner.png',
      '/images/banner/banner.png',
      '/images/banner/banner.png'
    ],
  },
  swiperChange() {
    // console.log(111);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('生命周期函数--监听页面加载');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log('生命周期函数--监听页面初次渲染完成');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log('生命周期函数--监听页面显示');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log('生命周期函数--监听页面隐藏');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log('生命周期函数--监听页面卸载');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    console.log('监听用户下拉动作');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log('页面上拉触底事件的处理函数');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    console.log('====')
  }
})
