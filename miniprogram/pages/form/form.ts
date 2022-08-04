// pages/form/form.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'tom', value: '汤姆' },
      { name: 'jerry', checked: 'true', value: '杰瑞' },
      { name: 'mary', value: '玛丽' }
    ],
    radioItems: [
      { name: 'tom', value: '汤姆' },
      { name: 'jerry', checked: 'true', value: '杰瑞' },
      { name: 'mary', value: '玛丽' }
    ]
  },

  phonenumber(e: any) {
    console.log(e)
  },

  checkboxFun(e: any) {
    console.log(e);
  },

  onstatusChange(e: any) {
    const formats = e.detail;
    console.log(e);
  },

  /**
   * 提交事件
   */
  formSubmit(e: any) {
    console.log(e.detail.value);
    // 获取数据

    // 处理数据

    // 提交数据
  },

  /**
   * 重置表单
   */
  formReset(e: any) {
    console.log(e)
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