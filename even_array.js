//Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

function evenNumbers(arr) {
    let even = arr.filter(x=> x%2 == 0 )
    return even
}

console.log(evenNumbers([12,4,587,3,24]))