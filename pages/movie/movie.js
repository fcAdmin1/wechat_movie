import Api from '../../utils/api.js';
import util from '../../utils/util.js';
// const Api = new api();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    star: {
      score: 90,
      stars: [ true, true, false, false, false],
    },
    params: {
      start: 0,
      count: 20
    },
    theaters: { // 热门预告
      list: [],
      total: 0,
    },
    comingSoon: { // 即将上映
      list: [],
      total: 0,
    },
    filmTop: { // 电影TOP
      list: [],
      total: 0
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.initData();

  },
  // 获取初始化的页面数据
  initData() {
    Api.filmTheaters(this.data.params).then((res) => {
      this.processDoubanData(res, 'theaters');
    });
    Api.filmComingSoon(this.data.params).then((res) => {
      this.processDoubanData(res, 'comingSoon');
    });
    Api.filmTop(this.data.params).then((res) => {
      this.processDoubanData(res, 'filmTop');
    });
  },
  processDoubanData(res, key) {
    const movies = res.subjects.map((item) => {
      return {
        title: item.title,
        coverageUrl: item.images.large,
        id: item.id,
        stars: {
          stars: util.convertToStarsArray(item.rating.stars),
          score: item.rating.average + '',
        },
        commentCount: item.collect_count,
      }
    });
    const obj = {
      list: movies,
      total: res.total
    }
    this.setData({
      [key]: obj
    });
  },
  // 跳转详情页
  toDetail(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: "/pages/movieDetail/movieDetail?id=" + id
    })
  },
  toMore(e) {
    
    const { cate } = e.currentTarget.dataset;
    console.log(cate)
    wx.navigateTo({
      url: "/pages/movieMore/movieMore?category=" + cate
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})