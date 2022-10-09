const app = getApp();
const util = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    codeText: '',
    tempFilePath: ''
  },
  
  bindInput(e) {
    this.setData({
      codeText: e.detail.value
    })
  },

  /**
   * 生成二维码
   */
  onGenerate() {
    let that = this;
    wx.downloadFile({
      url: "http://qr.topscan.com/api.php?text=" + this.data.codeText,
      success(res) {
        console.log(res)
        that.setData({
          tempFilePath: res.tempFilePath
        })
      },
      fail(err) {
        console.error(err)
      }
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
    const that = this;
wx.getStorage({
  key: 'scanLogs',
  success(res) {
    that.setData({
      scanLogs: (res.data || []).map(n => {
        n.date = util.formatTime(n.date)
      })
    })
  }
})
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