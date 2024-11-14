// Write a JavaScript program to find the largest element in a nested array.
//[[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]

let nestArr = [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]
let flat = []
for (let i = 0; i < nestArr.length; i++){
    if (Array.isArray(nestArr[i])) {
        flat.push(...nestArr[i])
    }
    
}
console.log(flat)