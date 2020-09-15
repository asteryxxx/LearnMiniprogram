export default function request(options){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: options.url,
      method:options.method||'get',
      data:options.data||{},
      success:resolve,
      // 注意resolve本身就是回调函数
      fail:reject
    })
  })
}