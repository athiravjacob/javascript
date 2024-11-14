// Given two strings. Find if one string can be formed by rearranging the letters of other string.

let firstWord = "tac"
let secWord = "rat"
let flag = 0
let split_1 = [...firstWord]
let split_2 = [...secWord]

function checkString(word1, word2) {
    if (word1.length !== word2.length) return false
    for (let i = 0; i < word1.length; i++){
        if (!word2.includes(word1[i])) {
            return false
        }
    }
    return true
    
}

if (!checkString(split_1,split_2)) {
    console.log("No.Rearranging letters won't give same words")   
} else {
    console.log("Yes.Rearranging letters give same words")   

}
