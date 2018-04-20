// console.log('合唱团')

// talk is js
// 国王，招1000只鸭组成合唱团
var choir = [];

// duck是一个鸭子对象
// JSON Object
// 只要两脚站立会嘎嘎嘎叫的都是鸭子
var duck = {
    // name: '唐老鸭',
    // actor: '任达华',
    duckSinging: function(){
        console.log('嘎嘎嘎');
    }
}

// json就是对象，不需要new
// json 慢慢描述 也是数据交换的标准
// var zss = {
//     name: '张双双',
//     age: 18,
//     sex: '女',
//     hasBodyFrined: true,
//     boyAttribute: {
//         age: 22,
        
//     }
// }

// zss.boyAttribute.age = 20;
// console.log(zss.boyAttribute.age);
var chicken = {
    duckSinging: function(){
        console.log('嘎嘎嘎');
    }

}

// choir.push(duck);
for(var i=0; i<999; i++){
    joinChoir(duck);
}

joinChoir(chicken);

// choir.push(chicken);

console.log(choir.length);

// for(var i=0; i<choir.length; i++){
//     var singer = choir[i];
//     if(!singer.duckSinging){
//         console.log('不是鸭子');
//         break;
//     }
// }


function joinChoir(ani){
    if(ani && typeof ani.duckSinging == 'function'){
        choir.push(ani);
    }else{
        console.log('不合要求');
    }
}