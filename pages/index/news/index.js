import { news } from '../../../dbBase/new.js';
wx.cloud.init({
  env: 'test-dwpnd'
})
const db = wx.cloud.database({
  env: 'test-dwpnd',
  // traceUser: true,
});
const _ = db.command

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 为了代码更好的可维护给news增加属性值以便其他成员更好的沟通协作
    news: {
      dateTime: '',
      title: '',
      avatar: '',
      author: '',
      userInfo: '',
      collected: false,
      videoSource: '',
      detail: '',
    },
    userInfo: {}, // 编辑信息
    colletionIndex: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options)
    this.getArticle(options.id);
    this.getUser();
    this.upDateView(options.id);
  },
  getArticle(id) {
    db.collection('article').doc(id).get().then(res => {
      this.setData({
        news: res.data,
      })
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
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
          userInfo: res.result.user,
        })
        console.log(res, ']]]]]]') // 3
      },
      fail: console.error
    })
  },
  upDateView(id) {
    db.collection('article').doc(id).update({
      data: {
        reading: _.inc(1),
      }
    }).then(res => {
      console.log(res, 'updata')
    }).catch(err => {
      console.log(err)
    })
  },
  initColletion() {
    const colletionList = wx.getStorageSync('colletionList');
    if (!colletionList) {
      const ids = news.map(item => ({ id: item.id, colletioned: false}));
      wx.setStorageSync('colletionList', ids);
    } else {
      const colletion = colletionList.find(item => item.id == this.data.news.id);
      const colletionIndex = colletionList.findIndex(item => item.id == this.data.news.id);
      console.log(colletion)
      this.setData({
        ['news.collected']: colletion.colletioned,
        colletionIndex,
      })
    }
  },
  // 点赞收藏事件
  onColletionTap() {
    let { collected } = this.data.news;
    const news = wx.getStorageSync('colletionList');
    collected = !collected;
    this.setData({
      ['news.collected']: collected,
    })
    news[this.data.colletionIndex].colletioned = collected;
    wx.setStorageSync('colletionList', news);
    wx.showToast({
      title: collected ? '收藏成功！' : '取消收藏成功!',
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
  onShow(e) {
    // console.log(e)
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