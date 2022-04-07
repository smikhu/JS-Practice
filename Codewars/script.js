// Finding even or odd numbers using modulus 

function even_or_odd(number) {
    if(number % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

// console.log(even_or_odd(1000))


function even_or_odd2(number) {
    return number % 2 === 0 ? "Even" : "Odd"
}

// console.log(even_or_odd2("999"))








// Return the number (count) of vowels in the given string. We will consider a,e,i,o,u as vowels for this problem (but not y). The input string will only consists of lower case letters and/or spaces.

function getCount(str) {
    let vowelsCount = 0;
    let vowels = ["a", "e", "i", "o", "u"]
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if(str[i] === vowels[j]) {
                vowelsCount++
            }
        }
    }
    return vowelsCount;
}

// console.log(getCount("alligator"));
// console.log(getCount("jaguar"));
// console.log(getCount("lynx"));

function getCount2(str) {
    let vowelsCount = 0;
    let arr = str.split("")
    console.log(arr)
    for(let i = 0; i < arr.length; i++) {
        switch(arr[i]) {
            case "a":
            case "A":
            case "e":
            case "E":
            case "i":
            case "I":
            case "o":
            case "O":
            case "u":
            case "U":
                vowelsCount++;
                break;
        }
    }
    return vowelsCount;
}

// console.log(getCount2("japan"))
// console.log(getCount2("new zealand"))
// console.log(getCount2("Iraq"))








// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake. Can you help her?

// function greet(name) {
//     return "Hello, " + name + "!";
//     if(name === "Johnny")
//         return "Hello, my love!";
// }

function greet(name) {
    if (name === "Johnny") {
        return "Hello, my love!";
    } else {
        return "Hello, " + name + "!";
    }
}

// console.log(greet("Steven"))
// console.log(greet("Johnny"))

function greet2(name) {
    return name === "Johnny" ? "Hello, my love!" : `Hello, ${name}!`;
}

// console.log(greet2("Steven"))
// console.log(greet2("Johnny"))








// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0) {
        return true
    } else {
        return false
    }
}

// console.log(isDivisible(3, 1, 3))
// console.log(isDivisible(12, 2, 6))
// console.log(isDivisible(100, 5, 3))
// console.log(isDivisible(12, 7, 5))

function isDivisible2(n, x, y) {
    return (n % x === 0 && n % y === 0) ? true : false;
}

// console.log(isDivisible2(3, 1, 3))
// console.log(isDivisible2(12, 2, 6))
// console.log(isDivisible2(100, 5, 3))
// console.log(isDivisible2(12, 7, 5))








// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
    if (num < 0) {
        return num
    } else if (num === 0 || num === "0") {
        return 0
    } else {
        return num * -1
    }
}

// console.log(makeNegative(21))
// console.log(makeNegative(-21))
// console.log(makeNegative(0))
// console.log(makeNegative("0"))

function makeNegative2(num) {
    return (num < 0 || num === 0 || num === "0") ? num : -num;
}

// console.log(makeNegative2(32))
// console.log(makeNegative2(-32))
// console.log(makeNegative2(0))
// console.log(makeNegative2("0"))




function makeNegative3(num) {
    return -Math.abs(num)
}

// console.log(makeNegative3(43))
// console.log(makeNegative3(-43))




// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

function summation(num) {
    let sum = 0;
    for(let i = 1; i <= num; i++) {
        // sum = sum + i;
        sum+= i;
        console.log(sum)
    }
    return sum
}

console.log(summation(8))