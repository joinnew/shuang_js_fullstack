
const app = getApp()

Page({
    data: {
        category: [
            {name:'果味',id:'guowei'},
            {name:'蔬菜',id:'shucai'},
            {name:'炒货',id:'chaohuo'},
            {name:'点心',id:'dianxin'},
            {name:'粗茶',id:'cucha'},
            {name:'淡饭',id:'danfan'}
        ],
        curIndex: 0, 
        detail: [],
        toView: 'guowei'    
    },
    switchCategory (e) {
        // const index = e.currentTarget.dataset.index;
        // if (!index) return;
        // 在this.setData()中是Page的，那么data中的数据，setData中也可以直接访问,不需要this.data
        this.setData({
            toView: e.currentTarget.dataset.id,
            curIndex: e.currentTarget.dataset.index?e.currentTarget.dataset.index: 0
        })
    },
    onReady: function() {
        wx.request({
            url: 'http://www.gdfengshuo.com/api/wx/cate-detail.txt',
            success: (res) => {
                this.setData({
                    detail: res.data
                })
            }
        })
    }
})