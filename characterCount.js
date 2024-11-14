// Given a string, write a javascript function to count the occurrences of each character in the string

let word = "abbabbab"
let obj = {}
for (let i = 0; i < word.length; i++){
    if (!word[i] in obj) {
        obj[word[i]] = 1
    } else {
        let n = obj[word[i]]
        obj[word[i]] = n++
    }
}
console.log(obj)