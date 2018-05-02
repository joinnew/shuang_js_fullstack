## 函数对象
Javascript中的函数就是对象。连接到原型
- 对象->Object.prototype
- 函数对象->Function.prototype->Object.prototype

## 函数字面量
 函数对象通过函数字面量来创建
```javascript
var add=function(a,b){
    return a+b;
};
```
## 调用
 javascript中一共有4种调用模式：方法调用模式、函数调用模式、构造器调用模式和apply调用模式
### 方法调用模式
 当一个函数被保存为对象的一个属性时，我们称它为一个方法，当一个方法被调用时`this`被绑定到该对象
 ```javascript
 //创建myObject对象，它有一个value属性和increment方法
 var myObject={
     value:0;
     increment:function(inc){
         this.value+=typeof inc==='number'? inc:1;
     }
 };
 myObject.increment();
 console.log(myObject.value);  // 1
 myObject.increment(3);
 console.log(myObject.value); //  3
 ```
 ### 函数调用模式
 当函数并非对象的一个属性时，就被当作函数来调用，`this`被绑定到全局
  ```
  var sum=add(3,4);  // sum的值为7
  ```
  
  ```javascript
  // 给myObject增加一个double方法
  myObject.double=function(){
      var that=this;   //解决方法,如果直接使用this.value则this指向全局window，
                         //所以赋值给that，保存this的指向
      var helper=function() {
          that.value=add(that.value,that.value)
      };
      helper();  //以函数形式调用
  };
  //以方法形式调用double
  myObject.double();
  console.log(myObject.value);
  ```
  ### 构造器调用模式
  Javascript是一门基于原型的语言，这意味着对象可以从其它对象继承属性。
  
  如果在一个函数前面带上`new`来调用，那么背地里会创建一个连接到该函数的prototype成员的新对象，同时`this`会被绑定到那个新对象
  ```javascript
  //创建一个名为Quo的构造器函数
  var Quo=function(status){
      this.status=status;
  }
  //给Quo所有实例提供一个名为get_status的公共方法
  Quo.prototype.get_status=function(){
      return this.status;
  }
  // 构造一个Quo实例
  var myQuo=new Quo('confused');
  console.log(myQuo.get_status());
  ```
  ### Apply调用模式
  apply方法让我们构建一个参数数组传递给调用函数，两个参数（第一个绑定一个对象，第二个是一个参数数组）
  ```
  var array=[3,4];
  var sum=add.apply(null,array);  //sum为7
  
  
  var statusObject={
      status:'A_OK';
  }
  //通过apply改变对象的指向，指向Quo.prototype原型，从而拥有其方法
  var status=Quo.get_status.apply(statusObject);  //status值为'A_OK'
  ```
  ## 参数
  当函数被调用时，会得到一个免费配送参数arguments数组(类似数组)，拥有length属性，但没有任何数组的方法
  ```
  var sum=function(){
      var i,sum=0;
      for(i=0;i<arguments.length;i++){
          sum+=arguments[i];
      }
      return sum;
  }
  console.log(sum(4,5,6));  // 15
  ```
   ## 返回
   - return语句可以是函数提前返回值，不再执行余下的语句
   - 一个函数总是会返回一个值，如果没有指定返回值，则返回undefined
   
  ## 扩充类型的功能
javascript允许给语言的基本类型扩充功能我们可以给Function.prototype增加方法对所有函数可用
```
Number.method('integer',function(){
    return Math[this<0 ? 'cell':'floor'](this);
}
document.writeln((-10/3).integer());    // -3
```
## 递归
递归就是直接或间接地调用自身的一种函数

## 闭包
```
局部变量value在闭包的作用下，生命被延续，不会在函数执行完立即被销毁
var myObject=(function(){
    var value=0;
    return{
        increment:function(inc){
            value+=typeof inc==='number'? inc:1;
        },
        getValue:function(){
            return value;
        }
    };
})();

myObject.increment(5);
console.log(myObject.getValue());  // 5
我们并没有把函数赋值给myObject，我们把调用该函数后返回的结果赋值给它。
```
## 回调
## 模块
## 级联
## 柯里化
## 记忆