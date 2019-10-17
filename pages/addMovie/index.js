Page({
  data: {
    img: '',
    formData: {
      name: '',
      img_src: '',
      content: '',
      create_date: '',
    },
    error: ''
  },
  onLoad(options) {
    
  },
  onReady() {
    this.setData({
      error: '这是一个错误提示'
    })
  },
  onShow() {

  },
  bindTextAreaBlur(e){
    this.setData({
      'formData.content': e.detail.value,
    })
  },
  upFile() {
    wx.chooseImage({
      success: (res) => {
        console.log(res);
        const { tempFilePaths } = res;
        this.setData({
          img: tempFilePaths[0],
        });
        const fileArray = tempFilePaths[0].split('.');
        const fileSuffix = fileArray[fileArray.length - 1];
        console.log(fileSuffix);
        const fileName = new Date().getTime() + '' + (Math.floor(Math.random()) * 38475345);
        wx.cloud.uploadFile({
          cloudPath: fileName + '.' + fileSuffix, // 上传至云端的路径
          filePath: tempFilePaths[0], // 小程序临时文件路径
          success: res => {
            this.setData({
              'formData.img_src': res.fileID
            })
            // 返回文件 ID
            console.log(res.fileID)
          },
          fail: console.error
        })
        // 上传成功后会获得文件唯一标识符，即文件 ID，后续操作都基于文件 ID 而不是 URL。
      }
    })
  },
  // 绑电影名
  bindMovieName(e) {
    this.setData({
      'formData.name': e.detail.value,
    })
  },
  submit() {
    // 提交
    if (!this.data.formData.name) {
      wx.showToast({
        title: '请填写电影名！',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    if (!this.data.formData.content) {
      wx.showToast({
        title: '请填写电影描述！',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    if (!this.data.formData.img_src) {
      wx.showToast({
        title: '请上传图片！',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    this.setData({
      'formData.create_date': new Date(),
    })
    console.log(this.data.formData);
    wx.cloud.callFunction({
      // 云函数名称
      name: 'addMovie',
      // 传给云函数的参数
      data: {
        movieInfo: this.data.formData
      },
      success: (res) => {
        console.log(res, ']]]]]]') // 3
        wx.showToast({
          title: '上传成功！',
          icon: 'success',
          duration: 2000
        });
        this.setData({
          formData: {
            name: '',
            img_src: '',
            content: '',
            create_date: '',
          },
          img: '',
        })
      },
      fail: console.error
    })
  },
  onHide() {

  },
  onUnload() {

  },
  onPullDownRefresh() {

  },
  onReachBottom() {

  },
  onShareAppMessage() {

  }
})