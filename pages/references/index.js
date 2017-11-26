// pages/references/index.js
const slides = [
  { image: 'http://ww1.sinaimg.cn/mw690/006ThXL5ly1fj7zx3w751j30u00dmgy3.jpg', link: '' },
  { image: 'http://ww1.sinaimg.cn/mw690/006ThXL5ly1fj6ckx9tlwj30u00fqk8n.jpg', link: '/pages/list/list?cat=10' }
]

const categories = [
  { icon: '/assets/icons/common/HappyFelyne.png', text: '猫饭', category_id: 1 },
  { icon: '/assets/icons/grid-02.png', text: '农场', category_id: 2 },
  { icon: '/assets/icons/grid-03.png', text: '变装', category_id: 3 },
  { icon: '/assets/icons/grid-04.png', text: '护石', category_id: 4 },
  { icon: '/assets/icons/grid-05.png', text: '技能', category_id: 5 },
  { icon: '/assets/icons/grid-06.png', text: '装备箱', category_id: 6 },
  { icon: '/assets/icons/grid-08.png', text: '会员', category_id: 7 },
  { icon: '/assets/icons/grid-08.png', text: '投稿', category_id: 8 },
  { icon: '/assets/icons/grid-07.png', text: '关于我们', category_id: 9 }
]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    slides:slides,
    categories: categories
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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