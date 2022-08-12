// pages/chat/chat.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "Let's chat",
    headRight: "",
    headLeft: "/images/person.png",
    syas: [
      {
        isay: '你好',
        robot: '我是小七，来跟我聊天吧',
      },
    ]
  },

  /**
   * 发送事件处理函数
   */
  converSation(e) {
    let that = this;
    let obj = {},
      isay = e.detail.value.says,
      syas = this.data.syas,
      length = syas.length,
      key = '机器人id'; // 在线聊天的机器人的id号
    console.log(e.detail.value.says)

    wx.request({
      url: 'http://www.tuling123.com/openapi.api?key=' + key + '&info=' + isay,
      success(res) {
        let tuling = res.data.text;
        obj.robot = tuling;
        obj.isay = isay;
        syas[length] = obj;
        that.setData({
          syas: syas
        })
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
    let that = this;
    wx.getUserInfo({
      success(res) {
        that.setData({
          headRight: res.userInfo.avatarUrl
        })
        console.log(res.userInfo.avatarUrl)
      }
    })
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