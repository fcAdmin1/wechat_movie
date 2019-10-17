


wx.cloud.init({
  env: 'test-dwpnd'
})
const db = wx.cloud.database({
  env: 'test-dwpnd',
  // traceUser: true,
});

// // db.collection('todos').add({
// //   // data 字段表示需新增的 JSON 数据
// //   data: {
// //     description: "learn cloud database",
// //     due: new Date("2018-09-01"),
// //     tags: [
// //       "cloud",
// //       "database"
// //     ],
// //     done: false
// //   }
// // }).then(res => {
// //   console.log(res)
// // }).catch(err => {
// //   console.log(err)
// // })
// db.collection('todos').doc('25c59b425d4d45140fb8d9587008ade7').get().then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })

// db.collection('todos').where({
//   done: false,
//   style: {
//     color: 'yellow'
//   }
// }).get().then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })


// 云函数端获取一个集合的所有记录
// const cloud = require('wx-server-sdk');
// cloud.init();
// const db = cloud.database();
// const MAX_LIMIT = 100;

// wx.cloud.callFunction({
//   // 云函数名称
//   name: 'add',
//   // 传给云函数的参数
//   data: {
//     a: 1,
//     b: 2,
//   },
// })
//   .then(res => {
//     console.log(res.result) // 3
//   })
//   .catch(console.error)

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
    // wx.cloud.callFunction({
    //   // 云函数名称
    //   name: 'get',
    //   // 传给云函数的参数
    //   data: {
    //     a: 1,
    //     b: 2,
    //     c: {
    //       name: 'sdfsdfsdf'
    //     }
    //   },
    // }).then(res => {
    //   console.log(res.result, '----') // 3
    // }).catch(console.error)
  },
  getUserInfo(e) {
    console.log(e.detail.userInfo)
    wx.cloud.callFunction({
      // 云函数名称
      name: 'authorization',
      // 传给云函数的参数
      data: {
        user_info: e.detail.userInfo,
      },
      success: function (res) {
        console.log(res, ']]]]]]') // 3
      },
      fail: console.error
    })
    // console.log(e)
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