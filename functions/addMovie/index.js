// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: 'test-dwpnd',
})
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const { OPENID } = cloud.getWXContext()
  const user = await db.collection('users').where({
    open_id: OPENID,
  }).get();
  // const data = 
  const db_result = await db.collection('article').add({
    data: {
      user_id: user.data[0]._id,
      ...event.movieInfo,
      reading: 0,
      collection: 0,
    }
  });
  return {
    user,
    user_id: user._id,
    formData: event.movieInfo,
    // openid: wxContext.OPENID,
    // appid: wxContext.APPID,
    // unionid: wxContext.UNIONID,
  }
}