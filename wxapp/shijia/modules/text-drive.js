// es6 模块化语法 module
// js 变量或常量 它的类型由值决定
// es6中放弃了var(其可以随意改变变量的类型，赋不同的值) const则不允许
const textDrive = () => {
    // wx.表示要用内置的来自微信的API了 
    // 原生的api 大部分的小程序是html5(能兼容android ios，较原生慢) 
    // webview  nativeview（android,ios）=> 性能上比原生的慢一些

    // shouwToast ,在android上可以调用它的toast方式，在ios上会调用它的toast方式.
    // wx已经封装了这些,可以通过js来访问，实际是调用原生的方式.所以其速度不慢
    wx.showToast({
        title: '暂不支持'
    })
}
export default textDrive 