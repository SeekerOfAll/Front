function combineAndSort(...param){
    let res = [].concat(...param);
    res.sort(function(a, b){return a - b});
    return res;
}

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [9, 8, 7, 0];

console.log(combineAndSort(array1,array2,array3))