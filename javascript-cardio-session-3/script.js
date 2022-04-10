// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll() {
    // ES5 arguments & for loop
    let args = Array.prototype.slice.call(arguments)
    let total = 0;
    for (let i = 0; i < args.length; i++) {
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


function addAll3(...numbers) {
    return numbers.reduce((acc, cur) => acc + cur)
}

console.log(addAll3(2, 5, 6, 7))
console.log(addAll3(2, 5, 6, 7, 7))


// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(num) {
    let total = 0;

    function checkForPrime(i) {
        for(let j = 2; j < i; j++) {
            if (i % j === 0) {
                return false
            }
        }
        return true
    }

    for (let i = 2; i <= num; i++) {
        if(checkForPrime(i)) {
            total += i
        }
    }
    return total;
}

console.log(sumAllPrimes(10))
console.log(sumAllPrimes(25))