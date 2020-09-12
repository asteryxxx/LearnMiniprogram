// pages/home/home.js
Page({
  onPageScroll(obj){
    console.log(obj);
  },
  onReachBottom(){
    console.log('到达底部')
  },
  onPullDownRefresh(){
    console.log("下拉刷新")
  },
  /**
   * 页面的初始数据
   */
  data: {
    message:"哈哈哈",
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onload')
    wx.request({
      url: 'http://123.207.32.32:8000/home/multidata',
      success:(res)=>{
        console.log(res)
       const list = res.data.data.banner.list;
       this.setData({
         list:list
       })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
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