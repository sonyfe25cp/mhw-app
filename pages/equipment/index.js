// pages/equipment/index.js
const skills = [
  "见切", "会心", "利刃"
]
const hunterTypesName = ["近战", "远程", "通用"]
const hunterTypes = [
  {
    "name": "melee",
    "value": "近战"
  }, {
    "name": "gun",
    "value": "远程"
  }, {
    "name": "all",
    "value": "通用",
  }
]

const equips = [
  {
    "female": true,
    "updatedAt": "2017-10-11T13:57:25.204Z",
    "skill": [
      {
        "name": "力气",
        "value": 2
      }
    ],
    "fireDef": 0,
    "male": true,
    "slots": 1,
    "name": "雪山头盔",
    "objectId": "59de234567f35600267ef312",
    "waterDef": 0,
    "defMax": 50,
    "hunterType": "all",
    "createdAt": "2017-10-11T13:57:25.204Z",
    "type": "head",
    "defMin": 1,
    "thunderDef": 0,
    "iceDef": 1,
    "dragonDef": 0
  },
  {
    "female": true,
    "updatedAt": "2017-10-11T13:57:25.234Z",
    "skill": [
      {
        "name": "\u6c17\u307e\u3050\u308c",
        "value": 5
      }
    ],
    "fireDef": 0,
    "male": true,
    "slots": 0,
    "name": "雪山胸甲",
    "objectId": "59de234567f35600267ef313",
    "waterDef": 0,
    "defMax": 50,
    "hunterType": "all",
    "createdAt": "2017-10-11T13:57:25.234Z",
    "type": "body",
    "defMin": 1,
    "thunderDef": 0,
    "iceDef": 2,
    "dragonDef": 0
  },
  {
    "female": true,
    "updatedAt": "2017-10-11T13:57:25.242Z",
    "skill": [
      {
        "name": "\u6c17\u307e\u3050\u308c",
        "value": 3
      }
    ],
    "fireDef": 0,
    "male": true,
    "slots": 1,
    "name": "雪山手套",
    "objectId": "59de234567f35600267ef314",
    "waterDef": 0,
    "defMax": 50,
    "hunterType": "all",
    "createdAt": "2017-10-11T13:57:25.242Z",
    "type": "hand",
    "defMin": 1,
    "thunderDef": 0,
    "iceDef": 3,
    "dragonDef": 0
  }, {
    "female": true,
    "updatedAt": "2017-10-11T13:57:25.249Z",
    "skill": [
      {
        "name": "\u63a1\u53d6",
        "value": 2
      }
    ],
    "fireDef": 0,
    "male": true,
    "slots": 2,
    "name": "雪山腿",
    "objectId": "59de234567f35600267ef315",
    "waterDef": 0,
    "defMax": 50,
    "hunterType": "all",
    "createdAt": "2017-10-11T13:57:25.249Z",
    "type": "leg",
    "defMin": 1,
    "thunderDef": 0,
    "iceDef": 4,
    "dragonDef": 0
  },
  {
    "female": true,
    "updatedAt": "2017-10-11T13:57:25.257Z",
    "skill": [
      {
        "name": "\u63a1\u53d6",
        "value": 3
      }
    ],
    "fireDef": 0,
    "male": true,
    "slots": 1,
    "name": "雪山脚",
    "objectId": "59de234567f35600267ef316",
    "waterDef": 0,
    "defMax": 50,
    "hunterType": "all",
    "createdAt": "2017-10-11T13:57:25.257Z",
    "type": "foot",
    "defMin": 1,
    "thunderDef": 0,
    "iceDef": 5,
    "dragonDef": 0
  },
  {
    "female": true,
    "updatedAt": "2017-10-11T13:57:25.264Z",
    "skill": [],
    "fireDef": 0,
    "male": true,
    "slots": 3,
    "name": "\u30c1\u30a7\u30fc\u30f3\u30d8\u30c3\u30c9",
    "objectId": "59de234567f35600267ef317",
    "waterDef": 0,
    "defMax": 51,
    "hunterType": "all",
    "createdAt": "2017-10-11T13:57:25.264Z",
    "type": "head",
    "defMin": 2,
    "thunderDef": 1,
    "iceDef": 6,
    "dragonDef": 0
  },
  {
    "female": true,
    "updatedAt": "2017-10-11T13:57:25.271Z",
    "skill": [
      {
        "name": "\u4f53\u529b",
        "value": 3
      }
    ],
    "fireDef": 0,
    "male": true,
    "slots": 1,
    "name": "\u30c1\u30a7\u30fc\u30f3\u30d9\u30b9\u30c8",
    "objectId": "59de234567f35600267ef318",
    "waterDef": 0,
    "defMax": 51,
    "hunterType": "all",
    "createdAt": "2017-10-11T13:57:25.271Z",
    "type": "body",
    "defMin": 2,
    "thunderDef": 1,
    "iceDef": 7,
    "dragonDef": 0
  },
  {
    "female": true,
    "updatedAt": "2017-10-11T13:57:25.279Z",
    "skill": [
      {
        "name": "\u4f53\u529b",
        "value": 2
      }
    ],
    "fireDef": 0,
    "male": true,
    "slots": 1,
    "name": "\u30c1\u30a7\u30fc\u30f3\u30b0\u30e9\u30d6",
    "objectId": "59de234567f35600267ef319",
    "waterDef": 0,
    "defMax": 51,
    "hunterType": "all",
    "createdAt": "2017-10-11T13:57:25.279Z",
    "type": "hand",
    "defMin": 2,
    "thunderDef": 1,
    "iceDef": 8,
    "dragonDef": 0
  }
]


Page({



  /**
   * 页面的初始数据
   */
  data: {
    skills: skills,
    hunterTypes: hunterTypes,
    hunterTypesName: hunterTypesName,
    equipments: equips,
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
    this.setData({
      equipType: 'head'
    })
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
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
    console.log("pick", skills[e.detail.value])
  },
  bindHunterTypePickerChange: function (e) {
    console.log('e:', e)
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
    console.log('pick: ', hunterTypes[e.detail.value].name)
  }, 
  switchHead: function () {
    console.log('switch head')
    this.setData({
      equipType: 'head'
    })
  }, switchChest: function () {
    this.setData({
      equipType: 'chest'
    })
  }, switchHand: function () {
    this.setData({
      equipType: 'hand'
    })
  }, switchWeist: function () {
    this.setData({
      equipType: 'weist'
    })
  }, switchLeg: function () {
    this.setData({
      equipType: 'leg'
    })
  },

})