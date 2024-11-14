// Create a function which will accepts two arrays arr1 and arr2.
// The function should return true if every value in arr1 has its
// corresponding value squared in array2.The frequency of values must be same.


const checkSquare = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++){
        if (!arr2.includes(arr1[i] * arr1[i])) return false
    }
    return true
}

let arr1 = [1, 2, 3]
let arr2=[1,9,4]
console.log(checkSquare(arr1,arr2))