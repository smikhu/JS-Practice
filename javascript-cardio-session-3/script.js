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

// console.log(addAll(2, 5, 6, 7))
// console.log(addAll(2, 5, 6, 7, 5))



function addAll2(...numbers) {
    total = 0;
    numbers.forEach(function(num) {
        total += num
    })
    return total
}

// console.log(addAll2(2, 5, 6, 7))
// console.log(addAll2(2, 5, 6, 7, 8))


function addAll3(...numbers) {
    return numbers.reduce((acc, cur) => acc + cur)
}

// console.log(addAll3(2, 5, 6, 7))
// console.log(addAll3(2, 5, 6, 7, 7))


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

// console.log(sumAllPrimes(10))
// console.log(sumAllPrimes(25))




// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 5, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy(arr) {
    // arguments, indexOf, filter
    const args = Array.from(arguments);

    function filterArr(arr) {
        // Return true if NOT in array
        return args.indexOf(arr) === -1;
    }

    return arr.filter(filterArr);
}

console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6, 'hello'));




function seekAndDestroy2(arr, ...rest) {
    // ...rest, filter & includes
    return arr.filter( val => !rest.includes(val));
}


console.log(seekAndDestroy2([2, 3, 4, 6, 6, 'hello'], 2, 6, 'hello'));



// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(a) {
    const arr1 = [];
    const arr2 = [];
    
    a.forEach((val, i) => {
        if(val === -1) {
            arr1.push(i);
        } else {
            arr2.push(val);
        }
    });
    // console.log(arr1, arr2)

    const sortArr = arr2.sort((a, b) => a - b)

    // console.log(sortArr)

    arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1))

    return sortArr;

}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))