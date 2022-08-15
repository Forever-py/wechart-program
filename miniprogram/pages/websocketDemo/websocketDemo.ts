// pages/websocketDemo/websocketDemo.ts
Page({
  message: '',
  /**
   * 页面的初始数据
   */
  data: {
    responseString: '<h1>This is content area</h1>'
  },

  /**
   * 数据获取操作
   */
  recodeMessage(e) {
    this.message = e.detail.value;
  },

  /**
   * 发送消息
   */
  sendMessage() {
    let that = this;
    // 在线服务器位置 http://coolaf.com/tool/chattest

    // 发送socket数据
    wx.sendSocketMessage({
      data: that.message
    })


    // 监听 WebSocket 接受到服务器的消息事件
    wx.onSocketMessage((data) => {
      console.log('[接收到服务器的数据]', data);
      that.setData({
        responseString: `<h1>[接收到服务器的数据]${data.data}</h1>`
      })
    })

    // 监听 WebSocket 错误事件
    wx.onSocketError((err) => {
      console.log('[服务器错误]', err)
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

    // 建立连接
    wx.connectSocket({
      url: 'ws://82.157.123.54:9010/ajaxchattest'
    })

    // 连接成功与否的判断
    wx.onSocketOpen(() => {
      // 发送socket数据
      console.log('通讯连接成功')
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    // 关闭 webSocket 
    wx.closeSocket({})

    
    // 监听 WebSocket 连接关闭事件
    wx.onSocketClose(function (res) {
      console.log('WebSocket 已关闭！', res)
    })
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