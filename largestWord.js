//find longest word in a given sentence 

let sentence = "find longest word in a given sentence"
let word ='' ;
let arrayOfWords = []
for(let i= 0;i<=sentence.length;i++){
    if(sentence[i] === ' '|| i === sentence.length){
        arrayOfWords.push(word)
        word = ""
    }
    word +=sentence[i]
}
let largest = 0
for(let i = 1;i<arrayOfWords.length;i++){
    if(arrayOfWords[i].length > arrayOfWords[largest].length)
        largest = i
}

console.log(arrayOfWords[largest])