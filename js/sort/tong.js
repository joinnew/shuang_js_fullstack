const arr1 = [35,99,18,76,12];

function sort() {
    const arr = [];
    // 方法是：利用数组下标，数字大小在下标范围之内，下标是天然有顺序的。
    const a = [];
    for (let i = 0; i < 100; i++) {
        a[i] = 0;
        // 桶子做好了
    }
    for (let i = 0; i < arr1.length; i++) {
        const item = arr1[i];
        a[item] += 1;
    }
    for (let i = 0; i < a.length; i++) {
        if ( a[i] > 0) {
            // 以push的形式输入，
            for (let j = 0; j < a[i]; j++)
            // 此时若出现了重复情况，那么push会多次输入同一个值
            arr.push(i);
        }
    }
    return arr;
}
const sorted_arr = sort();
console.log(sorted_arr);
// for (var i = 0; i < 100; i++) {
//     arr[i] = 0;
// }

// for (var i = 0; i < arr1.length; i++) {
//     arr[arr1[i]]++;
// }

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] != 0) {
//         console.log(i);
//     }
// }


