// pages/enentDemo/eventDemo.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navigatorArr: ['王者荣耀', '球球大作战', '部落冲突', '棋牌世界', '街头篮球', '火影忍者', '皇室战争', '梦幻西游', '穿越火线'],
    swiperHeight: 0,
    currentTab: 0,
    classArr: ['color-red', 'color-black'],
    // classArr: ['color-red', 'color-black', 'color-black', 'color-black', 'color-black', 'color-black', 'color-black', 'color-black', 'color-black']
  },
  campusActivity(event: any) {
    // let classActivityArr = [];
    // for (let i = 0; i < this.data.navigatorArr.length; i++) {
    //   if (i == event.currentTarget.dataset.index) classActivityArr.push('color-red')
    //   else classActivityArr.push('color-black')
    // }
    // this.setData({ currentTab: event.currentTarget.dataset.index, classArr: classActivityArr });
    this.setData({ currentTab: event.currentTarget.dataset.index });
  },
  changeSwiper(event: any) {
    this.setData({ currentTab: event.detail.current });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        let clientHeight = res.windowHeight;
        let clientWidth = res.windowWidth;
        let ratio = 750 / clientWidth;
        let rpxHeight = clientHeight * ratio;
        that.setData({ swiperHeight: rpxHeight });
      }
    })
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