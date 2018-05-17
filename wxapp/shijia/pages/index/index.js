//index.js
//获取应用实例
import textDrive from '../../modules/text-drive'
console.log(textDrive)

// 在Page里得到app,app里的this,就是指代这个app,相当于新建一个对象那样
const app = getApp()

Page({
  data: {
    slides: []
  },
  onLoad() {
    this.setData({
      slides: app.globalData.slides
    })
  },
  textDrive,
  readMore(event) {
    const id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/vehicies/show?id=${id}`
    })
  }
})
