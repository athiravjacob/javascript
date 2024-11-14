//Write a JavaScript program to find the maximum number in an array.

let array = [10,34,67,8]
let largest = 0
for (let i = 1; i < array.length; i++){
    if (array[i] > array[largest])
        largest = i
}
console.log(array[largest])