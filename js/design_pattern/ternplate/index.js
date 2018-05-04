// 泡一杯咖啡 talk in Js
// 流程 
// 把水煮沸
// 用水冲泡咖啡
// 把咖啡倒进杯子
// 加糖和牛奶
// 语义 转化为 代码
// 方法 method
// boilWater()
// brewCoffeeGriends()
// pourInCup()
// addSugerAndMilk()
// // 类和函数的，使用区别是什么？  什么时候应该用类（虽说是一个抽象出来的物体，但感觉好像很多东西都可以这样，比如之前的弹幕,），
// var Coffee = function() {

// }
// Coffee.prototype.boilWater = function() {
//     console.log('把水煮沸');
// }
// Coffee.prototype.brewCoffeeGriends = function() {
//     console.log('用水冲泡咖啡');
// }
// Coffee.prototype.pourInCup = function() {
//     console.log('把咖啡倒进杯子里');
// }
// Coffee.prototype.addSugerAndMilk = function() {
//     console.log('加糖和牛奶');
// }
// Coffee.prototype.init = function() {
//     this.boilWater();
//     this.brewCoffeeGriends();
//     this.pourInCup();
//     this.addSugerAndMilk();
// }

// var Tea = function() {
// } 
// // 代码好像在重复
// Tea.prototype = {
//   boilWater: function() {
//     console.log('把水烧开');   
//   },
//   steepTeaBag: function() {
//     console.log('用沸水浸泡茶叶');
//   },
//   pourInCup: function() {
//     console.log('把茶水倒进杯子');
//   },
//   addLemon: function() {
//     console.log('加柠檬');
//   },
//   init: function() {
//     this.boilWater();
//     this.steepTeaBag();
//     this.pourInCup();
//     this.addLemon();
//   }
// }

// var coffee = new Coffee(); 
// coffee.init();

// var tea = new Tea();
// tea.init();

// 怎么把它们以某种顺序执行，而不是每个都靠对象一步一步的来做
// 通过添加一个方法，在这方法里指明执行过程，

// 封装不怎么完美，继承？
// 代码如果能复用，就最好了。
// 第一步把水烧开，共用这个方法，少写
// Coffee   Tea 
// 共用， 这两个类，表示父子，是什么关系，可以让复用方法？  => 使用模板，好像没有，但可以使用一个抽象的父类。
// Coffee 和 Tea 为兄弟类
// 抽象类 HotDrink 一切皆抽象
// boilWater 共同点
// steepTeaBag  brewCoffeeGriends
// 抽象出来方法
// 用水泡（饮品）brew() 点到为止
// 共同点， 不同点
// 把咖啡倒进杯子 把茶水倒进杯子
// 倒进杯子 pourInCup()
// 加糖和牛奶  加柠檬 addCondiments()

// 抽象类 模板模式
// 优化方法 给抽象类
// function Beverage() {

// }
// Beverage.prototype.boilWater = function() {
//     console.log('把水煮沸');
// }
// // 原料不一样，方法不去具体实现，提供这个接口，
// // 子类一定要实现这个方法
// Beverage.prototype.brew = function() {}
// Beverage.prototype.pourInCup = function() {}
// Beverage.prototype.addCondiments = function() {}
// Beverage.prototype.init = function() {
//     this.boilWater();
//     this.brew();
//     this.pourInCup();
//     this.addCondiments();
// }

// var Coffee = function() {};
// // 通过原型链 指向一个对象，其是一个原型链对象
// Coffee.prototype = new Beverage();
// Coffee.prototype.brew = function() {
//     console.log('用沸水浸泡咖啡');
// }
// Coffee.prototype.pourInCup = function() {
//     console.log('将咖啡倒进杯子');
// }
// Coffee.prototype.addCondiments = function() {
//     console.log('加糖和牛奶');
// }

// var Tea = function() {};
// Tea.prototype = new Beverage();
// // 实现抽象类的抽象方法 覆盖父类方法 brew 接口,抽象方法不可以调用 
// Tea.prototype.brew = function() {
//     console.log('用沸水浸泡茶叶');
// }
// Tea.prototype.pourInCup = function() {
//     console.log('将茶叶倒进杯子');
// }
// Tea.prototype.addCondiments = function() {
//     console.log('加柠檬');
// }


// var coffee = new Coffee();
// coffee.init();

// var tea = new Tea();
// tea.init();

// js way 模板模式 通过返回新的类，更加优化的地方，可以接受参数，可以根据对象的需要传递参数进来
// 
// 何为模板？ 大体的结构已经确定 4步，动作概念都有，
// 差异点，继承 抽象类来实现，
// 对于js来说 可以更优雅
// 差异点 不就是个参数吗？ 以参数形式
var Beverage = function(param) {
    var boilWater = function() {
        console.log('把水煮沸');
    }
    var brew = param.brew || function() {
        throw new Error('必须传brew方法');
    }
    var pourInCup = param.pourInCup || function() {
        throw new Error('必须传递pourInCup方法');
    }
    var addCondiments = param.addCondiments || function() {
        throw new Error('必须传递addCondiments方法');
    }
    var F = function() {};
    F.prototype.init = function() {
        // 内部作用域可以直接访问外部作用域
        boilWater();
        brew();
        pourInCup();
        addCondiments();
    }
    return F;
}

// 模板可配置部分,作为参数传给模板对象
var Coffee = Beverage({
    brew: function() {
        console.log('用沸水泡咖啡')
    },
    pourInCup: function() {
        console.log('把咖啡倒进杯子');
    },
    addCondiments: function() {
        console.log('加糖和牛奶');
    }
});
var coffee = new Coffee();
coffee.init();