//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    messages: [],
    news : [], 
    hasMore: true
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const messages = this.data.messages
    const news = this.data.news
    for (var i = 0; i < 2; i++) {
      messages.push({
        title: '免费送票！超有内涵的门票。',
        date: i + ' September',
        image: 'https://unsplash.it/400/300',
        summary: '最糟糕的，也许就是最幸运的。'
      })

      news.push({
        id: i,
        name: "索尼推《怪物猎人世界》限定版联动周边 又来骗钱？",
        publishTime: "2017-11-23",
        content: "《怪物猎人世界（Monster Hunter World）》将于2018年1月26日发售，登陆PS4平台。为了配合该游戏的推出，SONY将与CAPCOM合作推出一系列《怪物猎人世界》周边，包含音乐播放器、头戴式蓝牙耳机、便携蓝牙音箱等",
        images: [
          "http://img2.ali213.net/picfile/News/2017/11/24/584_2017112492834227.jpg",
          "",
        ]
      })
      
    }
    const slides = [
      { image: 'http://ww1.sinaimg.cn/mw690/006ThXL5ly1fj7zx3w751j30u00dmgy3.jpg', link: '' },
      { image: 'http://ww1.sinaimg.cn/mw690/006ThXL5ly1fj6ckx9tlwj30u00fqk8n.jpg', link: '/pages/list/list?cat=10' }
    ]
    this.setData({ messages, slides, news })
  },
  /**
 * 生命周期函数--监听页面初次渲染完成
 */
  onReady() {
    // const query = wx.createSelectorQuery()
    // query.select('#bottom').boundingClientRect()
    // query.exec(res => wx.pageScrollTo({ scrollTop: res[0].top + 200 }))
  },
  // onLoad: function () {
  // if (app.globalData.userInfo) {
  //   this.setData({
  //     userInfo: app.globalData.userInfo,
  //     hasUserInfo: true
  //   })
  // } else if (this.data.canIUse){
  //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //   // 所以此处加入 callback 以防止这种情况
  //   app.userInfoReadyCallback = res => {
  //     this.setData({
  //       userInfo: res.userInfo,
  //       hasUserInfo: true
  //     })
  //   }
  // } else {
  //   // 在没有 open-type=getUserInfo 版本的兼容处理
  //   wx.getUserInfo({
  //     success: res => {
  //       app.globalData.userInfo = res.userInfo
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   })
  // }

  // fetch('/slides')
  //   .then(res => {
  //     this.setData({ slides: res.data })
  //   })

  // fetch('/categories')
  //   .then(res => {
  //     this.setData({ categories: res.data })
  //   })

  // },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
