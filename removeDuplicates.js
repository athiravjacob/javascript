// Remove duplicated from an array

let arr = [1, 2, 1, 0, 2, 0]
let temp = []
for (let i = 0; i < arr.length; i++){
    if (!temp.includes(arr[i]))
        temp.push(arr[i])
    else {
        arr[i]=''
    }
}

console.log(arr)
console.log(temp)