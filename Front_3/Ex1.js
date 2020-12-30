function deleteByIndex(arr, index) {
    arr.splice(index,1)
    return arr
}
var arr = ['a', 'b', 'c']
console.log(deleteByIndex(arr, 1))