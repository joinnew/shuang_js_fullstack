

const arr = [4,4,43,2,1,4,5];

// const set = Array.from(new Set(arr));
// console.log(set);

function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type errot');
        return;
    }
    // 类数组 for of
    return Array.from(new Set(arr));
}

console.log(unique(arr));