// pages/detail/detail.js
import goods from '../../api/goods.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 1,
    show: false,
    totalNum: 0,
    scaleCart: false,
    goods: null,
    showIndex: 0

  },
  addCount () {
    let num = this.data.num;
    // num++ 先赋值，再++
    num++;
    this.setData({
      num
    })
  },
  onLoad (options) {
    const id = options.id || 2;
    // options是另外界面传输过来的，但是现在没有，所以使用没有时则取2值
    let curGoods;
    for (let i = 0; i < goods.length; i++) {
      if (goods[i].id === id) {
        curGoods = goods[i];
        break;
      }
    }
    setTimeout(() => {
      this.setData({
        goods: curGoods
      })
    },1000)
  },
  addToCart () {
    const num = this.data.num;
    // setData中的值要先再外面定义好
    const total = this.data.totalNum;
    this.setData({
      show: true
    });
    setTimeout(() => {
      this.setData({
        show: false,
        scaleCart: true
      });
      setTimeout(() => {
        this.setData({
          scaleCart: false,
          hasCarts: true,
          totalNum: num + total
        })
      },200)
    },300)
  },
  showSomething (e) {
    this.setData({
      showIndex: e.currentTarget.dataset.index?e.currentTarget.dataset.index:0
    })
  }
})