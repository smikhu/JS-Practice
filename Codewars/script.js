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

// console.log(maps([1, 2, 3]))
// console.log(maps([3, 6, 9]))


function maps2(str) {
    let result = str.map((arrItem) => {
        return arrItem * 2
    })
    return result
}

// console.log(maps2([1, 2, 3]))
// console.log(maps2([3, 6, 9]))
// console.log(maps2([4, 8, 12]))




// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! Each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive? 

// Return True if yes, False otherwise.


function hero(bullets, dragons) {
    if (bullets / dragons >= 2) {
        return true
    } else {
        return false
    }
}

// console.log(hero(12, 6))
// console.log(hero(11, 6))


function hero2(bullets, dragons) {
    return bullets / dragons >= 2;
}

// console.log(hero2(12, 6))
// console.log(hero2(11, 6))
// console.log(hero2(3, 2))


function hero3(bullets, dragons) {
    return bullets / dragons >= 2 ? true : false
}

// console.log(hero3(12, 6))
// console.log(hero3(11, 6))
// console.log(hero3(10, 4))




// I'm new to coding and now I want to get teh sum of two arrays... actually the sum of all their elements. I'll appreciate your help.

// Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
    let sum = 0;

    for (let i = 0; i < arr1.length; i++) {
        let sumOfTwo = arr1[i] + arr2[i] 
        // let arr1Value = arr1[i];
        // let arr2Value = arr2[i];

        // let addedValue = arr1Value + arr2Value

        sum = sum + sumOfTwo
    }
    return sum
}

// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))
// console.log(arrayPlusArray([3, 6, 9], [12, 15, 18]))





// The first century spans from the year 1 up to and including the year 100. The second - from the year 101 up to and including the year 200.

// Given a year, return the century it is in.

function century(year) {
    return Math.ceil(year/100)
}

// console.log(century(1900))
// console.log(century(1901))
// console.log(century(89))


function century2(year) {
    if (year < 100) {
        return 1
    }


const firstTwoDigits = year.toString().substr(0, 2);

if (year % 100 === 0) {
    return Number(firstTwoDigits);
} else {
    return Number(firstTwoDigits) + 1;
}
}

// console.log(century2(1900))
// console.log(century2(1901))
// console.log(century2(89))




// I have a cat and a dog.
// I got them at the same time as kitten/puppy. That was humanYears ago.
// Return their respective ages now as [humanYears, catYears, dogYears]
// humanYears >= 1 / humanYears are whole numbers only
// Cat Years - 15 cat years for first year/ +9 cat years for second year/ +4 cat years for each year after that
// Dog Years - 15 dog years for the first year/ +9 dog years for second year/ +5 dog years for each year after that


var humanYearsCatYearsDogYears = function(humanYears) {
    let catsAge;
    let dogsAge;

    if (humanYears === 1) {
        return [humanYears, 15, 15];
    }

    if (humanYears === 2) {
        return [humanYears, 24, 24]
    }

    const excessYears = humanYears - 2;
    const extraCatYears = excessYears * 4;
    const extraDogYears = excessYears * 5;

    return [humanYears, 24 + extraCatYears, 24 + extraDogYears]

}

// console.log(humanYearsCatYearsDogYears(3))



var humanYearsCatYearsDogYears2 = function(humanYears) {
    if (humanYears == 1) return [1, 15, 15]
    if (humanYears == 2) return [2, 24, 24]
    return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24]
}

// console.log(humanYearsCatYearsDogYears2(3))
// console.log(humanYearsCatYearsDogYears2(5))




// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.
// For exmaple: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:
// if x > y - 3 points
// if x < y - 0 point
// if x = y - 1 point

// Notes:
// there are 10 matches in the championship
// 0<=x<=4
// 0<=y<=4

function points(gamesArray) {
    let totalPoints = 0;

    for (let i = 0; i < gamesArray.length; i++) {

        const value = gamesArray[i];

        const parts = value.split(":");

        const x = parts[0];
        const y = parts[1];

        if (x > y) {
            totalPoints += 3
        } else if (x === y) {
            totalPoints += 1
        }
    }
    return totalPoints
}

// console.log(points(["3:1", "1:1", "0:3", "3:0", "3:1"]))





// Write a JS program to check two numbers and return true if one of the numbers is 100 or if the sum of the two numbers is 100.

function sumOfTwo(num1, num2) {
    if(num1 === 100 || num2 === 100 || num1 + num2 === 100) {
        return true
    } else {
        return false
    }
}

// console.log(sumOfTwo(38, 62))
// console.log(sumOfTwo(38, 100))
// console.log(sumOfTwo(100, 50))
// console.log(sumOfTwo(0, 0))





// Write a JS program to get the extension of a filename.

function fileName(file) {
    let splitting = file.split('.')
    console.log(splitting)
    return splitting[1]
}

// console.log(fileName('kante.png'))
// console.log(fileName('pulisic.jpeg'))
// console.log(fileName('kovacic.html'))



const fileName2 = (str) => str.slice (str.lastIndexOf('.'))

// console.log(fileName2('kante.png'))
// console.log(fileName2('pulisic.jpeg'))
// console.log(fileName2('kovacic.html'))



function fileName3(str) {
    return str.slice(str.lastIndexOf('.'))
}

// console.log(fileName3('kovacic.gif.jpeg'))





// Write a JS program to replace every character in a given string with the character following it in the alphabet.


function moveCharsForward(str) {
    let splitting = str.split('')
    console.log(splitting)
    let char = splitting.map(char => String.fromCharCode(char.charCodeAt(0) + 1))
    console.log(char)
    return char.join('')
}

// console.log(moveCharsForward('hello'))





// Write a JS program to get the current date. Expected Output : mm-dd-yyyy

let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let fullDate = `${month}-${day}-${year}`

// console.log(fullDate)



const formatDate = (date = new Date()) => {
    const days = date.getDate();
    const months = date.getMonth() + 1;
    const years = date.getFullYear();
    return `${days}/${months}/${years}`
}

// console.log(formatDate())





// Write a JS program to create a new string adding "New!" in front of a given string. If the given string begins with "New!" already then return the original string.


function addNew(str) {
    let word = "New!"
    if(str.includes("New!")) {
        return str 
    } else {
        return word + " " + str
    }
}

// console.log(addNew("hello"))
// console.log(addNew("goodbye"))
// console.log(addNew("New! hello"))
// console.log(addNew("New! New! hello New!"))
// console.log(addNew("New! New! New! hello"))




// Write a JS program to create a new string from a given string taking the first 3 characters and the last 3 characters of a string and adding them together. The string length must be 3 or more, if not, the original string is returned.


function newString(str) {
    if(str.length <= 3) {
        return str
    } else {
        return str.slice(0, 3) + str.slice(-3)
    }
}

// console.log(newString("dog"))
// console.log(newString("alligator"))
// console.log(newString("crocodile"))
// console.log(newString("zomhahahabie"))




// Write a JS program to extract the first half of a string of even length.


function firstHalf(str) {
    return str.slice(0, str.length / 2)
}

// console.log(firstHalf("zombie"))
// console.log(firstHalf("catapult"))




// Write a JS program to concatenate two strings except their first character. 


function addTwoStrings(str1, str2) {
    let slice1 = str1.slice(1)
    let slice2 = str2.slice(1)
    return slice1 + slice2
}

// console.log(addTwoStrings("alligator", "crocodile"))



// Given two values, write a JS program to find out which one is nearest to 100.

function nearestNum(num1, num2) {
    let a = 100 - num1
    let b = 100 - num2

    if(a < b) {
        return num1
    } else {
        return num2
    }
}

// console.log(nearestNum(7, 21))
// console.log(nearestNum(35, 21))



function nearestNum2(num1, num2) {
    return (100 - num1) < (100 - num2) ? num1 : num2;;
}

// console.log(nearestNum2(50, 49))
// console.log(nearestNum2(38, 49))




// Write a JS program to check if a given string contains 2 to 4 occurences of a specified character.

function countChars(str, char) {
    return str.split('').filter(ch => ch === char).length;
}

// console.log(countChars('ooh!', 'o'))
// console.log(countChars('oh!', 'o'))
// console.log(countChars('oooh!', 'o'))
// console.log(countChars('ooooh!', 'o'))
// console.log(countChars('oooooh!', 'o'))


function contains2To4(str, char) {
    return countChars(str, char) >= 2 && countChars(str, char) <= 4;
}


// console.log(contains2To4('ooh!', 'o'))
// console.log(contains2To4('oh!', 'o'))
// console.log(contains2To4('oooh!', 'o'))
// console.log(contains2To4('ooooh!', 'o'))
// console.log(contains2To4('oooooh!', 'o'))




// Write a JS program to find the number of even digits in an array of integers.



function evenNumbersInArr(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            sum++
        }
    }
    return sum
}

// console.log(evenNumbersInArr(['1', '2', '3', '4', '5', '6', '7', '8']))
// console.log(evenNumbersInArr(['1', '2', '3', '4']))
// console.log(evenNumbersInArr(['1', '2', '3', '4', '5', '6']))
// console.log(evenNumbersInArr(['1', '2', '3', '4', '5', '6', '7']))
// console.log(evenNumbersInArr(['2', '4', '6', '8', '10', '12', '14']))
// console.log(evenNumbersInArr(['1', '3', '5', '7', '9', '11', '13']))



function evenNumbersInArr2(arr) {
    return arr.filter(num => num % 2 === 0).length;
}


// console.log(evenNumbersInArr2(['1', '2', '3', '4', '5', '6', '7', '8']))
// console.log(evenNumbersInArr2(['1', '2', '3', '4']))
// console.log(evenNumbersInArr2(['1', '2', '3', '4', '5', '6']))
// console.log(evenNumbersInArr2(['1', '2', '3', '4', '5', '6', '7']))
// console.log(evenNumbersInArr2(['2', '4', '6', '8', '10', '12', '14']))
// console.log(evenNumbersInArr2(['1', '3', '5', '7', '9', '11', '13']))





// Write a JS program to find the number of even values up to a given number


function findEvenNums(num) {
    const returnArr = [];
    for(let i = 1; i <= num; i += 1) {
        returnArr.push(i);
    }
    return returnArr;
}


// console.log(findEvenNums(5))
// console.log(findEvenNums(10))
// console.log(evenNumbersInArr(findEvenNums(10)))
// console.log(evenNumbersInArr(findEvenNums(16)))
// console.log(evenNumbersInArr(findEvenNums(100)))







// Write a JS program to check whether a given array of integers is sorted in ascending order.


function ascendingOrd(arr) {
    for(let i = 0; i < arr.length; i += 1) {
        if(arr[i+1] < arr[i]) return false;
    }
    return true;
}

// console.log(ascendingOrd([1, 2, 3, 4, 5, 6]))
// console.log(ascendingOrd([1, 2, 5, 4, 3, 6]))
// console.log(ascendingOrd([1, 2, 3, 4, 6, 6]))



// Write a JS program to get the largest even number from an array of integers.


function largestEven2(arr) {
    return Math.max(...arr.filter(num => num % 2 === 0));
}

// console.log(largestEven2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13]))
// console.log(largestEven2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 4, 34, 16, 2, 1, 24]))
// console.log(largestEven2([1, 2, 3, 4, 5, 6, 1001, 1002, 1003, 10, 11, 13, 15, 16]))




// Write a JS program to replace the first digit in a string (should contains at least 1 digit) with $ character.


function replaceFirstDig(str) {
    return str.replace(/h/gi, '$')
}

// console.log(replaceFirstDig('Hello'))







// Given a year, report if it is a leap year.

function leapYear(num) {
    return num % 4 === 0;
}

// console.log(leapYear(2014))
// console.log(leapYear(2015))
// console.log(leapYear(2016))
// console.log(leapYear(2017))
// console.log(leapYear(2018))
// console.log(leapYear(2019))
// console.log(leapYear(2020))




// Write a JS program to compare two objects to determine if the first one contains the same properties as the second one (which may also have additional properties)

const objA = { a: 1, b: 1, c: 1 }
const objB = { a: 1, b: 1, c: 1 }
const objC = { a: 1, b: 1, d: 1 }

function compareTwoObj(a, b) {
    return Object.keys(a).every(key => b[key])
}


// console.log(compareTwoObj(objA, objB))
// console.log(compareTwoObj(objA, objC))
// console.log(compareTwoObj(objC, objB))
// console.log(compareTwoObj(objB, objA))




// Write a JS program to convert a comma-separated values (CSV) string to a 2D array. A new line indicates a new row in the array. 
// Exmaple: abc, def, ghi        jkl, mno, pqr       stu, vwx, yza


function parseCSV(csvStr) {
    return csvStr.split('\n').map(row => row.split(','))
}

const str = `abc,def,ghi 
jkl,mno,pqr 
stu,vwx,yza`

// console.log(parseCSV(str))






// Write a JS program to generate a random hexadecimal color code.

function getRandomHexNumber() {
    return Math.floor(Math.random() * 16).toString(16)
}

// console.log(getRandomHexNumber())
// console.log(getRandomHexNumber())
// console.log(getRandomHexNumber())


function getRandomHexColor() {
    return '#' + Array.from({length: 6}).map(getRandomHexNumber).join('')
}

// console.log(getRandomHexColor())





// Write a JS function that returns true if the provided predicate function returns true for all elements in a collection, false otherwise.


// console.log([1,2,3,4,5].every(x => x > 0))
// console.log([1,2,3,4,5].every(x => x > 3))



function isEveryElem(arr, fn) {
    for (let i = 0; i < arr.length; i += 1) {
        if (!fn(arr[i])) {
            return false;
        }
    }
    return true;
}


// console.log(isEveryElem([1, 2, 3, 4, 5], (x) => x > 0))
// console.log(isEveryElem([1, 2, 3, 4, 5], (x) => x > 3))





// Write a JS function that returns a passed string with letters in alphabetical order.
// Exmaple string: 'webmaster' Expected Output: 'abeemrstw'


function abcString(str) {
    return str.split('').sort().join('');
}


// console.log(abcString('webmaster'))
// console.log(abcString('javascript'))
// console.log(abcString('zombie'))






// Write a JS function that accepts a string as a parameter and counts the number of vowels within the string.


function countLetters(str, letters = ['a', 'e', 'i', 'o', 'u']) {
    return str.split('').filter(s => letters.indexOf(s) > -1).length
}



// console.log(countLetters('webmaster'))
// console.log(countLetters('javascript'))
// console.log(countLetters('zombie'))
// console.log(countLetters('hello'))




// Write a JS function to convert an amount to coins. Exmaple input: 46 and possible coins 25, 10, 5, 2, 1  Output: 25, 10, 10, 1


function countCoins(money, coins = [25, 10, 5, 2, 1]) {
    const totalCoins = [];
    for (let i = 0; i < coins.length; i += 1) {
        const thisCoinNum = Math.floor(money / coins[i]);
        for (let y = 0; y < thisCoinNum; y += 1) {
            totalCoins.push(coins[i])
        }
        money -= coins[i] * thisCoinNum;
    }
    return totalCoins
}


// console.log(countCoins(46))
// console.log(countCoins(83))




function countCoins2(amount, coins=[25, 10, 5, 2, 1]) {
    let totalCoins = [];
    let j = 0;

    while(amount > 0) {
        if(amount >= coins[j]) {
            amount -= coins[j];
            totalCoins.push(coins[j])
        }

        if(amount < coins[j]) {
            j++
        }
    }
    return totalCoins
}


// console.log(countCoins2(46))
// console.log(countCoins2(83))




function countCoins3(money){
    let coins = [25, 10, 5, 2, 1];
    let result = [];

    for (let i=0; i<coins.length; i++) {
        while(money>=coins[i]){
            result.push(coins[i]);
            money = money-coins[i];
        }
    }
    return result
}

// console.log(countCoins3(45))
// console.log(countCoins3(83))





// Write a JS function to extract unique characters from a string.

const getUniqueChars = (str) =>
    str.split('').filter(
        (item, index, arr) => 
            arr.slice(index + 1).indexOf(item) === -1
)

// console.log(getUniqueChars('aaabbbccc'))




const getUniqueChars2 = (str) =>
        [... new Set(str.split(''))];

// console.log(getUniqueChars2('aaabbbccc'))
// console.log(getUniqueChars2('aaabbbccceeeddddcccaaabb'))





// Write a JS function to find the first not repeated character. Example string: 'abacddbec'  Expected output: 'e'



const getNonRepeatedChars = (str) =>
        str.split('')
            .filter((item, index, arr) =>
                arr.filter(arrItem => arrItem === item).length === 1  
        );

// console.log(getNonRepeatedChars('abacddbec'))



//  Write a JS function that returns the values of an array that are not odd. All values in the array will be integers. Return the good values in the order they are given.

function noOdds(values) {
    return values.filter(val => val % 2 === 0);
}

// console.log(noOdds([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// console.log(noOdds([1, 3, 5, 7, 9, 10]))



function noOdds2(values) {
    const arr = [];
    for(let i = 0; i < values.length; i++) {
        if( values[i] % 2 === 0) {
            arr.push(values[i])
        }
    }
    return arr
}

// console.log(noOdds2([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// console.log(noOdds2([0, 1, 2, 3, 5, 6, 7, 8, 9, 10]))
// console.log(noOdds2([0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 231, 531, 221, 444]))


const orders = [
    { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
        { productId: '123', price: 55 },
        { productId: '234', price: 30 },
    ]},
    { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
        { productId: '234', price: 30 },
    ]},
    { orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
        { productId: '567', price: 30 },
        { productId: '678', price: 80 },
    ]},
    { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '789', price: 12 },
        { productId: '890', price: 90 },
    ]},
        { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '901', price: 43 },
        { productId: '123', price: 55 },
    ]},
];

// Exercises

// 1) Get a list of the orders for the customer with the ID 234 that have not been delivered.
console.log(orders.filter(order => order.customerId === '234' && !order.delivered))


// 2) Create a new property on each order with the total price of items ordered.
console.log(orders.map(order => ({...order, orderTotal: order.items.reduce((acc, item) => acc + item.price, 0)})))

// 3) Have all the orders been delivered?
console.log(orders.every(order => order.delivered))

// 4) Has the customer with ID '123' made any orders?
console.log(orders.some(order => order.customerId === '123'))

// 5) Have any products with an id of 123 been sold?