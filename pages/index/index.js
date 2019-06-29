Page({
  data: {
    swiperConfig: {
      indicatorDots: true,
      indicatorColor: 'rgba(0, 0, 0, 0.3)',
      indicatorActiveColor: "#0491FF",
      autoplay: true,
      interval: 5000,
      duration: 1000,
      circular: true,
    },
    imgUrls: [
      '/images/banner/banner.png',
      '/images/banner/banner.png',
      '/images/banner/banner.png'
    ],
    articleList: [
      {
        date: "会飞的鱼",
        author: '会飞的鱼',
        userInfo: '这里应该有一段介绍',
        title: "冷艳酷炫！吕克贝松新片曝角色海报超模杀手锁定目标 《安娜》酷劲不输尼基塔",
        imgSrc: "https://s2.ax1x.com/2019/06/26/ZekLTS.png",
        avatar: "/images/avatar/1.png",
        content: "时光网讯 前作《星际特工》扑街巨亏之后，吕克·贝松带着他的导演新片《安娜》重返好莱坞。影片近日曝光了角色海报，杀手的狙击镜分别锁定萨莎·露丝、卢克·伊万斯、海伦·米伦与希里安·墨菲四位主角。 ",
        reading: "112",
        collection: "96",
        headImgSrc: "/images/post/crab.png",
        author: "林白衣",
        dateTime: "24小时前",
        detail: "菊黄蟹正肥，品尝秋之味。徐志摩把“看初花的荻芦”和“到楼外楼吃蟹”并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“螯封嫩玉双双满，壳凸红脂块块香”；在《世说新语》里，晋毕卓更是感叹“右手持酒杯，左手持蟹螯，拍浮酒船中，便足了一生矣。”漫漫人生长路，美食与爱岂可辜负？于是作为一个吃货，突然也很想回味一下属于我的味蕾记忆。记忆中的秋蟹，是家人的味道，弥漫着浓浓的亲情。\n\n是谁来自山川湖海，却囿于昼夜，厨房与爱？ 是母亲，深思熟虑，聪明耐心。吃蟹前，总会拿出几件工具，煞有介事而乐此不疲。告诉我们螃蟹至寒，需要佐以姜茶以祛寒，在配备的米醋小碟里，亦添入姜丝与紫苏，前者驱寒后者增香。泡好菊花茶，岁月静好，我们静等。",
        id: 0,
        videoSource: 'http://vhotwsh.video.qq.com/i0202y6e148.p201.1.mp4?level=0&fmt=shd&platform=10901&vkey=520551C28075C48C444138DE00D7A7384151537245DEDDAB241D8950357C6FB4EE12835973ABE6079B1258B644DDF5023FE148E1FB009784A2E7459E8A66087D341C8E6EA72D29C7581AA379A78C29967BF43A2049A8D8D3D28BD1F3A851227045AB42418E97EB11974C4D941A532A48A5BEC6448EA948A2&sdtfrom='
      },
      {
        title: "时光网实地探访“八百壮士”遗址上海四行仓库保存完好 英雄故事未被遗忘",
        content: "在上海电影节期间，时光网实地探访了“八百壮士”当年守卫的四行仓库的遗址，重温这段滚烫的历史。",
        imgSrc: "https://s2.ax1x.com/2019/06/26/ZeApyq.png",
        reading: 62,
        detail: "一 “李安是一位绝不会重复自己的导演，本片将极富原创性”李安众所瞩目的新片《比利林恩漫长的中场休息》，正式更名《半场无战事》。预告片首次曝光后，被视作是明年奥斯卡种子选手。该片根据同名畅销书改编。原著小说荣获美国国家图书奖。也被BBC评为21世纪最伟大的12本英文小说之一。影片讲述一位19岁德州男孩的比利·林恩入伍参加伊战，在一次交火中他大难不死，意外与战友成为大众的关注焦点，并被塑造成英雄。之后他们返回国内，在橄榄球赛中场休息时授勋。这名战争英雄却面临前所未有的心灵煎熬……李安为什么选中这部电影来拍？因为李安想要挑战前所未有的技术难题：以120帧每秒的速度、4K、3D技术全面结合，来掀起一场电影视觉革命。什么意思？所谓“电影是24格每秒的谎言”，其中的24格，就是帧数。",
        collection: 92,
        dateTime: "24小时前",
        headImgSrc: "/images/post/bl.png",
        author: "迷的城",
        date: "Nov 20 2016",
        avatar: "/images/avatar/1.png",
        id: 1,
        videoSource: 'http://vhotwsh.video.qq.com/i0202y6e148.p201.1.mp4?level=0&fmt=shd&platform=10901&vkey=520551C28075C48C444138DE00D7A7384151537245DEDDAB241D8950357C6FB4EE12835973ABE6079B1258B644DDF5023FE148E1FB009784A2E7459E8A66087D341C8E6EA72D29C7581AA379A78C29967BF43A2049A8D8D3D28BD1F3A851227045AB42418E97EB11974C4D941A532A48A5BEC6448EA948A2&sdtfrom='
      },
    ],
    test: {
      name: 'james',
      info: {
        phone: '19089786756'
      }
    }
  },
  swiperChange() {
    // console.log(111);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('生命周期函数--监听页面加载');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log('生命周期函数--监听页面初次渲染完成');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log('生命周期函数--监听页面显示');
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log('生命周期函数--监听页面隐藏');
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log('生命周期函数--监听页面卸载');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    console.log('监听用户下拉动作');
    const item = 
    this.setData({
      ['test.name']: '是的',
    })
    this.setData({
      ['imgUrls[0]']: 'https://s2.ax1x.com/2019/06/26/ZekLTS.png',
    })
    this.setData({
      ['test.info.phone']: '18373144744'
    })
  },
  toDetail(e) {
    const { id } = e.currentTarget.dataset;
    console.log(e);
    wx.navigateTo({
      url: 'news/index?id=' + id,
    })
    console.log(e)
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log('页面上拉触底事件的处理函数');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    console.log('====')
  }
})
