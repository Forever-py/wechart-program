// pages/accelerometer/accelerometer.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bar_state: 0,
    img_url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01dcb55ddf5e32a80121597263ce93.gif&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663730054&t=f0e9200c96901978423dab5efb84b7da',
    hasResult: 0,
    animation1: '',
    animation2: '',
    winWidth: 0,
    winHeight: 0
  },

  /**
   * 测试按钮
   */
  startAnimation() {
    let that = this;
    // x轴的位移100px
    let h1 = '35%';
    let h2 = '65%';


    if (this.data.bar_state == 1) {
      h1 = '40%';
      h2 = '40%';
      setTimeout(() => {
        that.setData({
          // 输入动画
          bar_state: 0,
          hasResult: 2
        });
        setTimeout(() => {
          that.setData({
            hasResult: 1
          })
        }, 4000)
      }, 400)
    } else {
      h1 = '25%';
      h2 = '55%';
      this.setData({
        bar_state: 1
      })
      setTimeout(() => {
        that.startAnimation();
      }, 600)
    }

    // 动画调用
    this.animation1.height(h1).step();
    this.animation2.top(h2).step();
    this.setData({
      animation1: this.animation1.export(),
      animation2: this.animation2.export()
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
    let that = this;
    this.initAnimation();

    // 重力加速度
    wx.onAccelerometerChange(res => {
      console.log(res)
      if (res.x > 7 && res.y >7) {
        wx.showToast({
          title: '摇一摇',
          icon: 'success',
          duration: 2000
        })
        that.startAnimation();
      }
    })

    // 获取信息
    wx.getSystemInfo({
      success(res) {
        console.log(res)
        that.setData({
          winWidth:res.windowWidth,
          winHeight:res.windowHeight
        })
      }
    })
  },

  initAnimation() {
    let that = this;

    // 实例化一个动画效果
    this.animation1 = wx.createAnimation({
      // 动画持续时间，单位ms， 默认值400
      duration: 400,
      /**
       * 运行轨迹 ease 动画以低速开始，然后加快，在结束前变慢
       */
      timingFunction: 'ease',
      transformOrigin: 'left top 0'
    })
    this.animation2 = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease',
      transformOrigin: 'left top 0'
    })
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