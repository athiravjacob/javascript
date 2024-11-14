// Write a JavaScript function to check if a given number is prime

function prime(number) {
    if(number == 1 || number == 2) return true
    for (let i = 3; i < number / 2; i++){
        if(number%i == 0) return false
    }
     return true
}
console.log(prime(12))