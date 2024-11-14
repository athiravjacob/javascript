// Reverse a String

let word = "Hello"
let reverse = ''

for (let i = word.length - 1; i >= 0; i--){
    reverse +=word[i]
}
console.log("Orginal String :"+  word)
console.log("String reverse: " + reverse )