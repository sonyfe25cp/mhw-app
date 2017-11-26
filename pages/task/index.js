// pages/task/index.js
const levels = []
for (let i = 1; i < 10; i ++){
  levels.push("村"+i+"星")
}
for (let i = 1; i < 5; i++) {
  levels.push("G" + i + "星")
}
const tasks = []
tasks.push(
    {
      "title": "挑战野猪王",
      "level": "村1星",
      "key": false,
      "first": "野猪王1头",
      "second": "彩虹",
      "map": "密林"
    }
);
tasks.push(
    {
      "title": "采集花生",
      "level": "村1星",
      "key": true,
      "first": "花生一大堆",
      "second": "彩虹",
      "map": "溪流"
    }
);

Page({
  /**
   * 页面的初始数据
   */
  data: {
    levels: levels,
    tasks : tasks,
  },

  /**
   * 下拉框选择
   */
  taskLevelChange: function(e){
    const val = e.detail.value
    this.setData({
      index: e.detail.value
    })
  },

  /**
   * 关键任务选择
   */
  keyTaskChange: function(e){
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var tasks = wx.request({
      url: "page/task/index.json",
      data: "",
      header: {},
      method: "GET",
      dataType: "json",
      success: function(res) {
        this.setData(tasks)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
    // this.setData(
      // tasks
    // );
    
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