//index.js
//获取应用实例,app.js文件是小程序的公共文件，在任何其它页面只需要使用getApp()获取小程序实例后就可以调用这个注册函数里面的内容，
// 从这句话我们可以看出如果其它页面有自己逻辑代码，完全可以不需要在appjs文件里面使用注册小程序函数App()了。
// 说明如果在其它页面没有使用app.js里面的代码则可以不使用注册页面函数App()，但是，最好写上。
// 要在其它页面使用注册函数App()里面的函数，需要使用函数getA()来获取小程序的一个实例，这相当于php类里面用new来实现化一个类，只是小程序已经由函数getA()来代替实例化。
const app = getApp()

// Page() 函数用来注册一个页面。接受一个 object 参数，其指定页面的初始数据、生命周期函数、事件处理函数等。
Page({
  // 数据 对应着 界面状态（如我绘画这件事，学会了一种新技能，同时也是今天绘画任务的完成状态）
  data: {
    // 这里添加的是默认的status是1(设置一个默认选中状态) 全部一开始就是默认值 setData 2(未完成)修改状态 3已完成状态 => 数据状态
    status: 1,
    addShow: true,
    // 如何把数组渲染过去？
    lists: [],
    addText: '',
    currentLists: []
    // addShow: 1 此时设置为boolean值时出现问题,
  },
  showStatus: function(e) {
    // 怎么区分是不同的文本点击的？ 怎么获取触发按钮的属性 数据属性（每个元素自己拥有的区分于其他元素）
    const status = e.currentTarget.dataset.status;
    // 此时，同一个元素可能按多次。
    console.log(e,status);
    // 不再是dom编程，针对界面状态的编程
    console.log(this);
    this.setData({
      status: status
    })
  },
  addTodoShow: function(e) {
    // setData 函数用于将数据从逻辑层发送到视图层，同时改变对应的 this.data 的值。
    this.setData({
      addShow: false
    })
  },
  addTodo: function(e) {
    // 尝试先简后繁，比如先直接自己提供数据来实现
    // 输入框的内容
    const task = {
      title: this.data.addText,
      data: '刚刚',
      status: '0'
    }
    const temp = [...this.data.lists,task];
    // 将数据添加到了lists数组后，需要使用setData来更新数据，而不是只要通过this.data.value修改就可以了。
    this.setData({
      lists: temp,
      addShow: true
      // 关注数据状态的改变
    })
    // 看到界面 我们就知道要的数据 
    



    // ...this.lists展开每一项，展开运算符
    // e都是一样的事件
    // 如何添加新的记录？ 界面怎么立即显示任务，此时页面是循环lists => 也就是说怎么把数据添加到lists上？
    // 数据驱动界面，数据变，**界面自动更新** 
    /* MVVM 时代 MVVM Model(数据模型data) View VM(视图模型层)*/
    
  },
  addTodoHide: function(e) {

  },
  setInput: function(e) {
    // console.log(e.detail.value);
    this.setData({
      addText: e.detail.value
      // 不仅修改了视图层的值，还有逻辑层的值，所以在逻辑层其他地方，可以通过this.data.addText访问
    })
  },
  changeTodo: function(event) {
    // 当前点击条目的status success
    // 数据 lists 跟当前条目相关的这一条数据
    // 将 status 值更新为1
    // index ?
    console.log(event);
    const index = event.currentTarget.dataset.item;
    const temp = this.data.lists;
    temp.forEach((item,i) => {
      // console.log(item,i);
      if (i == index) {
        if (item.status == '0') {
          item.status = '1'
          wx.showToast({
            title: '已完成任务',
            icon: 'success',
            duration: 1000
          })
        } else {
          item.status = '0'
          wx.showToast({
            title: '任务打回重做',
            icon: 'failure',
            duration: 1000
          })
        }
      }
    })
    this.setData({
      lists: temp
    })
  }
})


// 一切皆数据，不需要找什么结点，添加数据项,