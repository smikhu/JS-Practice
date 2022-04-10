// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll() {
    // ES5 arguments & for loop
    let args = Array.prototype.slice.call(arguments)
    let total = 0;
    for (i = 0; i < args.length; i++) {
        total += args[i]
    }
    return total
}

console.log(addAll(2, 5, 6, 7))
console.log(addAll(2, 5, 6, 7, 5))



function addAll2(...numbers) {
    total = 0;
    numbers.forEach(function(num) {
        total += num
    })
    return total
}

console.log(addAll2(2, 5, 6, 7))
console.log(addAll2(2, 5, 6, 7, 8))