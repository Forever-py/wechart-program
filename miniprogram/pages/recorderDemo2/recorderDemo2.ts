// pages/recorderDemo2/recorderDemo2.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    j: 1, // 帧动画的初始图片
    isSpeaking: false,
    voices: []
  },

  /**
   * 按钮按下
   */
  touchdown() {
    console.log('手指按下', new Date().toLocaleTimeString())
    let that = this;
    // 麦克风的帧动画
    speaking.call(this);

    this.setData({
      isSpeaking: true
    });

    // 开始录音
    wx.startRecord({
      success(res) {
        // 临时路径
        let tempFilePath = res.tempFilePath;
        console.log('tempFilePath' + tempFilePath);
        // 持久保存
        wx.saveFile({
          tempFilePath: tempFilePath,
          success(res) {
            // 持久路径
            // 本地文件存储大小限制在100M
            let saveFilePath = res.savedFilePath;
            console.log(saveFilePath)
          }
        })

        // 成功提示
        wx.showToast({
          title: '录音成功',
          icon: 'success',
          duration: 1000
        })

        // 获取录音的音频列表
        wx.getSavedFileList({
          success(res) {
            console.log(res);
            let voices = [];
            for (let i = 0; i < res.fileList.length; i++) {
              // 格式化事件
              let createTime = res.fileList[i].createTime;
              // 音频大小B转为kb
              let size = (res.fileList[i].size / 1024).toFixed(2);
              // 建立对象存储与voices
              let voice = {
                filePath: res.fileList[i].filePath,
                createTime: createTime,
                size: size
              }

              // 数组合并
              voices = voices.concat(voice)
            }
            that.setData({
              voices: voices
            })
          }
        })
      },
      fail() {
        wx.showModal({
          title: '提示',
          content: '录音失败',
          showCancel: false,
          success(res) {
            if (res.confirm) {
              console.log('你已经知道了');
              return;
            }
          }
        })
      }
    })
  },

  /**
   * 按钮抬起
   */
  touchup() {
    let that = this;
    // 关闭麦克风
    that.setData({
      isSpeaking: false,
    })

    // 清除麦克风帧动画
    clearInterval(this.timer);

    // 结束录音
    wx.stopRecord();
  },

  /**
   * 去播放
   */
  gotoPlay(ev) {
    console.log(ev.currentTarget.dataset.key)
    const filePath = ev.currentTarget.dataset.key;
    // 点击开始播放
    wx.showToast({
      title: '开始播放',
      icon: 'success',
      duration: 1000
    })

    // 播放
    wx.playVoice({
      filePath: filePath,
      success() {
        wx.showToast({
          title: '播放结束',
          icon: 'success',
          duration: 1000
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

// 麦克风的帧动画
function speaking() {
  let _this = this;
  // 话筒帧动画
  let i = 1;
  _this.timer = setInterval(() => {
    i++;
    i = i % 3;
    _this.setData(() => {
      j: i
    })
  }, 200)
}