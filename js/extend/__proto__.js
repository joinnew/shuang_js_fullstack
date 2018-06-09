
// 函数都有一个属性prototype
// __proto__是对象的属性，私有属性
function Foo() {

}
var Boo = {name: 'Boo'};
Foo.prototype = Boo;

var f = new Foo();
// __proto__指向构造该对象的构造函数的原型
// console.log(Foo.prototype === Boo);
// console.log(f.__proto__ );
// console.log(f.name);
// console.log(Object.getPrototypeOf(f) === f.__proto__);

function Person(name) {
    this.name = name;
}
Person.prototype = {
    constructor: Person,
    sayName: function() {
        console.log('my name is' + this.name);
    }
}

var p1 = new Person('ligang');
console.log(p1.__proto__ === Person.prototype);
