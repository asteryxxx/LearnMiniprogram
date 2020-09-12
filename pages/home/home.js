// pages/home/home.js
Page({
  countevent:function(event){
    console.log("被点击了。。。"+event)
    // this.data.count += 1;
    // 这个做不到数据响应式更新，要用setData才行
    this.setData({
      count: this.data.count + 1
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
      name:'lx',
      age:18,
      count:0,
      stus:[
        {id:110,name:'lx1',age:18},
        {id:111,name:'lx2',age:28}
        ,{id:112,name:'lx3',age:38},
        {id:113,name:'lx5',age:48}  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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