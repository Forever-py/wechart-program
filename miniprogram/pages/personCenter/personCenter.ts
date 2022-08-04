// pages/personCenter/personCenter.ts
Page({
  // 定义表单数据
  personName: '',
  password: '',
  gender: '',
  hobby: [],
  birthday: '2022-08-04',
  studyYears: 0,
  isMenber: false,
  argeement: '',

  /**
   * 页面的初始数据
   */
  data: {
    birth: new Date().toLocaleDateString()
  },

  /**
   * 获取姓名
   */
  inputValue(e: any) {
    this.personName = e.detail.value;
  },

  /**
   * 获取密码
   */
  passwordValue(e: any) {
    this.password = e.detail.value;
  },

  /**
   * 获取性别
   */
  genderRadio(e: any) {
    this.gender = e.detail.value == 1 ? 'male' : 'female';
  },

  /**
   * 获取爱好
   */
  hobbyCheck(e: any) {
    this.hobby = e.detail.value;
  },

  /**
   * 获取生日
   */
  birthdayValue(e: any) {
    this.birthday = e.detail.value;
  },
  /**
   * 获取学习年限
   */
  studyYearsValue(e: any) {
    this.studyYears = e.detail.value;
  },
  /**
   * 获取学习年限
   */
  isMenberValue(e: any) {
    this.isMenber = e.detail.value;
  },

  /**
   * 提交按钮
   */
  regFormSubmit() {
    let memberData = {
      personName: this.personName,
      password: this.password,
      gender: this.gender,
      hobby: this.hobby,
      birthday: this.birthday,
      studyYears: this.studyYears,
      isMenber: this.isMenber,
      argeement: this.argeement,
    }

    if (memberData.personName == "") {
      wx.showModal({
        title: 'error',
        content: '姓名没有填写'
      })
      return;
    }

    // 向服务器提交数据(含云端)
    console.log(memberData)
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
    console.log(new Date().toLocaleDateString())
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