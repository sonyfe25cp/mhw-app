// pages/references/index.js
const fetch = require('../../utils/fetch')

const categories = [
  { icon: '/assets/icons/common/ItemIcon020e.png', text: '猫饭技能', category_id: 1 },
  { icon: '/assets/icons/common/ItemIcon003g.png', text: '农场', category_id: 2 },
  { icon: '/assets/icons/common/GiadromeUBM.png', text: '变装', category_id: 3 },
  { icon: '/assets/icons/common/ItemIcon017i.png', text: '护石', category_id: 4 },
  { icon: '/assets/icons/common/ItemIcon025i.png', text: '技能', category_id: 5 },
  { icon: '/assets/icons/common/ItemIcon051c.png', text: '装备箱', category_id: 6 },
  { icon: '/assets/icons/common/ItemIcon045f.png', text: '入门资料', category_id: 7 },
  { icon: '/assets/icons/common/HappyFelyne.png', text: '猫的培养', category_id: 8 },
  { icon: '/assets/icons/common/ItemIcon005e.png', text: '滴滴打猎', category_id: 9, link: "/pages/references/map" },
  { icon: '/assets/icons/common/ItemIcon058b.png', text: '关于我们', category_id: 11,},
]

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // slides:slides,
    categories: categories
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    fetch(`/refer_slides`)
      .then(res => {
        this.setData({ slides: res.data })
      })
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

  }
})