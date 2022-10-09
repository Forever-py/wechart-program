// pages/clipBoard/clipBoard.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datail: '床前明月光，疑是地上霜；举头望明月，低头思故乡。'
  },
  copyTBL() {
    let that = this;
    wx.setClipboardData({
      data: this.data.datail,
      success(res) {
        wx.showModal({
          title: '提示',
          content: '复制成功'
        });
      }
    })
  },

  /**
   * 显示
   */
  show() {
    wx.getClipboardData({
      success(res) {
        console.log(res.data) // data
        wx.showModal({
          title: '复制内容',
          content: res.data
        });
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

    // 监控内存的警告
    wx.onMemoryWarning(() => {
      console.log('内存警告');

      // 清除缓存
      wx.clearStorage();

      wx.showToast({
        title: '玩的太久了，手机顶不住了'
      })
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