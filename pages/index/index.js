import { news } from '../../dbBase/new.js';

wx.cloud.init({
  env: 'test-dwpnd'
})
const db = wx.cloud.database({
  env: 'test-dwpnd',
  // traceUser: true,
});

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
    articleList: [], // 文章列表
    list: [],
    test: {
      name: 'james',
      info: {
        phone: '19089786756'
      }
    }
  },
  swiperChange() {
    // console.log(111);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // this.setData({
    //   articleList: news
    // })
    this.getData();

  },
  getData(){
    // db.collection('article').count();
    db.collection('article').where({}).get().then(res => {
      console.log(res.data[0]._id)
      db.collection('users').doc('26b301645d4fbb4a114ae60202109c67').get().then(rs => {
        console.log(res)
        this.setData({
          list: res.data.map(item => {
            return {
              ...item,
              user: rs.data,
            }
          })
        })
      })
    });
    // this.setData({
    //   list: res.data,
    // });
    return {}
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
    const item = 
    this.setData({
      ['test.name']: '是的',
    })
    this.setData({
      ['imgUrls[0]']: 'https://s2.ax1x.com/2019/06/26/ZekLTS.png',
    })
    this.setData({
      ['test.info.phone']: '18373144744'
    })
  },
  toDetail(e) {
    const { id } = e.currentTarget.dataset;
    console.log(e);
    wx.navigateTo({
      url: 'news/index?id=' + id,
    })
    console.log(e)
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
