// pages/event/event.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    eventFun: 'tapName'
  },
  /**
   * 手指触摸后马上离开
   */
  tapName(event: any) {
    console.log("tapName show", event)
  },
  /**
   * 手指触摸后，超过350ms再离开（推荐使用 longpress 事件代替）
   */
  longtap() {
    console.log('长按')
  },
  handleTap1() {
    console.log('outer view')
  },
  handleTap2() {
    console.log('middle view')
  },
  handleTap3() {
    console.log('inner view')
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