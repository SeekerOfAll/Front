function removeDuplicate(arr){
    return  arr.filter((item, index) => arr.indexOf(item) === index)
}

var arr = ['1', '1', '4', '5', '3', '5', '3', '9'];
console.log(removeDuplicate(arr))