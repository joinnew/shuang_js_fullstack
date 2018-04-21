// console.log('工厂模式');
// 函数属于 基本类型之一的对象
// 函数是一等对象



// 当类是由一个函数构建的时候，则称为构造函数 constructor
//new 时执行，this指代new之后的实例


//类， 简单的只有一个构造函数了
// 感觉类跟函数没有区别了
// js 本身并没有类，只是用的人多了，给了这个实现。
// js 只有对象，Object原型对象的始祖
var Bicycle = function(brand) {
    this.brand = brand || '凤凰';
}

//function Bicycle(){}函数声明式写法

// 原型 在原型凤凰的基础上
// 多了二维码 手机支付
// js 认为 这是一个继承的关系，不是
// 共享单车，完全颠覆了自行车，js中继承，是通过原型链实现

// 通过prototype原型 再创建自己的属性和方法,如Bicycle.prototype.sell()
// js 不需要传统继承，只要有个参照物就可实现原型是继承


// 原型指向对象,此时这些各种车并没有继承Bicycle
Bicycle.prototype = {
    sellBicycle: function(model) {
        // console.log('卖车了。。。');
        // return null;
        // 面向对象们,
        // 创造各自有联系的: 卖车， 商店, 很多车, 维修, 仓库
        var bicycle = null;
        switch(model) {
            case 'Giant':
                bicycle = new Giant();
            break;
            case 'The Speed Ster':
                bicycle = new Speedster();
            break;
            case 'U2':
                bicycle = new U2();
            break;
        }
        bicycle.assemble();
        bicycle.wash();
        bicycle.provideRepair();
        // 把车卖出去 

        return bicycle;

    }
    // privideRepair: function() {},
    // assemble: function() {},
    // wash: function() {}
    // 该函数没有返回值，所以是未定义的 undefined
}

// js 基本类型
// 字符串， 数字， 布尔值， null， undefined
// 复杂类型 object <-prototype array function json



//为什么不是通过Bicycle来实例呢?
function Speedster() {

}
Speedster.prototype = {
    assemble: function() {
        console.log('组装完成!');
    },
    wash: function() {
        console.log('清洗完成!');
    },
    provideRepair: function() {
        console.log('保修三年');
    }
}

// 这里是继承了Bicycle
// Speedster.prototype = new Bicycle();
// Speedster.prototype.provideRepair = function() {
//     console.log('保修三年');
// }

function Giant() {

}
Giant.prototype = {
    assemble: function() {
        console.log('组装完成!');
    },
    wash: function() {
        console.log('清洗完成!');
    },
    provideRepair: function() {
        console.log('保修一年');
    }
}



// Giant.prototype = new Bicycle();
// Giant.prototype.provideRepair = function() {
//     console.log('保修一年');
// }

function U2() {

}
U2.prototype = {

}

var bicycle = new Bicycle(Speedster);
console.log(bicycle.sellBicycle('Giant'));
