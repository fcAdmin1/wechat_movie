const cloud = require('wx-server-sdk')
cloud.init({
  env: 'test-dwpnd',
})
const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const article = db.collection('article').where({}).get();
  return {
    article,
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}