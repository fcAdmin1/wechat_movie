// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: 'test-dwpnd',
})
const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();
  const { OPENID } = wxContext;
  const user = await db.collection('users').where({
    open_id: OPENID,
  }).get();
  if (user.data.length === 0) {
    const db_result = await db.collection('users').add({
      data: {
        ...event.user_info,
        open_id: OPENID,
      }
    });
    return {
      db_result,
      msg: '注册成功！'
    }
  }
  console.log(user)
  
  return {
    user,
    msg: '该用户已经注册'
  }
}