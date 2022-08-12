// pages/downloadFile/downloadFile.ts
Page({
  filePath: 'https://img0.baidu.com/it/u=3545714853,3381929207&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800',
  /**
   * 页面的初始数据
   */
  data: {
    src: '',
    percent: 0,
  },

  /**
   * 下载操作
   */
  downloadOpt() {
    let that = this;
    const downloadTask = wx.downloadFile({
      url: this.filePath,
      success(res) {
        console.log('success', res)
        if (res.statusCode == 200) {
          that.setData({
            src: res.tempFilePath
          })
        }
      },
      fail(err) {
        console.log('fail', err)
      },
      complete(res) {
        console.log('complete', res)
      }
    })
    // 终止操作
    // downloadTask.abort();
    // 监听下载进度变化事件
    downloadTask.onProgressUpdate((res) => {
      console.log(res);
      that.setData({
        percent: res.progress
      })
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