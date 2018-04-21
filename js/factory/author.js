function Person(name) {
    this.name = name;
}
Person.prototype.getName = function() {
    return this.name;
}

var wxf = new Person('汪西发');
console.log(wxf.name);


// IT工程师 需要extends Person
function Coder(name, language) {
    // call?
    Person.call(this, name);
    // 父类没有的可以加
    // 语言
    this.language = language;
    // this.getName(name);
}

// new Person 新的对象就是Coder的原型对象
Coder.prototype = new Person();  //此时会把Coder的构造函数指向Person原型
Coder.prototype.constructor = Coder;
Coder.prototype.getLanguage = function() {
    return this.language;
}

var xjy = new Coder('徐加元',[
    'javascript','python','c/c++']);
console.log(xjy.name + ' ' + xjy.language.join(','));

console.log(xjy.getName());
console.log(xjy.getLanguage());
