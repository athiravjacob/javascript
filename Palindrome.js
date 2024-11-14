// Palindrome

let word = "malayalam"
let reverse='';
for (let i = word.length - 1; i >= 0; i--){
    reverse =reverse+word[i]
}

if (reverse === word) console.log("Its a palindrome")
else console.log("Not a palindrome")