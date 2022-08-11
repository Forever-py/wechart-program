// pages/canvas/canvas.ts
Page({
  // 起始点位置
  startX: 0, // 保存x坐标轴变量
  startY: 0, // 保存y坐标轴变量
  isClear: false, // 是否启用橡皮擦标记
  /**
   * 页面的初始数据
   */
  data: {
    pen: 3, // 画笔的粗细默认值
    color: '#000' // 画笔的默认颜色
  },

  /**
   * 触摸起始事件
   */
  touchStart(e) {
    // 获取当前的坐标位置
    this.startX = e.changedTouches[0].x;
    this.startY = e.changedTouches[0].y;
    // 创建绘图上下文对象
    this.context = wx.createContext();

    if (!this.isClear) { // 不启用橡皮差
      this.context.setStrokeStyle(this.data.color); // 设置颜色
      this.context.setLineWidth(this.data.pen); // 设置笔触
      this.context.setLineCap('round'); // 让线条圆润
      this.context.beginPath();  // 开始绘制
    } else {
      this.context.setStrokeStyle('#f8f8f8'); // 设置为画布的颜色， 原理：利用查过的地方填充为画布的颜色，使其一直，从而达到橡皮檫的效果
      this.context.setLineCap('round'); // 让线条圆润
      this.context.setLineJoin('round'); // 设置两条线交叉的位置
      this.context.setLineWidth(20); // 设置笔的粗细
      this.context.save(); // 保存当前坐标轴的缩放，旋转，平移信息
      this.context.arc(this.startX, this.startY, 5, 0, 2 * Math.PI, true); // 添加一个弧形路径到当前路径，顺时针绘制，这里总共360度 圆形
      this.context.fill(); // 对当前路径开始填充
      this.context.restore(); // 恢复之前保存过的坐标轴的缩放、旋转和平移信息
    }
  },
  /**
   * 触摸的移动事件
   */
  touchMove(e) {
    // 获取移动后的新坐标
    var startX1 = e.changedTouches[0].x;
    var startY1 = e.changedTouches[0].y;

    if (this.isClear) {
      this.context.save();
    }

    this.context.moveTo(this.startX, this.startY); // 把路径移动到画布中的指定点，但不创建线条
    this.context.lineTo(startX1, startY1); // 添加一个新点，然后在画布中创建从该点到最后指定点的线条
    this.context.stroke(); // 需要进行路径描边（内存完成）

    if (this.isClear) {
      this.context.restore(); // 恢复之前保存过的坐标轴的缩放、旋转和平移信息
    }

    // 重新设置坐标点 
    this.startX = startX1;
    this.startY = startY1;

    // 绘制
    wx.drawCanvas({
      canvasId: 'myCanvas',
      reserve: true,
      actions: this.context.getActions() // 获取绘图动作的数组
    })
  },

  touchEnd() {
  },

  // 改变笔的粗细
  penSelect(e) {
    this.setData({
      pen: parseInt(e.currentTarget.dataset.param)
    })
  },

  /**
   * 改变笔的颜色
   */
  colorSelect(e) {
    this.setData({
      color: e.currentTarget.dataset.param
    })
  },

  /**
   * 橡皮状态
   */
  clearCanvas() {
    if (this.isClear) this.isClear = false;
    else this.isClear = true;
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