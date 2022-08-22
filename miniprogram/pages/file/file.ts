// pages/file/file.ts
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 保存文件
   * 保存文件至本地,会移动临时文件,保存后临时文件将不可用
   */
  saveFile() {
    wx.chooseImage({
      success(res) {
        console.log(res)
        const tempFilePaths = res.tempFilePaths;

        // 保存
        wx.saveFile({
          tempFilePath: tempFilePaths[0],
          success(res) {
            const savedFilePath = res.savedFilePath
            console.log(savedFilePath)

            // 图片存储后的路径
            // windows C:\Users\Y18\AppData\Local\微信开发者工具\User Data
          }
        })

        // 保存至相册 图片目录
        // wx.saveImageToPhotosAlbum({
        //   filePath: tempFilePaths[0],
        //   success(res) {
        //     console.log(res)
        //   },
        //   fail(res) {
        //     console.error(res)
        //   }
        // })

        // 保存至视频目录
        // wx.saveVideoToPhotosAlbum({
        //   filePath: tempFilePaths[0],
        //   success(res) {
        //     console.log(res)
        //   },
        //   fail(res) {
        //     console.error(res)
        //   }
        // })
      }
    })
  },

  /**
   * 获取本地缓存临时文件
   */
  getFileInfo() {
    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths;
        wx.getFileInfo({
          filePath: tempFilePaths[0],
          success(res) {
            console.log(res); // size 字节为单位  digest:计算算法使用md5/sha1 默认md5
          }
        })
      }
    })
  },

  /**
   * 获取已缓存的文件列表
   */
  getSavedFiledList() {
    wx.getSavedFileList({
      success(res) {
        console.log(res.fileList)
      }
    })
  },

  /**
   * 清除本地缓存文件
   */
  removeSavedFile() {
    wx.getSavedFileList({
      success(res) {
        if (res.fileList.length > 0) {
          res.fileList.forEach(item => {
            wx.removeSavedFile({
              filePath: item.filePath,
              complete(res) {
                console.log(res)
              }
            })
          })
        }
      }
    })
  },

  /**
   * 打开文档
   */
  openDocument() {
    wx.downloadFile({
      url: '', // 下载路径
      success: function (res) {
        const filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功')
          }
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