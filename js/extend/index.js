// es6 的 class 只是语法糖
function Person(name) {
    this.name = name;
}

Person.prototype = {
    getName: function() {
        return this.name;
    }
}

console.log(Person.prototype);

function Author(name, books) {
    Person.call(this, name);
    this.books = books;
}

extend(Author, Person);
Author.prototype.getBooks = function() {
    return this.books;
}

function extend(subClass, superClass) {
    subClass.prototype = new superClass();
    subClass.prototype.constructor = subClass;
}

const author = new Author('高尔基',['童年']);
console.log(author.getName());

const person = new Person('周杰伦');
console.log(person.getName());
console.loh(person.constructor.prototype);

// new Person()