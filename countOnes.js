// count consecutive One's in an array

let arr = [1, 2, 3, 1, 1, 1, 1, 3, 1]
let count = 0
for (let i = 0; i < arr.length; i++){
    if (arr[i] === 1 && arr[i + 1] === 1) {
        count+=1
    }
}

console.log(count+1)