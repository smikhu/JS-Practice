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

// console.log(summation(8))



// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy! You just need to write a script.

// Return the average of the given array rounded DOWN to its nearest integer.

// The array will never be empty.


function getAverage(scoreArray) {
    let count = scoreArray.length;
    let sum = 0;
    for (let i = 0; i < count; i++) {
        sum = sum + scoreArray[i]
    }

    const avg = sum / count;
    const roundedDown = Math.floor(avg)

    return roundedDown;
    
}

// console.log(getAverage([5, 6, 7, 8, 25, 36, 55]))


// Rock, Paper, Scissors. Let's play! You have to return which player won! In case of a draw return "Draw!".

function rockPaperScissors(player1, player2) {
    if (player1 === "rock") {
        if (player2 === "rock") {
            return "Draw!"
        } else if (player2 === "paper") {
            return "Player 2 wins!"
        } else if (player2 === "scissors") {
            return "Player 1 wins!"
        }
    }   

    if (player1 === "paper") {
        if (player2 === "paper") {
            return "Draw!"
        } else if (player2 === "scissors") {
            return "Player 2 wins!"
        } else if (player2 === "rock") {
            return "Player 1 wins!"
        }
        
    }

    if (player1 === "scissors") {
        if (player2 === "scissors") {
            return "Draw!"
        } else if (player2 === "paper") {
            return "Player 1 wins!"
        } else if (player2 === "rock") {
            return "Player 2 wins!"
        } 
    }
}

// console.log(rockPaperScissors("scissors", "paper"))
// console.log(rockPaperScissors("scissors", "rock"))
// console.log(rockPaperScissors("paper", "paper"))
// console.log(rockPaperScissors("rock", "paper"))
// console.log(rockPaperScissors("scissors", "scissors"))

function rps(player1, player2) {
    if (player1 == player2) {
        return "Draw!"
    }

    if (player1 == "rock" && player2 == "scissors") {
        return "Player 1 wins!"
    } else if (player1 == "paper" && player2 == "rock") {
        return "Player 1 wins!"
    } else if (player1 == "scissors" && player2 == "paper") {
        return "Player 1 wins!"
    } else {
        return "Player 2 wins!"
    }
}


// console.log(rps("scissors", "paper"))
// console.log(rps("scissors", "rock"))
// console.log(rps("paper", "paper"))
// console.log(rps("rock", "paper"))
// console.log(rps("scissors", "scissors"))
// console.log(rps("paper", "rock"))
// console.log(rps("paper", "scissors"))




// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str) {
    return str.substring(1, str.length - 1)
}

// console.log(removeChar("Steven"))

function removeChar2(str) {
    return str.slice(1, -1) 
}

// console.log(removeChar2("Steven"))

function removeChar3(str) {
    str1 = str.split("");
    console.log(str1)
    str1.shift();
    console.log(str1)
    str1.pop()
    console.log(str1)
    return str1.join('')
}

// console.log(removeChar3("Steven"))




// You get an array of numbers, return the sum of all of the positive ones.

function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum = sum + arr[i]
        }
    }
    return sum
}

// console.log(positiveSum([1, -4, 7, 12]))
// console.log(positiveSum([1, -4, 7, 12]))




// Your task is to create a function that does four basic mathemetical operations. The function should take three arguments - operation(string/char), value1(number), value2(number). The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2) {
    if (operation === "+") {
        return value1 + value2
    } else if (operation === "-") {
        return value1 - value2
    } else if (operation === "*") {
        return value1 * value2
    } else if (operation === "/") {
        return value1 / value2
    } else {
        return "wrong arguments given"
    }
}

// console.log(basicOp("+", 4, 7))
// console.log(basicOp("-", 15, 18))
// console.log(basicOp("*", 5, 5))
// console.log(basicOp("/", "49", "7"))
// console.log(basicOp("hello", 49, 7))


function basicOp2(op, v1, v2) {
    switch(op) {
        case "+":
            return v1 + v2
        case "-":
            return v1 - v2
        case "*":
            return v1 * v2
        case "/":
            return v1 / v2
        default:
            return 0;
    }
}

// console.log(basicOp2("+", 4, 7))
// console.log(basicOp2("-", 15, 18))
// console.log(basicOp2("*", 5, 5))
// console.log(basicOp2("/", "49", "7"))


function basicOp3(op, v1, v2) {
    return eval(v1+op+v2)
}

// console.log(basicOp3("+", 4, 7))
// console.log(basicOp3("-", 15, 18))
// console.log(basicOp3("*", 5, 5))
// console.log(basicOp3("/", 49, 7))



// Write a function called repeatStr which repeats the given string str exactly count times.

function repeatStr(count, str) {
    let starterString = ''

    for (let i = 0; i < count; i++) {
        starterString = starterString + str
    }
    return starterString
}

// console.log(repeatStr(5, "hello"))


function repeatStr2(n, s) {
    return s.repeat(n);
}

// console.log(repeatStr2(20, "steven"))





// Write a function to split a string and convert it into an array of words.

function stringToArray(string) {
    return string.split(" ")
}

// console.log(stringToArray("Steven Mikhu"))
// console.log(stringToArray("I love arrays they are my favorite"))






// Remove the spaces from the string, then return the resultant string.


function noSpace(str) {
    let splitting = str.split(" ")
    let result = splitting.join("")
    return result;
}

// console.log(noSpace("Steven Mikhu"))
// console.log(noSpace("I love arrays they are my favorite"))



// Given an array of integers, return a new array with each value doubled.


function maps(str) {
    let doubled = str.map(number => number * 2)
    return doubled
}

console.log(maps([1, 2, 3]))
console.log(maps([3, 6, 9]))


function maps2(str) {
    let result = str.map((arrItem) => {
        return arrItem * 2
    })
    return result
}

console.log(maps2([1, 2, 3]))
console.log(maps2([3, 6, 9]))
console.log(maps2([4, 8, 12]))
