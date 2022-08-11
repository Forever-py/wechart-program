// pages/mapDemo/mapDemo.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 23.099994,
    longitude: 113.32450,
    markers: [{
      id: 1,
      latitude: 23.099994,
      longitude: 113.32450,
      name: 'T.I.T创意园'
    }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      iconPath: '/images/location.png',
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      iconPath: '/images/location.png',
    }],
  },

  /**
   * 获取位置
   */
  getCenterLocation() {
    this.mapCtx.getCenterLocation({
      success(res) {
        console.log('获取位置', res.longitude, res.latitude)
      }
    })
  },

  /**
   * 移动位置
   */
  moveToLocation() {
    this.mapCtx.moveToLocation();
  },

  /**
   * 移动标注
   */
  translateMarker() {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        longitude: 113.3345211,
        latitude: 23.10229
      },
      animationEnd() {
        console.log('end');
      }
    })
  },

  /**
   * 缩放
   */
  includePoints() {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        longitude: 113.3345211,
        latitude: 23.10229
      }, {
        longitude: 113.3345211,
        latitude: 23.00229
      }]
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
    this.mapCtx = wx.createMapContext('myMap');
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