// pages/loading/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadingHidden: true
  },

  /**
   * 控制loading组件 显示与隐藏
   */
  controlLoad() {
    let that = this;
    this.setData({
      loadingHidden: false
    })
    setTimeout(() => {
      that.setData({
        loadingHidden: true
      })
    }, 2000)
  },

  showToast() {
    wx.showToast({
      title: '加载中'
    })
    setTimeout(() => {
      wx.hideLoading()
    }, 2000)
  },

  showLoading() {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 2000
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})