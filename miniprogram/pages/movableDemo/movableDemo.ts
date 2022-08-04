// pages/movableDemo/movableDemo.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [],
    startX: 0,
    startY: 0,
  },

  /**
   * 手指触摸开始，记录起点x坐标
   */
  touchstart(e: any) {
    this.data.items.forEach((v: { isTouchMove: boolean }) => {
      if (v.isTouchMove) {
        v.isTouchMove = false;
      }
    })

    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
      items: this.data.items
    })
  },

  /**
   * 滑动事件处理
   */
  touchmove(e: any) {
    var that = this;
    var index = e.currentTarget.dataset.index; // 当前索引
    var startX = that.data.startX; // 开始X坐标 
    var startY = that.data.startY; // 开始Y坐标 
    var touchmoveX = e.changedTouches[0].clientX; // 滑动变化坐标
    var touchmoveY = e.changedTouches[0].clientY; // 滑动变化坐标
    // 获取滑动角度
    var angle = that.angle({ X: startX, Y: startY }, { X: touchmoveX, Y: touchmoveY });
    that.data.items.forEach((v: { isTouchMove: boolean }, i: number) => {
      v.isTouchMove = false;
      // 滑动超过30度 return
      if (Math.abs(angle) > 30) return;
      if (i == index) {
        // 右滑
        if (touchmoveX > startX) {
          v.isTouchMove = false;
        } else {
          v.isTouchMove = true;
        }
      }
    })
    this.setData({
      items: that.data.items
    })
  },

  /**
   * 删除
   */
  del(e: any) {
    this.data.items.splice(e.currentTarget.dataset.index, 1);
    this.setData({
      items: this.data.items
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
    for (var i = 0; i < 10; i++) {
      this.data.items.push({
        content: i + '向左滑动删除，向左滑动删除，向左滑动删除，向左滑动删除，向左滑动删除，向左滑动删除',
        isTouchMove: false
      })
    }

    this.setData({
      items: this.data.items
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

  },

  /**
   * 计算角度的方法
   */
  angle: function (start: { X: number, Y: number }, end: { X: number, Y: number }) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y;
    //  返回角度 Math.atan() 返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  }
})