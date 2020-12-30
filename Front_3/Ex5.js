function replaceByItem(array, currentItem, newItem) {
    // for (let i of array) {
    //     if (i == currentItem) {
    //         array.splice(array.indexOf(i),1,newItem)
    //     }
    // }

    for (let i = 0; i < array.length; i++){
        if (array[i] == currentItem){
            array[i] = newItem;
        }
    }

    return array
}

var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(replaceByItem(arr, 'e', 't'))
