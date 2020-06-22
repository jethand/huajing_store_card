//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    pictures: ['http://112.74.189.230:3018/photo1.jpg', 
               'http://112.74.189.230:3018/photo2.jpg',
              'http://112.74.189.230:3018/photo3.jpg',
              'http://112.74.189.230:3018/photo4.jpg',
              'http://112.74.189.230:3018/photo5.jpg',
              'http://112.74.189.230:3018/photo6.jpg',
              'http://112.74.189.230:3018/photo7.jpg',
              'http://112.74.189.230:3018/photo8.jpg',
              'http://112.74.189.230:3018/photo9.jpg'
               ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  jumpToOtherPage: function () {
    wx.navigateTo({
      url: '../navigate/navigate',
   })
  },
  awakeMap: function(){
    wx.openLocation({
      latitude: 39.9800386752,
      longitude: 116.4764767885,
      name: '华景齿科丽都门诊部',
      address: '北京市朝阳区望京中环南路佳境天城1层2-B',
      scale: 28
    })
  },
  awakenPhone: function () {
    wx.showActionSheet({
      itemList: ['010-85805588','010-85806688'],
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex === 0){
            wx.makePhoneCall({
              phoneNumber: '010-85805588'
            })
          }
          if (res.tapIndex === 1) {
            wx.makePhoneCall({
              phoneNumber: '010-85806688'
            })
          }
        }
      }
    });
  },
  previewImage: function(e){
    let currentid = Number(e.target.dataset.id) -1; 
    wx.previewImage({
      current: this.data.pictures[currentid],
      urls: this.data.pictures
    })  
  },
  onLoad: function () {
    
  },
  onShareAppMessage:function(){
    return {
      title: '华景齿科丽都门诊部',
      desc: '医疗保健 · 专科医院',
      path: '/pages/index/index'
    }
  }
})
