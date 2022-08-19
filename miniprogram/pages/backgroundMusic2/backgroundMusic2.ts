// pages/backgroundMusic2/backgroundMusic2.ts
const BackgroundAudioManager = wx.getBackgroundAudioManager();

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  play() {
    BackgroundAudioManager.title = '此时此刻'
    BackgroundAudioManager.epname = '此时此刻'
    BackgroundAudioManager.singer = '许巍'
    BackgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
    // 设置了 src 之后会自动播放
    BackgroundAudioManager.src = 'https://img.tukuppt.com/newpreview_music/09/04/11/5c8b0727c2a8c1207.mp3'
    BackgroundAudioManager.play();
    BackgroundAudioManager.onPlay(() => {
      console.log('开始播放歌曲')
    })
  },
  pause() { BackgroundAudioManager.pause() },
  stop() { BackgroundAudioManager.stop() },
  seek() { BackgroundAudioManager.seek(0.1) },
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