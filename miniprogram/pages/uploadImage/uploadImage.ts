// pages/uploadImage/uploadImage.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths: [],// 选取图片的临时地址
  },

  /**
   * 选取图片
   */
  chooseImage() {
    let that = this;
    wx.chooseImage({
      count: 2,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为 img 标签的 src 属性显示图片
        that.setData({
          tempFilePaths: res.tempFilePaths
        })
      }
    })
  },

  /**
   * 获取图片信息
   */
  getImageInfo() {
    wx.getImageInfo({
      src: this.data.tempFilePaths[0],
      success(res) {
        console.log(res)
      }
    })
  },
  /**
   * 预览图片
   */
  previewImage(res) {
    let currentSrc = res.currentTarget.dataset.hasOwnProperty('src') ? res.currentTarget.dataset.src : this.data.tempFilePaths[0]
    wx.previewImage({
      current: currentSrc, // 当前显示图片的 http 链接
      urls: this.data.tempFilePaths // 需要预览的图片 http 链接列表
    })
  },

  /**
   * 保存至手机相册
   */
  saveImage() {
    wx.saveImageToPhotosAlbum({
      filePath: this.data.tempFilePaths[0],
      success(res) {
        console.log(res)
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