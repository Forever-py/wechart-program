// pages/backgroundMusic/backgroundMusic.ts
const audioUrl = 'https://img.tukuppt.com/newpreview_music/09/04/11/5c8b0727c2a8c1207.mp3';

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 播放背景音乐
   */
  play() {
    wx.playBackgroundAudio({
      dataUrl: audioUrl,
      title: '此时此刻',
      coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
    });

    wx.onBackgroundAudioPlay(() => {
      console.log('开始播放歌曲')
    })
  },
  /**
   * 暂停背景音乐
   */
  pause() {
    wx.pauseBackgroundAudio();

    wx.onBackgroundAudioPause(() => {
      console.log('暂停播放歌曲')
    });
  },

  /**
   * 停止背景音乐
   */
  stop() {
    wx.stopBackgroundAudio();

    wx.onBackgroundAudioStop(() => {
      console.log('停止播放歌曲')
    });
  },

  /**
   * 指定播放背景音乐
   */
  seek() {
    wx.seekBackgroundAudio({
      position: 30
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