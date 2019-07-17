import util from '../../utils/util.js';
import api from '../../utils/api.js';

const Api = new api();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [],
    navigateTitle: "",
    requestUrl: "",
    totalCount: 0,
    isEmpty: true,
    params: {
      start: 0,
      count: 21,
    },
    category: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const { category } = options;
    this.setData({
      category
    })
    this.category = category;
    let title = '';
    switch (category) {
      case 'filmTheaters':
        title = '正在热映';
        break;
    }
    wx.setNavigationBarTitle({
      title: title,
    });
    this.getData();
  },
  bindscrolltolower() {

  },
  onScrollLower() {
    console.log('=====')
    const params = {
      start: this.data.params.start += 21,
      count: this.data.params.count += 21,
    }
    this.setData({
      params
    })
    this.getData('more');
  },
  // 获取数据
  getData(type) {
    Api[this.data.category](this.data.params).then((res) => {
      if (res.subjects.length === 0) {
        wx.showToast({
          title: '没有更多数据了',
          mask: true,
          icon: 'none',
          duration: 2000
        })
        return;
      }
      const movies = res.subjects.map((item) => {
        return {
          title: item.title,
          average: item.rating.average,
          coverageUrl: item.images.large,
          id: item.id,
          stars: {
            stars: util.convertToStarsArray(item.rating.stars),
            score: item.rating.average + '',
          },
        }
      });
      if (type === 'more') {
        this.setData({
          movies: this.data.movies.concat(movies),
        })
      } else {
        this.setData({
          movies,
        })
      }

    })
  },
  itemHandle(event) {
    wx.navigateTo({
      url: '../movie-detail/movie-detail?id=' + event.detail
    })
  },
  // 跳转到详情页
  toDetail(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: "/pages/movieDetail/movieDetail?id=" + id
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
    const params = {
      start: 0,
      count: 21,
    }
    this.setData({
      params
    })
    wx.showNavigationBarLoading();
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