// pages/recorderDemo/recorderDemo.ts
const recorderManager = wx.getRecorderManager();
const innerAudioContext = wx.createInnerAudioContext();

Page({
  tempFileVoice: '',
  tempFilePath: '',
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 记录声音
   */
  recordVoice() {
    let that = this;
    wx.startRecord({
      success(res) {
        that.tempFileVoice = res.tempFilePath
        console.log('[success]', res)
      },
      fail(err) {
        console.log('[fail]', err)
      }
    })
    setTimeout(function () {
      wx.stopRecord() // 结束录音
    }, 5000)
  },

  /**
   * 播放音频
   */
  playVoice() {
    wx.playVoice({
      filePath: this.tempFileVoice,
      success(res) {
        console.log('[success]', res)
      },
      fail(err) {
        console.log('[fail]', err)
      }
    })
  },


  /**
   * 开始录音
   */
  start() {
    // 开始录音
    recorderManager.start({
      duration: 10000, // 指定录音的时长，单位ms
      sampleRate: 16000, // 采样率 
      numberOfChannels: 1, // 录音通道数
      encodeBitRate: 96000, // 编码码率
      format: 'mp3', // 音频格式 有效值 aac/MP3
      frameSize: 50 // 指定帧大小
    })

    // 监听录音开始事件
    recorderManager.onStart(() => {
      console.log('开始录音')
    })

    // 监听录音错误事件
    recorderManager.onError((err) => {
      console.log('录音出错', err)
    })
  },

  /**
   * 停止录音
   */
  stop() {
    let that = this;
    // 停止录音
    recorderManager.stop();
    // 监听录音结束事件
    recorderManager.onStop((res) => {
      that.tempFilePath = res.tempFilePath;
      console.log('停止录音', res);
    })
  },

  /**
   * 播放录音
   */
  play() {
    innerAudioContext.autoplay = true;
    innerAudioContext.src = this.tempFilePath;
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
    innerAudioContext.onError((err) => {
      console.log('播放失败', err)
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