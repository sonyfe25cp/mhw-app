//index.js
//获取应用实例
const app = getApp()

const fetch = require('../../utils/fetch')
const pageSize = 3
var page = 1

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    messages: [],
    news: [],
    hasMore: true
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    fetch(`/articles?limit=4`)
      .then(res => {
        this.setData({ news: res.data })
      })
    fetch(`/index_slides`)
      .then(res => {
        this.setData({ slides: res.data })
      })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
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

  // }


  // 下拉刷新数据  
  // pullDownRefresh: function () {
  //   console.log('down')
  // },

  // 上拉加载数据 上拉动态效果不明显有待改善  
  // pullUpLoad: function () {
  //   var that = this;
  //   console.log('up')
  //   page = page + 1
  //   let offset = (page - 1) * pageSize
  //   // fetch(`/articles?offset` + offset)
  //   //   .then(res => {
  //   //     this.setData({ news: res.data })
  //   //   })
  //   console.log('offset:', offset)
  // },
  // 定位数据  
  // scroll: function (event) {
  //   var that = this;
  //   // that.setData({
  //   //   scrollTop: event.detail.scrollTop
  //   // });
  //   console.log('scoll')
  // },  

  // onReachBottom: function(){
  //   console.log('aaaa')
  // },

  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
