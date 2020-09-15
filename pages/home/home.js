// pages/home/home.js
import request from '../../network/network.js'
Page({
  showloading(){
    wx.showLoading({
      title:'加载2....',
      mask:true
    }),
    setTimeout(()=>{
      wx.hideLoading();
    },2000)
  },
  clickitem(){
    wx.showToast({
      title: '加载ing.',
      duration:3000,
      icon:'loading',
      mask:true
      // 当我们点击弹窗的时候，点其他按钮是没有反应的
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    request({
      url:'http://123.207.32.32:8000/home/multidata',
    }).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
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