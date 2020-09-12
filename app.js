App({
// app实例只有一个，并且是全局共享的（单例对象），可以放共享数据
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */

  //  全局的变量直接key:value，value可以用对象{}声明
  globaldata:{
    name:"lxlxlxlx",
    age:18
  },
  onLaunch: function () {
    wx.getUserInfo({
      success:function(res){
        console.log(res);
      }
    })
    // setTimeout(() => {
    //    const err = new Error();
    //    throw err;
    // }, 1000);
  },
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   * 【小程序会在后台存活2个小时，如果你退出再点进去就不会触发onLaunch的生命周期函数，会触发onShow函数。2个小时后再点进去就会触发onLaunch】
   */
  onShow: function (options) {
    console.log("界面显示出来了:onshow。。")
    switch(options.scene){
      case 1001:
        console.log("1001")
        break;
      case 1005:
        console.log("1005")
        break;
    }
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
     console.log('error.........')
  }
})
