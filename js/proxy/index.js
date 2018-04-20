// 小明表白的故事
// 小明 talk in js
// js 具有强大的表现力
// js 弱类型语言 java 静态型语言
// js 基础类型 字符串 数字，
// 对象{},array,function
// Symbol
// bool 布尔值 false null 为空 undefined
// 六大基础类型 1个复杂类型
var xiaoming = {
    name: '小明',
    age: 21,
    hasGirlFriend: false,
    job: null,
    city: undefined,
    // 方法 行为
    sendFlower: function(target){
        // 1 买花
        var flower = new Flower('向日葵');
        if(typeof target.receiveFlower == 'function')
            target.receiveFlower(flower,this.name);  //this指的是当前对象xiaoming,未加判断的时候是不严谨的
        else{
            console.log('');
            }
    }
}

// 类名首字母大写，对象小写
var Flower = function(type){
    this.type = type || '玫瑰';
}

var xiaomei = {
    name: '小梅',
    room: '9栋2201',
    hometown: '九江',
    age: 20,
    tall: '150cm',
    receiveFlower: function(flower,sender){
        console.log('收到'+sender+'送的'+flower.type+',谢谢你送的花!');
    },
    // 监听小梅的好心情
    /**
     * 功能: 提供心情监听 
     * 参数: fn 类型函数
     * 在一段事件后,心情好了,将fn执行
     */
    listenGoodMoon:function(fn){
        setTimeout(function(){
            fn();
        },10000);
        // typeof fn === 'function'
        // fn();
    }
}

var xiaoxue = {
    name: '小雪',
    //函数里调用函数, 闭包
    receiveFlower: function(flower, name){
        xiaomei.listenGoodMoon(function(){
            xiaomei.receiveFlower(flower, name); 
            
        })//listenGoodMoon函数的参数是一个函数,不需要专门想一个函数,可以只是要把转交的操作放到匿名函数里传递过去.
        // if(name == '小明'){
        //     console.log('让我们在一起吧');
        // }else{
            // xiaomei.receiveFlower(flower, name); 
        // }
        // 实现了同样的收花方法,  接口
        // 小雪, 小梅都实现了同样的方法, 实现了相同的接口
        // 实现了相同的接口, 就可以互换对象
    }
}

// 空的对象字面量
var xueba = {

}

xiaoming.sendFlower(xiaoxue);
// xiaoming.sendFlower(xiaomei);