//app.js
// 应用启动 onLaunch
// App -> Page 
// 全局的，应用级别的一些行为，添加全局的数据
import db from './assets/db.js'
// db为随意命名,代表整个文件的内容,就像testDrive一样，不仅仅
App({
  onLaunch: function () {
    Object.assign(this.globalData, db);
    // wx.request({
    //   url: 'https://resources.ninghao.net/wxapp-case/db.json',
    //   success: (response) => {
    //     // console.log(response);
    //     Object.assign(this.globalData, response.data);
    //     // 为对象赋值，this指代这个页面,什么样的值对象都可以
    //     console.log(this.globalData);
    //   },
    //   fail: (error) => {
    //     console.log(error);
    //   }
    //   // 出现错误，小程序有自己的域名访问限制
    // })
  },
  globalData: {

  }
})