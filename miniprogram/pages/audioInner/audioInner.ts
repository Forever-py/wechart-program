const myaudio = wx.createInnerAudioContext();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlay: false,
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://dl.stream.qqmusic.qq.com/C400003SC0S90IT7XE.m4a?guid=5811079000&vkey=BE9D90AC6FFB354E41E2819E176A3E2D60B5EDE5290839A0C2D201DD60CC29754425ADDB19232B347DE2CEDEF588557280DF717D76A3F799&uin=&fromtag=120032',
  },

  /**
   * 播放
   */
  play() {
    myaudio.play();
    this.setData({ isPlay: true });
  },

  /**
   * 暂停
   */
  stop() {
    myaudio.pause();
    this.setData({ isPlay: false });
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
    myaudio.src = this.data.src;
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