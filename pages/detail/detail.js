// pages/detail/detail.js
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
    console.log(options)
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
// 因为不知道是点了箭头还是按钮返回，可以在这里监听页面销毁
    // 如果想传参数给首页的话
    console.log('tuichu...')
    const pages = getCurrentPages()
    //用于获取当前页面栈的实例
    console.log(pages)
  //  0: Ze {__wxExparserNodeId__: "2d4710d1", __route__: "pages/home/home"
   // 1: Ze {__wxExparserNodeId__: "2d285232", __route__: "pages/detail/detail"
    const home = pages[pages.length-2];
    home.setData({
      title:'我是修改后的hehehehhe'
    })
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