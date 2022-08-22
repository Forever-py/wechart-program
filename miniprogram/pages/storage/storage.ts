// pages/storage/storage.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '',
    paramsValue: '',
    navParams: '',
    apiVal: ''
  },

  /**
   * 设置缓存
   */
  setStorage() {
    wx.setStorage({
      key: "name",
      data: "tom",
      encrypt: true,
      success(res) {
        console.log(res)
      }
    })
  },

  /**
    * 移除缓存
    */
  removeStorage() {
    wx.removeStorage({
      key: 'name',
      success(res) {
        console.log(res)
      }
    })
  },

  /**
    * 获取缓存
    */
  getStorageInfo() {
    wx.getStorage({
      key: "name",
      encrypt: true, // 若开启加密存储，setStorage 和 getStorage 需要同时声明 encrypt 的值为 true
      success(res) {
        console.log(res)
      }
    })
  },

  /**
   * 清除缓存数据
   * Sync 同步
   */
  clearStorage() {
    wx.clearStorage({
      success(res) {
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if (options.hasOwnProperty('title')) {
      this.setData({
        navParams: options.title
      })
    } else if (options.hasOwnProperty('api')) {
      this.setData({
        apiVal: options.api
      })
    }
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
      key: "userName",
      success(res) {
        that.setData({
          userName: res.data
        });
      }
    })
    wx.getStorage({
      key: 'nickName',
      success(res) {
        that.setData({
          paramsValue: res.data
        });

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
    wx.removeStorage({
      key: 'userName'
    });
    wx.removeStorage({
      key: 'nickName'
    });
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