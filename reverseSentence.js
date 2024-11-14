let sentence = "hello world"
let word = ''
let arr = []
for (let i = 0; i <= sentence.length; i++){
    if (sentence[i] === ' ' || i === sentence.length) {
        arr.push(word)
        word = ''
    }
    word +=sentence[i]
}
let reverseSentence = ''
for (let i = arr.length-1; i >=0; i--){
    reverseSentence += arr[i]
    reverseSentence += " "
}
console.log(reverseSentence);