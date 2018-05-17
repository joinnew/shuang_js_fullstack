const arr = [1, 2, 3, 4, 5, 6, 7, 6, 9];

const newarr = [];

// arr.forEach(i => {
//     if ( newarr.isEmpty ) newarr.push(i);
//     console.log(i);
//     newarr.forEach(j => {
//         if (i === j)
//         console.log(j);
//     })
// })

// console.log(newarr);

function unique(arr) {
    if (!Array.isArray(arr)){
        retrun;
    }
    // 准备一个空数组,结果数组,没有重复的元素的
    const resultArr = arr[0];
    for (let i = 1; i < arr.length; i++) {
        // arr[i]
        let flag = true;
        for (let j = 0; j < resultArr.length; j++) {
            if (arr[i] === resultArr[j]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            resultArr.push(arr[i]);            
        }
    }
    return resultArr;
}

unique(arr);