const cloud = require('wx-server-sdk')
cloud.init({
  env: 'test-dwpnd',
})
const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  const { OPENID } = cloud.getWXContext()
  const user = await db.collection('users').where({
    open_id: OPENID,
  }).get();
  return {
    event,
    OPENID,
    user: user.data[0],
  }
}