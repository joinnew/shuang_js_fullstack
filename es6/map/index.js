const dogs = new Map();
// 对象的集合（键值对形式）
const obj = {
    'Snickers': 3,
    'Sunny': 2
}
dogs.set('Snickers', 3);
dogs.set('Sunny', 2);
dogs.set('Hugo', 10);
dogs.set('Hugo', 12);

// const dog = new Map(obj);
// console.log(dog);

dogs.forEach((val, key) => console.log(val, key));
// 输出形式是 3 'Snickers'

// 可以迭代的都可以使用for of
// 每一项都是一个数组
for ( const [key, val] of dogs) {
    console.log(key, val);
}
// 认为最后输出的dog应该是最后一个值，但是const挟持了一个块级作用域，外部访问不到dog的
// console.log(dog);

let a = 1;
let b = 1;
    // 解构，解构的是对象，数组形式，把等号右边的内容进行分解，赋给等号左边对应位置 
    // let { currentPage, totalPages, isLoading} = this.data    
[b, a] = [a, b];
