// pages/references/personal.js
//获取应用实例
const app = getApp()

const fetch = require('../../utils/fetch')
const attrs = ['name', 'psn', 'steam', 'xone']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    psn: '',
    steam: '',
    xone: '',
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //fetch user data
    // load local storage
    var that = this;
    let mapData = new Map()
    for (let attrName of attrs){
      wx.getStorage({
        key: attrName,
        success: function(res) {
          console.log('load  ', attrName, ' -- ', res.data)
          that.setData({attrName:res.data})
        },
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  bindKeyInput: function(e){
    // console.log('e:', e)
    // console.log('ta:', e.currentTarget.id)
    let key = e.currentTarget.id
    let value = e.detail.value
    this.setData({
      key : value
    })
    // save data
    console.log('', key,' : ', value)

    wx.setStorage({
      key: key,
      data: value
    })

  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})