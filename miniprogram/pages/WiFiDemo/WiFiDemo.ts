// pages/WiFiDemo/WiFiDemo.ts
Page({
  userWifiName: '',
  userWifiPwd: '',
  /**
   * 页面的初始数据
   */
  data: {
    wifiList: []
  },

  /**
   * 连接wifi
   */
  connectWiFi(e) {

    // 获取用户输入的wifi账户和密码
    this.userWifiName = e.detail.value.wifiName;
    this.userWifiPwd = e.detail.value.wifiPwd;

    let that = this;

    // 检测手机型号 获得系统信息
    wx.getSystemInfo({
      success(res) {
        console.log(res)
        let system = -1;
        if (res.platform == 'android') {
          system = parseInt(res.system.substr(8))
        }
        if (res.platform == 'ios') {
          system = parseInt(res.system.substr(4))
        }
        if (res.platform == 'android' && system < 6) {
          // 提示手机不支持
          wx.showToast({
            title: '安卓手机当前版本不支持'
          })
          return;
        }
        if (res.platform == 'ios' && system < 11.2) {
          // 提示手机不支持
          wx.showToast({
            title: '苹果手机当前版本不支持'
          })
          return;
        }

        // 初始画wifi模块
        that.startWifi();
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

  },

  /**
   * 初始化wifi模块
   */
  startWifi() {
    let that = this;
    wx.startWifi({
      success(res) {
        console.log(res);
        // 连接
        that.Connected();
      },
      fail() {
        wx.showToast({
          title: '接口调用失败'
        })
      }
    })
  },

  /**
   * 连接wifi操作
   */
  Connected() {
    let that = this;
    wx.connectWifi({
      SSID: this.userWifiName, // wifi账户名
      password: this.userWifiPwd, // wifi连接密码
      success() {
        wx.showToast({
          title: 'wifi连接成功',
          duration: 2000
        })
      },
      fail() {
        wx.showToast({
          title: 'wifi连接失败',
          duration: 2000
        })
      }
    })
  },

  /**
   * 搜索wifi
   */
  startSearch() {
    let that = this;
    const getWifiList = () => {
      wx.getWifiList({
        success(res) {
          wx.onGetWifiList((res)=>{
            const wifiList = res.wifiList.map(wifi=> {
              const strength = Math.ceil(wifi.signalStrength * 4)
              return Object.assign(wifi, {strength})
            });
            console.log(res.wifiList)
            that.setData({wifiList})
          })
        },
        fail(err) {
          console.error(err)
        }
      })
    };

    const startWifi = () => {
      wx.startWifi({
        success: getWifiList,
        fail(err) {
          console.error(err)
        }
      })
    };

    // 获取系统信息
    wx.getSystemInfo({
      success(res) {
        console.log(res)
        const isIOS = res.platform === 'ios';
        if (isIOS) {
          wx.showModal({
            title: '提示',
            content: '由于系统限制，ios用户请手动先进入系统wifi页面，然后返回小程序',
            showCancel: false,
            success() {
              // 开启wifi搜索
              startWifi();
            }
          })
          return;
        }
        startWifi();
      }
    })
  }
})