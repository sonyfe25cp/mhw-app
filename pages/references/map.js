// pages/references/map.js
var latitude = 23.21229;
var longitude = 113.324520;
Page({
  data: {
    markers: [],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/assets/icons/common/Legs.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        latitude = res.latitude
        longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        console.log('lat:', latitude, "long:", longitude)
      }
    })
  },
  onReady() {
    this.setData({
      markers: [{
        iconPath: "/assets/icons/common/Head.png",
        id: 0,
        latitude: latitude,
        longitude: longitude,
        width: 50,
        height: 50
      }]
    })

  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})