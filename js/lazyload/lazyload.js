/**
 * author zss
 * date 2018-5-4
 */


//  服务于任何图片元素，img 幕后，再将origin_src 设置过去

// 怎么保证多个图片的加载？在外部调用时使用循环？不是使用类，要使用js的风格
// 我的想法仅是封装创建幕后元素


 var LazyLoadImage = (function() {
    // 变量的冒泡查找
    // const a = 1;
     return {
         setSrc: function(ele) {
            // console.log('开始下载图片吧');
            // 健壮一些 考虑到多种情况，若没有设值的情况
            const url = ele.getAttribute('origin_src') ? ele.getAttribute('origin_src') : '';
            if (!url) return;
            const oImg = document.createElement('img');
            // 自己写的时候忘记考虑displayw:none 和挂载DOM上
            // 不会影响页面，none 会离开文档流
            // opacity:0 这个会撑长界面
            oImg.style.display = 'none';

            document.body.appendChild(oImg);
            // 注册事件
            // addEventListener 是新的方式
            // onload 旧的写法

            // 当设置了图片的src后，就会启动http请求
            // 图片下载完成后（针对图片，而不是weindow全局  理解错误的地方）， onload 注册事件才会执行
            // *****************这里采用了异步 ，同步*******************
            // onload 作为事件发生
            oImg.onload = function() {
                // 不会立即执行
                // 会后执行
                ele.src = url;
                document.body.removeChild(this); //未扫除时，其显示在script中
            }
            // 先执行
            oImg.src = url;
         }

     }
 })();
