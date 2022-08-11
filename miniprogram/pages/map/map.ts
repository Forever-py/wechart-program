// pages/map/map.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    controls: [{
      id: 1,
      iconPath: '/images/location.png',
      position: {
        left: 50,
        top: 200 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }],

    polyline: [{
      points: [
        { longitude: 113.3245211, latitude: 23.10229 },
        { longitude: 113.324520, latitude: 23.21119 }
      ],
      color:'#FF00DD',
      width: 2,
      dottedLine: true
    }],

    markers: [{
      id: 0,
      iconPath: '/images/location.png',
      latitude: 23.099994,
      longitude: 113.32450,
      width: 50,
      height: 50
    }]
  },

  /**
   * 标记被点击
   */
  markertap(e: any) {
    console.log(e)
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