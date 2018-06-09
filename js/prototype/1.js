var obj = {
    a: 1
};
console.log("a" in obj);

console.log("toString" in obj);

// 原型链对象上是否具有属性 obj 对象 name 属性名 
// obj, a false
// obj, toString true
// 检测只存在原型链上的属性且必须是它的属性
// hasOwnProperty只检测自身的属性

function hasPrototypeProperty(obj, name) {
    return name in obj && !obj.hasOwnProperty(name)
}

// console.log(hasPrototypeProperty(obj, "a"));

// 函数是对象 Object
// Person 可以是 程序员，作曲家，作者的原型链对象
// prototype 属性 in obj in Object
// prototype 入口？ js 把所有对象其实是由function 构造而成
// 函数都有的属性

// 实例instance p1 p2 都有自身属性name
// 由Person 构造函数 this.name=
// Person construcutor
// Person.prototype.sayName
// 新的对象构建
// 不是类与对象的关系，
// 而是原型对象
function Person(name) {
    this.name = name;
    this.age = 21;
}
// 函数 带有this
// js里几乎所有的函数都有一个prototype属性
// 指针一样，指向一个对象Person.prototype = {} 其是带有属性和方法的集合
// constructor 属性设置， 车头  


// prototype的constructor属性 对应车头Person部分,也就可以知道它的所有属性
// 车头的prototype属性 对应 Person的原型链


// constructor -> prototype
// 方法，prototype 车身
Person.prototype.getName = function() {
    return this.name;
}


// var p1 = new Person('Tom');
// console.log(p1.getName());
// console.log(p1.age);  //可以访问到没有出现在prototype上的person中的属性

// js “原型继承”
// 这里是函数（类） ，委托模式 -》 对象之间的关联
// constructor Person name + books 属性
// prototype Person的方法链 + 方法链 (自身方法)
// 一 让子对象拥有父类的所有属性
function Author(name, books) {
    // 新的构造函数

    Person.call(this, name);
    this.books = books;
}
// 得到Person的prototype
extend(Author, Person);

// const author = new Author('雨果',['悲惨世界']);
// console.log(author.name);

Author.prototype.getBooks = function() {
    return this.books;
}

function extend(subClass, superClass) {
    var F = function() {}; //空的构造函数
    F.prototype = superClass.prototype;
    subClass.prototype = new F();  //指向新的对象之后，会失去构造函数
    subClass.prototype.constructor = subClass;
    // subClass.prototype.constructor
}
const author = new Author('雨果',['悲惨世界']);
// author 函数prototype 指向 Author的prototype
// this 实例对象 函数， this 指向 作用域内可以找到属性
// 方法？ prototype 去查找Author 对象的prototype

// var test = {
//     a: 2,
//     b: 3
// }
// Object.defineProperty(test, "a",{
//     get: function() {
//         value: 3,
//         writable true
//     }
// })