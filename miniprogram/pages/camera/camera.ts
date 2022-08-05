// pages/camera/camera.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:''
  },

  /**
   * 拍照
   */
  takePhoto() {
    let that = this;
    // 获取相机对象
    const ctx =  wx.createCameraContext();
    // 通过接口调用拍照方法
    ctx.takePhoto({
      quality:'high',
      success:(res)=> {
        that.setData({
          src: res.tempImagePath
        })
      },
      fail(e) {
        console.log(e);
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