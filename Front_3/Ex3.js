function flatArrays(arr) {
    // return arr.flat(Infinity)
     return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatArrays(val)) : acc.concat(val), []);
}

var arr = [[2, 3], 5, [[[2, 9], 4], 4], 1, 0];
console.log(flatArrays(arr));
