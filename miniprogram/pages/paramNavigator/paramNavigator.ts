// pages/paramNavigator/paramNavigator.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  storage() {
    // 设置缓存
    wx.setStorage({
      key: 'nickName',
      data: 'Forget'
    })

    // 跳转
    wx.navigateTo({
      url: '/pages/storage/storage'
    })
  },

  /**
   * api传值
   */
  wxapi() {
    wx.navigateTo({
      url: '/pages/storage/storage?api=navigateTo',
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