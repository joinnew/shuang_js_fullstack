/**
 * author zss
 * data 4-28
 * 功能: 就地编辑
 * 参数: @id @parent 挂载的元素
 * @value 初始值
 */

// 不再是面向业务的流程编程
// 一上来,就封装一个类, 这里把html 和 css 封装起来
// 美好的愿望, 可以以后多复用.

function EditInPlace(id, parent, value) {
    this.id = id;
    this.parentElement = parent;  //父元素 root
    this.value = value || 'default value';
    // 显示name元素
    this.createElement();
    // 挂载到DOM上去了, 就可以为他加事件监听了
    this.attachEvent();
}
EditInPlace.prototype = {
    //构建html
    createElement: function() {
        this.containerElement = document.createElement('div');
        this.parentElement.appendChild(this.containerElement);

        // 显示静态文字
        // 按钮
        // js 动态性
        this.staticElement = document.createElement('span');
        this.staticElement.innerHTML = this.value;
        this.containerElement.appendChild(this.staticElement);


        // 对象的内部 this 指向对象 对象在原型链上 有方法和属性.
        this.fieldElement = document.createElement('input');
        this.fieldElement.type = 'text';
        this.fieldElement.value = this.value;
        this.containerElement.appendChild(this.fieldElement);
        // 文字和输入框,只能显示一个
        this.converToText();
    },
    converToText: function() {
        this.fieldElement.style.display = 'none';
        this.staticElement.style.display = 'inline';        
    },
    converToEdit: function() {
        this.staticElement.style.display = 'none';
        this.fieldElement.style.display = 'inline';
                
    },
    attachEvent: function() {
        // 作用域 attachEvent函数
        // js this 总会指向什么
        // 对象的方法被执行时,this指向对象
        console.log(this);
        // 需要拿到this
        var that = this;        
        this.staticElement.addEventListener('click', function() {
            // 函数被执行时,并不是对象的方法,而是匿名函数 ,作为事件处理函数执行,this指向事件发生元素.
            // this指向跟函数的调用方式有关
            // this的指向
            // 在事件处理函数的内部
            // 作用域 事件的回调函数 也是函数 有着自己的作用域 每个作用域里的this
            that.converToEdit();
        },false);
        this.fieldElement.addEventListener('keydown', function(evt) {
            // evt 事件对象
            // console.log(evt);
            if (evt.keyCode == 13) {
                that.staticElement.innerHTML = this.value;
                that.converToText();
            }
        },false);
    }
}