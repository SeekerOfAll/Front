function extractNumber(string){
    string = string.split(" ")
    let res =[]
    for(let i of string){
        if(!isNaN(i)){
            res.push(i)
        }
    }
    return res
}

let string = "I have 2 apples and 3 pineapples";
console.log(extractNumber(string))
