//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // 判断小程序的API，回调，参数，组件等是否在当前版本可用。
    userInfo: {},
    addShow: false,
    focus: false,
    addText: '',
    lists: []
  },
  getUserInfo: function(e) {
    // console.log(e);

    // 这一段是必要的，后面的onLoad只是再下次进入首页以后，加载用。
    // 这里是首次按登录按钮所对应的操作，要是想等onLoad，再按按钮之后，onLoad是已经加载好的，无法影响这个
    this.setData({
      hasUserInfo: true,
      userInfo: e.detail.userInfo
    })
    // 存储数据
    // let test = JSON.stringify(e.detai.userInfo);
    wx.setStorage({
      key: 'user-info',
      data: e.detail.userInfo
    })

    // 登录之后，进入首页也知道我们已经登录了
    // App globalData: userInfo
    // App onLaunch
    // wx.setStorage()
    // index onLoad global userInfo
  },
  onLoad () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }
  },
  // 记得把focus的状态改掉。addText清空
  addTodoHide (e) {
    this.setData({
      addShow: false,
      focus: false,
      addText: ''
    })
  },
  addTodo (e) {
    if (!this.data.addText.trim()) {
      return;
    }
    // item 都是一个对象 文字只是一部分
    var addT = {
      title: this.data.addText,
      status: '0',
      id: new Date().getTime()
    }
    const temp = [
      addT,
      ...this.data.lists
    ]
    this.setData({
      lists: temp
    })
    wx.setStorage({
      key: 'lists',
      data: temp     
    });
    wx.showToast({
      title: '添加成功!',
      icon: 'success',
      duration: 1000
    })
    this.addTodoHide();
  },
  setInput (e) {
    this.setData({
      addText: e.detail.value
    })
  }

})
