// // Finding even or odd numbers using modulus

// function even_or_odd(number) {
//     if(number % 2 === 0) {
//         return "Even"
//     } else {
//         return "Odd"
//     }
// }

// // console.log(even_or_odd(1000))

// function even_or_odd2(number) {
//     return number % 2 === 0 ? "Even" : "Odd"
// }

// // console.log(even_or_odd2("999"))

// // Return the number (count) of vowels in the given string. We will consider a,e,i,o,u as vowels for this problem (but not y). The input string will only consists of lower case letters and/or spaces.

// function getCount(str) {
//     let vowelsCount = 0;
//     let vowels = ["a", "e", "i", "o", "u"]
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < vowels.length; j++) {
//             if(str[i] === vowels[j]) {
//                 vowelsCount++
//             }
//         }
//     }
//     return vowelsCount;
// }

// // console.log(getCount("alligator"));
// // console.log(getCount("jaguar"));
// // console.log(getCount("lynx"));

// function getCount2(str) {
//     let vowelsCount = 0;
//     let arr = str.split("")
//     console.log(arr)
//     for(let i = 0; i < arr.length; i++) {
//         switch(arr[i]) {
//             case "a":
//             case "A":
//             case "e":
//             case "E":
//             case "i":
//             case "I":
//             case "o":
//             case "O":
//             case "u":
//             case "U":
//                 vowelsCount++;
//                 break;
//         }
//     }
//     return vowelsCount;
// }

// // console.log(getCount2("japan"))
// // console.log(getCount2("new zealand"))
// // console.log(getCount2("Iraq"))

// // Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake. Can you help her?

// // function greet(name) {
// //     return "Hello, " + name + "!";
// //     if(name === "Johnny")
// //         return "Hello, my love!";
// // }

// function greet(name) {
//     if (name === "Johnny") {
//         return "Hello, my love!";
//     } else {
//         return "Hello, " + name + "!";
//     }
// }

// // console.log(greet("Steven"))
// // console.log(greet("Johnny"))

// function greet2(name) {
//     return name === "Johnny" ? "Hello, my love!" : `Hello, ${name}!`;
// }

// // console.log(greet2("Steven"))
// // console.log(greet2("Johnny"))

// // Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

// function isDivisible(n, x, y) {
//     if (n % x === 0 && n % y === 0) {
//         return true
//     } else {
//         return false
//     }
// }

// // console.log(isDivisible(3, 1, 3))
// // console.log(isDivisible(12, 2, 6))
// // console.log(isDivisible(100, 5, 3))
// // console.log(isDivisible(12, 7, 5))

// function isDivisible2(n, x, y) {
//     return (n % x === 0 && n % y === 0) ? true : false;
// }

// // console.log(isDivisible2(3, 1, 3))
// // console.log(isDivisible2(12, 2, 6))
// // console.log(isDivisible2(100, 5, 3))
// // console.log(isDivisible2(12, 7, 5))

// // In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// function makeNegative(num) {
//     if (num < 0) {
//         return num
//     } else if (num === 0 || num === "0") {
//         return 0
//     } else {
//         return num * -1
//     }
// }

// // console.log(makeNegative(21))
// // console.log(makeNegative(-21))
// // console.log(makeNegative(0))
// // console.log(makeNegative("0"))

// function makeNegative2(num) {
//     return (num < 0 || num === 0 || num === "0") ? num : -num;
// }

// // console.log(makeNegative2(32))
// // console.log(makeNegative2(-32))
// // console.log(makeNegative2(0))
// // console.log(makeNegative2("0"))

// function makeNegative3(num) {
//     return -Math.abs(num)
// }

// // console.log(makeNegative3(43))
// // console.log(makeNegative3(-43))

// // Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// function summation(num) {
//     let sum = 0;
//     for(let i = 1; i <= num; i++) {
//         // sum = sum + i;
//         sum+= i;
//         console.log(sum)
//     }
//     return sum
// }

// // console.log(summation(8))

// // It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy! You just need to write a script.

// // Return the average of the given array rounded DOWN to its nearest integer.

// // The array will never be empty.

// function getAverage(scoreArray) {
//     let count = scoreArray.length;
//     let sum = 0;
//     for (let i = 0; i < count; i++) {
//         sum = sum + scoreArray[i]
//     }

//     const avg = sum / count;
//     const roundedDown = Math.floor(avg)

//     return roundedDown;

// }

// // console.log(getAverage([5, 6, 7, 8, 25, 36, 55]))

// // Rock, Paper, Scissors. Let's play! You have to return which player won! In case of a draw return "Draw!".

// function rockPaperScissors(player1, player2) {
//     if (player1 === "rock") {
//         if (player2 === "rock") {
//             return "Draw!"
//         } else if (player2 === "paper") {
//             return "Player 2 wins!"
//         } else if (player2 === "scissors") {
//             return "Player 1 wins!"
//         }
//     }

//     if (player1 === "paper") {
//         if (player2 === "paper") {
//             return "Draw!"
//         } else if (player2 === "scissors") {
//             return "Player 2 wins!"
//         } else if (player2 === "rock") {
//             return "Player 1 wins!"
//         }

//     }

//     if (player1 === "scissors") {
//         if (player2 === "scissors") {
//             return "Draw!"
//         } else if (player2 === "paper") {
//             return "Player 1 wins!"
//         } else if (player2 === "rock") {
//             return "Player 2 wins!"
//         }
//     }
// }

// // console.log(rockPaperScissors("scissors", "paper"))
// // console.log(rockPaperScissors("scissors", "rock"))
// // console.log(rockPaperScissors("paper", "paper"))
// // console.log(rockPaperScissors("rock", "paper"))
// // console.log(rockPaperScissors("scissors", "scissors"))

// function rps(player1, player2) {
//     if (player1 == player2) {
//         return "Draw!"
//     }

//     if (player1 == "rock" && player2 == "scissors") {
//         return "Player 1 wins!"
//     } else if (player1 == "paper" && player2 == "rock") {
//         return "Player 1 wins!"
//     } else if (player1 == "scissors" && player2 == "paper") {
//         return "Player 1 wins!"
//     } else {
//         return "Player 2 wins!"
//     }
// }

// // console.log(rps("scissors", "paper"))
// // console.log(rps("scissors", "rock"))
// // console.log(rps("paper", "paper"))
// // console.log(rps("rock", "paper"))
// // console.log(rps("scissors", "scissors"))
// // console.log(rps("paper", "rock"))
// // console.log(rps("paper", "scissors"))

// // It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// function removeChar(str) {
//     return str.substring(1, str.length - 1)
// }

// // console.log(removeChar("Steven"))

// function removeChar2(str) {
//     return str.slice(1, -1)
// }

// // console.log(removeChar2("Steven"))

// function removeChar3(str) {
//     str1 = str.split("");
//     console.log(str1)
//     str1.shift();
//     console.log(str1)
//     str1.pop()
//     console.log(str1)
//     return str1.join('')
// }

// // console.log(removeChar3("Steven"))

// // You get an array of numbers, return the sum of all of the positive ones.

// function positiveSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             sum = sum + arr[i]
//         }
//     }
//     return sum
// }

// // console.log(positiveSum([1, -4, 7, 12]))
// // console.log(positiveSum([1, -4, 7, 12]))

// // Your task is to create a function that does four basic mathemetical operations. The function should take three arguments - operation(string/char), value1(number), value2(number). The function should return result of numbers after applying the chosen operation.

// function basicOp(operation, value1, value2) {
//     if (operation === "+") {
//         return value1 + value2
//     } else if (operation === "-") {
//         return value1 - value2
//     } else if (operation === "*") {
//         return value1 * value2
//     } else if (operation === "/") {
//         return value1 / value2
//     } else {
//         return "wrong arguments given"
//     }
// }

// // console.log(basicOp("+", 4, 7))
// // console.log(basicOp("-", 15, 18))
// // console.log(basicOp("*", 5, 5))
// // console.log(basicOp("/", "49", "7"))
// // console.log(basicOp("hello", 49, 7))

// function basicOp2(op, v1, v2) {
//     switch(op) {
//         case "+":
//             return v1 + v2
//         case "-":
//             return v1 - v2
//         case "*":
//             return v1 * v2
//         case "/":
//             return v1 / v2
//         default:
//             return 0;
//     }
// }

// // console.log(basicOp2("+", 4, 7))
// // console.log(basicOp2("-", 15, 18))
// // console.log(basicOp2("*", 5, 5))
// // console.log(basicOp2("/", "49", "7"))

// function basicOp3(op, v1, v2) {
//     return eval(v1+op+v2)
// }

// // console.log(basicOp3("+", 4, 7))
// // console.log(basicOp3("-", 15, 18))
// // console.log(basicOp3("*", 5, 5))
// // console.log(basicOp3("/", 49, 7))

// // Write a function called repeatStr which repeats the given string str exactly count times.

// function repeatStr(count, str) {
//     let starterString = ''

//     for (let i = 0; i < count; i++) {
//         starterString = starterString + str
//     }
//     return starterString
// }

// // console.log(repeatStr(5, "hello"))

// function repeatStr2(n, s) {
//     return s.repeat(n);
// }

// // console.log(repeatStr2(20, "steven"))

// // Write a function to split a string and convert it into an array of words.

// function stringToArray(string) {
//     return string.split(" ")
// }

// // console.log(stringToArray("Steven Mikhu"))
// // console.log(stringToArray("I love arrays they are my favorite"))

// // Remove the spaces from the string, then return the resultant string.

// function noSpace(str) {
//     let splitting = str.split(" ")
//     let result = splitting.join("")
//     return result;
// }

// // console.log(noSpace("Steven Mikhu"))
// // console.log(noSpace("I love arrays they are my favorite"))

// // Given an array of integers, return a new array with each value doubled.

// function maps(str) {
//     let doubled = str.map(number => number * 2)
//     return doubled
// }

// // console.log(maps([1, 2, 3]))
// // console.log(maps([3, 6, 9]))

// function maps2(str) {
//     let result = str.map((arrItem) => {
//         return arrItem * 2
//     })
//     return result
// }

// // console.log(maps2([1, 2, 3]))
// // console.log(maps2([3, 6, 9]))
// // console.log(maps2([4, 8, 12]))

// // A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! Each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// // Return True if yes, False otherwise.

// function hero(bullets, dragons) {
//     if (bullets / dragons >= 2) {
//         return true
//     } else {
//         return false
//     }
// }

// // console.log(hero(12, 6))
// // console.log(hero(11, 6))

// function hero2(bullets, dragons) {
//     return bullets / dragons >= 2;
// }

// // console.log(hero2(12, 6))
// // console.log(hero2(11, 6))
// // console.log(hero2(3, 2))

// function hero3(bullets, dragons) {
//     return bullets / dragons >= 2 ? true : false
// }

// // console.log(hero3(12, 6))
// // console.log(hero3(11, 6))
// // console.log(hero3(10, 4))

// // I'm new to coding and now I want to get teh sum of two arrays... actually the sum of all their elements. I'll appreciate your help.

// // Each array includes only integer numbers. Output is a number too.

// function arrayPlusArray(arr1, arr2) {
//     let sum = 0;

//     for (let i = 0; i < arr1.length; i++) {
//         let sumOfTwo = arr1[i] + arr2[i]
//         // let arr1Value = arr1[i];
//         // let arr2Value = arr2[i];

//         // let addedValue = arr1Value + arr2Value

//         sum = sum + sumOfTwo
//     }
//     return sum
// }

// // console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))
// // console.log(arrayPlusArray([3, 6, 9], [12, 15, 18]))

// // The first century spans from the year 1 up to and including the year 100. The second - from the year 101 up to and including the year 200.

// // Given a year, return the century it is in.

// function century(year) {
//     return Math.ceil(year/100)
// }

// // console.log(century(1900))
// // console.log(century(1901))
// // console.log(century(89))

// function century2(year) {
//     if (year < 100) {
//         return 1
//     }

// const firstTwoDigits = year.toString().substr(0, 2);

// if (year % 100 === 0) {
//     return Number(firstTwoDigits);
// } else {
//     return Number(firstTwoDigits) + 1;
// }
// }

// // console.log(century2(1900))
// // console.log(century2(1901))
// // console.log(century2(89))

// // I have a cat and a dog.
// // I got them at the same time as kitten/puppy. That was humanYears ago.
// // Return their respective ages now as [humanYears, catYears, dogYears]
// // humanYears >= 1 / humanYears are whole numbers only
// // Cat Years - 15 cat years for first year/ +9 cat years for second year/ +4 cat years for each year after that
// // Dog Years - 15 dog years for the first year/ +9 dog years for second year/ +5 dog years for each year after that

// var humanYearsCatYearsDogYears = function(humanYears) {
//     let catsAge;
//     let dogsAge;

//     if (humanYears === 1) {
//         return [humanYears, 15, 15];
//     }

//     if (humanYears === 2) {
//         return [humanYears, 24, 24]
//     }

//     const excessYears = humanYears - 2;
//     const extraCatYears = excessYears * 4;
//     const extraDogYears = excessYears * 5;

//     return [humanYears, 24 + extraCatYears, 24 + extraDogYears]

// }

// // console.log(humanYearsCatYearsDogYears(3))

// var humanYearsCatYearsDogYears2 = function(humanYears) {
//     if (humanYears == 1) return [1, 15, 15]
//     if (humanYears == 2) return [2, 24, 24]
//     return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24]
// }

// // console.log(humanYearsCatYearsDogYears2(3))
// // console.log(humanYearsCatYearsDogYears2(5))

// // Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.
// // For exmaple: ["3:1", "2:2", "0:1", ...]

// // Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:
// // if x > y - 3 points
// // if x < y - 0 point
// // if x = y - 1 point

// // Notes:
// // there are 10 matches in the championship
// // 0<=x<=4
// // 0<=y<=4

// function points(gamesArray) {
//     let totalPoints = 0;

//     for (let i = 0; i < gamesArray.length; i++) {

//         const value = gamesArray[i];

//         const parts = value.split(":");

//         const x = parts[0];
//         const y = parts[1];

//         if (x > y) {
//             totalPoints += 3
//         } else if (x === y) {
//             totalPoints += 1
//         }
//     }
//     return totalPoints
// }

// // console.log(points(["3:1", "1:1", "0:3", "3:0", "3:1"]))

// // Write a JS program to check two numbers and return true if one of the numbers is 100 or if the sum of the two numbers is 100.

// function sumOfTwo(num1, num2) {
//     if(num1 === 100 || num2 === 100 || num1 + num2 === 100) {
//         return true
//     } else {
//         return false
//     }
// }

// // console.log(sumOfTwo(38, 62))
// // console.log(sumOfTwo(38, 100))
// // console.log(sumOfTwo(100, 50))
// // console.log(sumOfTwo(0, 0))

// // Write a JS program to get the extension of a filename.

// function fileName(file) {
//     let splitting = file.split('.')
//     console.log(splitting)
//     return splitting[1]
// }

// // console.log(fileName('kante.png'))
// // console.log(fileName('pulisic.jpeg'))
// // console.log(fileName('kovacic.html'))

// const fileName2 = (str) => str.slice (str.lastIndexOf('.'))

// // console.log(fileName2('kante.png'))
// // console.log(fileName2('pulisic.jpeg'))
// // console.log(fileName2('kovacic.html'))

// function fileName3(str) {
//     return str.slice(str.lastIndexOf('.'))
// }

// // console.log(fileName3('kovacic.gif.jpeg'))

// // Write a JS program to replace every character in a given string with the character following it in the alphabet.

// function moveCharsForward(str) {
//     let splitting = str.split('')
//     console.log(splitting)
//     let char = splitting.map(char => String.fromCharCode(char.charCodeAt(0) + 1))
//     console.log(char)
//     return char.join('')
// }

// // console.log(moveCharsForward('hello'))

// // Write a JS program to get the current date. Expected Output : mm-dd-yyyy

// let date = new Date();
// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();

// let fullDate = `${month}-${day}-${year}`

// // console.log(fullDate)

// const formatDate = (date = new Date()) => {
//     const days = date.getDate();
//     const months = date.getMonth() + 1;
//     const years = date.getFullYear();
//     return `${days}/${months}/${years}`
// }

// // console.log(formatDate())

// // Write a JS program to create a new string adding "New!" in front of a given string. If the given string begins with "New!" already then return the original string.

// function addNew(str) {
//     let word = "New!"
//     if(str.includes("New!")) {
//         return str
//     } else {
//         return word + " " + str
//     }
// }

// // console.log(addNew("hello"))
// // console.log(addNew("goodbye"))
// // console.log(addNew("New! hello"))
// // console.log(addNew("New! New! hello New!"))
// // console.log(addNew("New! New! New! hello"))

// // Write a JS program to create a new string from a given string taking the first 3 characters and the last 3 characters of a string and adding them together. The string length must be 3 or more, if not, the original string is returned.

// function newString(str) {
//     if(str.length <= 3) {
//         return str
//     } else {
//         return str.slice(0, 3) + str.slice(-3)
//     }
// }

// // console.log(newString("dog"))
// // console.log(newString("alligator"))
// // console.log(newString("crocodile"))
// // console.log(newString("zomhahahabie"))

// // Write a JS program to extract the first half of a string of even length.

// function firstHalf(str) {
//     return str.slice(0, str.length / 2)
// }

// // console.log(firstHalf("zombie"))
// // console.log(firstHalf("catapult"))

// // Write a JS program to concatenate two strings except their first character.

// function addTwoStrings(str1, str2) {
//     let slice1 = str1.slice(1)
//     let slice2 = str2.slice(1)
//     return slice1 + slice2
// }

// // console.log(addTwoStrings("alligator", "crocodile"))

// // Given two values, write a JS program to find out which one is nearest to 100.

// function nearestNum(num1, num2) {
//     let a = 100 - num1
//     let b = 100 - num2

//     if(a < b) {
//         return num1
//     } else {
//         return num2
//     }
// }

// // console.log(nearestNum(7, 21))
// // console.log(nearestNum(35, 21))

// function nearestNum2(num1, num2) {
//     return (100 - num1) < (100 - num2) ? num1 : num2;;
// }

// // console.log(nearestNum2(50, 49))
// // console.log(nearestNum2(38, 49))

// // Write a JS program to check if a given string contains 2 to 4 occurences of a specified character.

// function countChars(str, char) {
//     return str.split('').filter(ch => ch === char).length;
// }

// // console.log(countChars('ooh!', 'o'))
// // console.log(countChars('oh!', 'o'))
// // console.log(countChars('oooh!', 'o'))
// // console.log(countChars('ooooh!', 'o'))
// // console.log(countChars('oooooh!', 'o'))

// function contains2To4(str, char) {
//     return countChars(str, char) >= 2 && countChars(str, char) <= 4;
// }

// // console.log(contains2To4('ooh!', 'o'))
// // console.log(contains2To4('oh!', 'o'))
// // console.log(contains2To4('oooh!', 'o'))
// // console.log(contains2To4('ooooh!', 'o'))
// // console.log(contains2To4('oooooh!', 'o'))

// // Write a JS program to find the number of even digits in an array of integers.

// function evenNumbersInArr(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 === 0) {
//             sum++
//         }
//     }
//     return sum
// }

// // console.log(evenNumbersInArr(['1', '2', '3', '4', '5', '6', '7', '8']))
// // console.log(evenNumbersInArr(['1', '2', '3', '4']))
// // console.log(evenNumbersInArr(['1', '2', '3', '4', '5', '6']))
// // console.log(evenNumbersInArr(['1', '2', '3', '4', '5', '6', '7']))
// // console.log(evenNumbersInArr(['2', '4', '6', '8', '10', '12', '14']))
// // console.log(evenNumbersInArr(['1', '3', '5', '7', '9', '11', '13']))

// function evenNumbersInArr2(arr) {
//     return arr.filter(num => num % 2 === 0).length;
// }

// // console.log(evenNumbersInArr2(['1', '2', '3', '4', '5', '6', '7', '8']))
// // console.log(evenNumbersInArr2(['1', '2', '3', '4']))
// // console.log(evenNumbersInArr2(['1', '2', '3', '4', '5', '6']))
// // console.log(evenNumbersInArr2(['1', '2', '3', '4', '5', '6', '7']))
// // console.log(evenNumbersInArr2(['2', '4', '6', '8', '10', '12', '14']))
// // console.log(evenNumbersInArr2(['1', '3', '5', '7', '9', '11', '13']))

// // Write a JS program to find the number of even values up to a given number

// function findEvenNums(num) {
//     const returnArr = [];
//     for(let i = 1; i <= num; i += 1) {
//         returnArr.push(i);
//     }
//     return returnArr;
// }

// // console.log(findEvenNums(5))
// // console.log(findEvenNums(10))
// // console.log(evenNumbersInArr(findEvenNums(10)))
// // console.log(evenNumbersInArr(findEvenNums(16)))
// // console.log(evenNumbersInArr(findEvenNums(100)))

// // Write a JS program to check whether a given array of integers is sorted in ascending order.

// function ascendingOrd(arr) {
//     for(let i = 0; i < arr.length; i += 1) {
//         if(arr[i+1] < arr[i]) return false;
//     }
//     return true;
// }

// // console.log(ascendingOrd([1, 2, 3, 4, 5, 6]))
// // console.log(ascendingOrd([1, 2, 5, 4, 3, 6]))
// // console.log(ascendingOrd([1, 2, 3, 4, 6, 6]))

// // Write a JS program to get the largest even number from an array of integers.

// function largestEven2(arr) {
//     return Math.max(...arr.filter(num => num % 2 === 0));
// }

// // console.log(largestEven2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13]))
// // console.log(largestEven2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 4, 34, 16, 2, 1, 24]))
// // console.log(largestEven2([1, 2, 3, 4, 5, 6, 1001, 1002, 1003, 10, 11, 13, 15, 16]))

// // Write a JS program to replace the first digit in a string (should contains at least 1 digit) with $ character.

// function replaceFirstDig(str) {
//     return str.replace(/h/gi, '$')
// }

// // console.log(replaceFirstDig('Hello'))

// // Given a year, report if it is a leap year.

// function leapYear(num) {
//     return num % 4 === 0;
// }

// // console.log(leapYear(2014))
// // console.log(leapYear(2015))
// // console.log(leapYear(2016))
// // console.log(leapYear(2017))
// // console.log(leapYear(2018))
// // console.log(leapYear(2019))
// // console.log(leapYear(2020))

// // Write a JS program to compare two objects to determine if the first one contains the same properties as the second one (which may also have additional properties)

// const objA = { a: 1, b: 1, c: 1 }
// const objB = { a: 1, b: 1, c: 1 }
// const objC = { a: 1, b: 1, d: 1 }

// function compareTwoObj(a, b) {
//     return Object.keys(a).every(key => b[key])
// }

// // console.log(compareTwoObj(objA, objB))
// // console.log(compareTwoObj(objA, objC))
// // console.log(compareTwoObj(objC, objB))
// // console.log(compareTwoObj(objB, objA))

// // Write a JS program to convert a comma-separated values (CSV) string to a 2D array. A new line indicates a new row in the array.
// // Exmaple: abc, def, ghi        jkl, mno, pqr       stu, vwx, yza

// function parseCSV(csvStr) {
//     return csvStr.split('\n').map(row => row.split(','))
// }

// const str = `abc,def,ghi
// jkl,mno,pqr
// stu,vwx,yza`

// // console.log(parseCSV(str))

// // Write a JS program to generate a random hexadecimal color code.

// function getRandomHexNumber() {
//     return Math.floor(Math.random() * 16).toString(16)
// }

// // console.log(getRandomHexNumber())
// // console.log(getRandomHexNumber())
// // console.log(getRandomHexNumber())

// function getRandomHexColor() {
//     return '#' + Array.from({length: 6}).map(getRandomHexNumber).join('')
// }

// // console.log(getRandomHexColor())

// // Write a JS function that returns true if the provided predicate function returns true for all elements in a collection, false otherwise.

// // console.log([1,2,3,4,5].every(x => x > 0))
// // console.log([1,2,3,4,5].every(x => x > 3))

// function isEveryElem(arr, fn) {
//     for (let i = 0; i < arr.length; i += 1) {
//         if (!fn(arr[i])) {
//             return false;
//         }
//     }
//     return true;
// }

// // console.log(isEveryElem([1, 2, 3, 4, 5], (x) => x > 0))
// // console.log(isEveryElem([1, 2, 3, 4, 5], (x) => x > 3))

// // Write a JS function that returns a passed string with letters in alphabetical order.
// // Exmaple string: 'webmaster' Expected Output: 'abeemrstw'

// function abcString(str) {
//     return str.split('').sort().join('');
// }

// // console.log(abcString('webmaster'))
// // console.log(abcString('javascript'))
// // console.log(abcString('zombie'))

// // Write a JS function that accepts a string as a parameter and counts the number of vowels within the string.

// function countLetters(str, letters = ['a', 'e', 'i', 'o', 'u']) {
//     return str.split('').filter(s => letters.indexOf(s) > -1).length
// }

// // console.log(countLetters('webmaster'))
// // console.log(countLetters('javascript'))
// // console.log(countLetters('zombie'))
// // console.log(countLetters('hello'))

// // Write a JS function to convert an amount to coins. Exmaple input: 46 and possible coins 25, 10, 5, 2, 1  Output: 25, 10, 10, 1

// function countCoins(money, coins = [25, 10, 5, 2, 1]) {
//     const totalCoins = [];
//     for (let i = 0; i < coins.length; i += 1) {
//         const thisCoinNum = Math.floor(money / coins[i]);
//         for (let y = 0; y < thisCoinNum; y += 1) {
//             totalCoins.push(coins[i])
//         }
//         money -= coins[i] * thisCoinNum;
//     }
//     return totalCoins
// }

// // console.log(countCoins(46))
// // console.log(countCoins(83))

// function countCoins2(amount, coins=[25, 10, 5, 2, 1]) {
//     let totalCoins = [];
//     let j = 0;

//     while(amount > 0) {
//         if(amount >= coins[j]) {
//             amount -= coins[j];
//             totalCoins.push(coins[j])
//         }

//         if(amount < coins[j]) {
//             j++
//         }
//     }
//     return totalCoins
// }

// // console.log(countCoins2(46))
// // console.log(countCoins2(83))

// function countCoins3(money){
//     let coins = [25, 10, 5, 2, 1];
//     let result = [];

//     for (let i=0; i<coins.length; i++) {
//         while(money>=coins[i]){
//             result.push(coins[i]);
//             money = money-coins[i];
//         }
//     }
//     return result
// }

// // console.log(countCoins3(45))
// // console.log(countCoins3(83))

// // Write a JS function to extract unique characters from a string.

// const getUniqueChars = (str) =>
//     str.split('').filter(
//         (item, index, arr) =>
//             arr.slice(index + 1).indexOf(item) === -1
// )

// // console.log(getUniqueChars('aaabbbccc'))

// const getUniqueChars2 = (str) =>
//         [... new Set(str.split(''))];

// // console.log(getUniqueChars2('aaabbbccc'))
// // console.log(getUniqueChars2('aaabbbccceeeddddcccaaabb'))

// // Write a JS function to find the first not repeated character. Example string: 'abacddbec'  Expected output: 'e'

// const getNonRepeatedChars = (str) =>
//         str.split('')
//             .filter((item, index, arr) =>
//                 arr.filter(arrItem => arrItem === item).length === 1
//         );

// // console.log(getNonRepeatedChars('abacddbec'))

// //  Write a JS function that returns the values of an array that are not odd. All values in the array will be integers. Return the good values in the order they are given.

// function noOdds(values) {
//     return values.filter(val => val % 2 === 0);
// }

// // console.log(noOdds([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// // console.log(noOdds([1, 3, 5, 7, 9, 10]))

// function noOdds2(values) {
//     const arr = [];
//     for(let i = 0; i < values.length; i++) {
//         if( values[i] % 2 === 0) {
//             arr.push(values[i])
//         }
//     }
//     return arr
// }

// // console.log(noOdds2([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// // console.log(noOdds2([0, 1, 2, 3, 5, 6, 7, 8, 9, 10]))
// // console.log(noOdds2([0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 231, 531, 221, 444]))

// const orders = [
//     { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
//         { productId: '123', price: 55 },
//         { productId: '234', price: 30 },
//     ]},
//     { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
//         { productId: '234', price: 30 },
//     ]},
//     { orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
//         { productId: '567', price: 30 },
//         { productId: '678', price: 80 },
//     ]},
//     { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
//         { productId: '789', price: 12 },
//         { productId: '890', price: 90 },
//     ]},
//         { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
//         { productId: '901', price: 43 },
//         { productId: '123', price: 55 },
//     ]},
// ];

// // Exercises

// // 1) Get a list of the orders for the customer with the ID 234 that have not been delivered.
// console.log(orders.filter(order => order.customerId === '234' && !order.delivered))

// // 2) Create a new property on each order with the total price of items ordered.
// console.log(orders.map(order => ({...order, orderTotal: order.items.reduce((acc, item) => acc + item.price, 0)})))

// // 3) Have all the orders been delivered?
// console.log(orders.every(order => order.delivered))

// // 4) Has the customer with ID '123' made any orders?
// console.log(orders.some(order => order.customerId === '123'))

// // 5) Have any products with an id of 123 been sold?
// console.log(orders.reduce((acc, order) => acc + order.items.reduce((acc, item) => acc + (item.productId === '123'), 0), 0))

// const squareDigits = (num) => {
//     let str = num.toString()
//     let splitting = str.split('')
//     return splitting.map(num => num * num).join('')
// }

function squareDigits(num) {
  return parseInt(
    num
      .toString()
      .split("")
      .map((i) => i * i)
      .join("")
  );
  // return parseInt(('' + num).split('').map(function (val) { return val * val;}).join(''));
}

// console.log(squareDigits(3212));

const DNAStrand = (dna) => {
  let result = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      result = result + "T";
    } else if (dna[i] === "T") {
      result = result + "A";
    } else if (dna[i] === "G") {
      result += "C";
    } else if (dna[i] === "C") {
      result += "G";
    }
  }
  return result;
};

// console.log(DNAStrand("AAAA"));
// console.log(DNAStrand("GCTA"));
// console.log(DNAStrand("TTTT"));
// console.log(DNAStrand("ACTG"));

const pairs = { A: "T", T: "A", C: "G", G: "C" };

const DNAStrand2 = (dna) => {
  let split = dna.split("");
  return split
    .map((ele) => {
      return pairs[ele];
    })
    .join("");
};

// console.log(DNAStrand2("AAAA"));
// console.log(DNAStrand2("GCTA"));
// console.log(DNAStrand2("TTTT"));
// console.log(DNAStrand2("ACTG"));

const loveFunc = (flower1, flower2) => {
  if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
    return true;
  } else if (flower1 % 2 !== 0 && flower2 % 2 === 0) {
    return true;
  } else return false;
};

// console.log(loveFunc(1, 4));
// console.log(loveFunc(2, 4));
// console.log(loveFunc(0, 1));
// console.log(loveFunc(0, 0));

const loveFunc2 = (flower1, flower2) => {
  return flower1 % 2 !== flower2 % 2;
};

// console.log(loveFunc2(1, 4));
// console.log(loveFunc2(2, 4));
// console.log(loveFunc2(0, 1));
// console.log(loveFunc2(0, 0));
// console.log(loveFunc2(3222, 5662));

const past = (h, m, s) => {
  return (h * 60 * 60 + m * 60 + s) * 1000;
};

// console.log(past(0, 1, 1))
// console.log(past(1, 1, 1))
// console.log(past(0, 0, 0))
// console.log(past(1, 0, 1))
// console.log(past(1, 0, 0))

const findShort = (s) => {
  let split = s.split(" ");
  split.sort((a, b) => b.length - a.length);
  return split.pop().length;
};

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
// console.log(findShort("turns out random test cases are easier than writing out basic ones"))
// console.log(findShort("Let's travel abroad shall we"))

const findShort2 = (s) => {
  return s.split(" ").reduce((a, b) => Math.min(a, b));
};

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
// console.log(findShort("turns out random test cases are easier than writing out basic ones"))
// console.log(findShort("Let's travel abroad shall we"))

const descendingOrder = (n) => {
  let str = n.toString();
  let split = str.split("");
  split.sort((a, b) => {
    return b - a;
  });
  return parseInt(split.join(""));
};

// console.log(descendingOrder(0))
// console.log(descendingOrder(1))
// console.log(descendingOrder(111))
// console.log(descendingOrder(15))
// console.log(descendingOrder(1021))
// console.log(descendingOrder(123456789))

const descendingOrder2 = (n) => {
  return parseInt(
    String(n)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
};

// console.log(descendingOrder2(0))
// console.log(descendingOrder2(1))
// console.log(descendingOrder2(111))
// console.log(descendingOrder2(15))
// console.log(descendingOrder2(1021))
// console.log(descendingOrder2(123456789))

const highAndLow = (numbers) => {
  let splitting = numbers.split(" ");
  let sorting = splitting.sort((a, b) => b - a);
  return `${sorting[0]} ${sorting.slice(-1)}`;
};

// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))
// console.log(highAndLow("1 2 3"))

const highAndLow2 = (numbers) => {
  let sorting = numbers.split(" ").sort((a, b) => b - a);
  return `${sorting[0]} ${sorting.slice(-1)}`;
};

// console.log(highAndLow2("8 3 -5 42 -1 0 0 -9 -23 4 7 4 -4"))
// console.log(highAndLow2("1 2 3"))

const highAndLow3 = (numbers) => {
  num = numbers.split(" ");
  return `${Math.max(...num)} ${Math.min(...num)}`;
};

// console.log(highAndLow3("8 3 -5 42 -1 0 0 -9 -23 4 7 4 -4"))
// console.log(highAndLow3("1 2 3"))

const paperwork = (n, m) => {
  if (n < 0 || m < 0) {
    return 0;
  }
  return n * m;
};

// console.log(paperwork(5, 5))
// console.log(paperwork(5, -5))
// console.log(paperwork(-5, -5))
// console.log(paperwork(-5, 5))
// console.log(paperwork(5, 0))

const numberToString = (num) => {
  return num.toString();
};

// console.log(numberToString(67))

const removeSmallest = (numbers) => {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  console.log(indexOfMin);
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
};

// console.log(removeSmallest([1, 2, 3, 4, 5]))
// console.log(removeSmallest([5, 3, 2, 1, 4]))
// console.log(removeSmallest([2, 2, 1, 2, 1]))

const countPositivesSumNegatives = (input) => {
  if (input == null) {
    return [];
  }

  let negativeSum = 0;
  let positiveLength = input.filter((num) => num > 0).length;
  let negative = input.filter((num) => {
    if (num < 0) {
      negativeSum = negativeSum + num;
    }
  });

  return [positiveLength, negativeSum];
};

// console.log(
//   countPositivesSumNegatives([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15
//   ])
// );

const countPositivesSumNegatives2 = (input) => {
  return input && input.length
    ? [
        input.filter((p) => p > 0).length,
        input.filter((n) => n < 0).reduce((a, b) => a + b, 0),
      ]
    : [];
};

// console.log(countPositivesSumNegatives2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
// console.log(countPositivesSumNegatives2([21, 7, 5505, -3, -21, -36, -81, 32, 23, 10, 9, 12, -57, -358, -21, -25]));

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let gas = distanceToPump / mpg;
  if (gas <= fuelLeft) {
    return true;
  } else {
    return false;
  }
};

// console.log(zeroFuel(50, 25, 2))
// console.log(zeroFuel(100, 50, 1))

const seriesSum = (n) => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1 / (3 * i + 1);
  }
  return sum.toFixed(2);
};

// console.log(seriesSum(1))
// console.log(seriesSum(2))
// console.log(seriesSum(3))
// console.log(seriesSum(4))

const rowSumOddNumbers = (n) => {
  return n * n * n;
};

// console.log(rowSumOddNumbers(1))
// console.log(rowSumOddNumbers(42))

const rowSumOddNumbers2 = (n) => {
  return Math.pow(n, 3);
};

// console.log(rowSumOddNumbers2(1))
// console.log(rowSumOddNumbers2(2))

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// console.log(twoSum([2, 4, 6, 8, 10], 16))

const twoSum2 = (nums, target) => {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    let complimentPairs = target - value;
    if (map[complimentPairs] !== undefined) {
      return [map[complimentPairs], i];
    } else {
      map[value] = i;
    }
  }
};

// console.log(twoSum2([2, 4, 6, 8, 10], 16))

const busStop = (passenger) => {
  let totalPeople = 0;
  for (let i = 0; i < passenger.length; i++) {
    totalPeople += passenger[i][0];
    totalPeople -= passenger[i][1];
  }
  return totalPeople;
};

// console.log(busStop([[10,0],[3,5],[5,8]]))
// console.log(busStop([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]))
// console.log(busStop([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]))
// console.log(busStop([[0,0]]))

const busStop2 = (passenger) => {
  return passenger.reduce((rem, [on, off]) => {
    return rem + on - off;
  }, 0);
};

// console.log(busStop2([[10,0],[3,5],[5,8]]))
// console.log(busStop2([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]))
// console.log(busStop2([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]))
// console.log(busStop2([[0,0]]))

const busStop3 = (passenger) => {
  return passenger.reduce((a, b) => a + b[0] - b[1], 0);
};

// console.log(busStop3([[10,0],[3,5],[5,8]]))
// console.log(busStop3([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]))
// console.log(busStop3([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]))
// console.log(busStop3([[0,0]]))

const findNeedle = (haystack) => {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      return `found the needle at position ${i}`;
    }
  }
};

// console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))
// console.log(findNeedle(['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago']))
// console.log(findNeedle([1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54]))

const findNeedle2 = (haystack) => {
  return `found the needle at position ${haystack.indexOf("needle")}`;
};

// console.log(findNeedle2(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))
// console.log(findNeedle2(['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago']))
// console.log(findNeedle2([1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54]))

const filterList = (l) => {
  return l.filter((a) => a === Number(a));
};

// console.log(filterList([1,2,'a','b']))
// console.log(filterList([1,'a','b',0,15]))
// console.log(filterList([1,2,'aasf','1','123',123]))

const filterList2 = (l) => {
  return l.filter((e) => Number.isInteger(e));
};

// console.log(filterList2([1,2,'a','b']))
// console.log(filterList2([1,'a','b',0,15]))
// console.log(filterList2([1,2,'aasf','1','123',123]))

const filterList3 = (l) => {
  return l.filter((v) => typeof v === "number");
};

// console.log(filterList3([1,2,'a','b']))
// console.log(filterList3([1,'a','b',0,15]))
// console.log(filterList3([1,2,'aasf','1','123',123]))

const isIsogram = (str) => {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
};

// console.log(isIsogram("Dermatoglyphics"))
// console.log(isIsogram("isogram"))
// console.log(isIsogram("aba"))
// console.log(isIsogram("moOse"))
// console.log(isIsogram("isIsogram"))
// console.log(isIsogram(""))

const isIsogram2 = (str) => {
  return str
    .toLowerCase()
    .split("")
    .every((letter, index, array) => {
      return array.indexOf(letter) === index;
    });
};

// console.log(isIsogram2("Dermatoglyphics"))
// console.log(isIsogram2("isogram"))
// console.log(isIsogram2("aba"))
// console.log(isIsogram2("moOse"))
// console.log(isIsogram2("isIsogram"))
// console.log(isIsogram2(""))

const isIsogram3 = (str) => {
  return new Set(str.toUpperCase()).size == str.length;
};

// console.log(isIsogram3("Dermatoglyphics"))
// console.log(isIsogram3("isogram"))
// console.log(isIsogram3("aba"))
// console.log(isIsogram3("moOse"))
// console.log(isIsogram3("isIsogram"))
// console.log(isIsogram3(""))

const openOrSenior = (data) => {
  let newArr = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      newArr.push("Senior");
    } else {
      newArr.push("Open");
    }
  }
  return newArr;
};

// console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));
// console.log(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]));
// console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]));

const openOrSenior2 = (data) => {
  return data.map(([age, handicap]) => {
    if (age >= 55 && handicap > 7) {
      return "Senior";
    } else {
      return "Open";
    }
  });
};

// console.log(openOrSenior2([[45, 12],[55,21],[19, -2],[104, 20]]));
// console.log(openOrSenior2([[3, 12],[55,1],[91, -2],[53, 23]]));
// console.log(openOrSenior2([[59, 12],[55,-1],[12, -2],[12, 12]]));

const openOrSenior3 = (data) => {
  return data.map(([age, handicap]) =>
    age >= 55 && handicap > 7 ? "Senior" : "Open"
  );
};

// console.log(openOrSenior3([[45, 12],[55,21],[19, -2],[104, 20]]));
// console.log(openOrSenior3([[3, 12],[55,1],[91, -2],[53, 23]]));
// console.log(openOrSenior3([[59, 12],[55,-1],[12, -2],[12, 12]]));

const getSum = (a, b) => {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
};

// console.log(getSum(0, -1))
// console.log(getSum(0, 1))
// console.log(getSum(0, 0))
// console.log(getSum(1, 1))
// console.log(getSum(1, 100))
// console.log(getSum(1, 200))
// console.log(getSum(-50, 200))

const areaOrPerimeter = (l, w) => {
  let area = l * w;
  let perimeter = (l + w) * 2;

  return l === w ? area : perimeter;
};

// console.log(areaOrPerimeter(4, 4))
// console.log(areaOrPerimeter(6, 10))

const boolToWord = (bool) => {
  return bool ? "Yes" : "No";
};

// console.log(boolToWord(true))
// console.log(boolToWord(false))

const boolToWord2 = (bool) => {
  return bool === true ? "Yes" : "No";
};

// console.log(boolToWord2(true))
// console.log(boolToWord2(false))

const areYouPlayingBanjo = (name) => {
  if ((name[0] === "R") | (name[0] === "r")) {
    return `${name} plays Banjo`;
  }
  return `${name} does not play Banjo`;
};

// console.log(areYouPlayingBanjo('Adam'))
// console.log(areYouPlayingBanjo('Paul'))
// console.log(areYouPlayingBanjo('Ringo'))
// console.log(areYouPlayingBanjo('bravo'))
// console.log(areYouPlayingBanjo('rolf'))

const areYouPlayingBanjo2 = (name) => {
  return name.charAt(0) === "R" || name.charAt(0) === "r"
    ? `${name} plays Banjo`
    : `${name} does not play the banjo`;
};

// console.log(areYouPlayingBanjo2('Adam'))
// console.log(areYouPlayingBanjo2('Paul'))
// console.log(areYouPlayingBanjo2('Ringo'))
// console.log(areYouPlayingBanjo2('bravo'))
// console.log(areYouPlayingBanjo2('rolf'))

const areYouPlayingBanjo3 = (name) => {
  return name.toLowerCase().charAt(0) === "r"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
};

// console.log(areYouPlayingBanjo3('Adam'))
// console.log(areYouPlayingBanjo3('Paul'))
// console.log(areYouPlayingBanjo3('Ringo'))
// console.log(areYouPlayingBanjo3('bravo'))
// console.log(areYouPlayingBanjo3('rolf'))

const cockroachSpeed = (s) => {
  const secsInHour = 3600;
  const centimetersInKilometers = 100000;

  return Math.floor((s * centimetersInKilometers) / secsInHour);
};

// console.log(cockroachSpeed(1.08))
// console.log(cockroachSpeed(1.09))
// console.log(cockroachSpeed(0))

const doubleChar = (str) => {
  let split = str.split("");
  return split.map((c) => c + c).join("");
};

// console.log(doubleChar('abcd'))
// console.log(doubleChar('Adidas'))
// console.log(doubleChar('1337'))
// console.log(doubleChar('illuminati'))
// console.log(doubleChar('123456'))
// console.log(doubleChar('%^&*('))

const doubleChar2 = (str) => {
  let newWord = "";
  for (let i = 0; i < str.length; i++) {
    newWord += str[i] + str[i];
  }
  return newWord;
};

// console.log(doubleChar2('abcd'))
// console.log(doubleChar2('Adidas'))
// console.log(doubleChar2('1337'))
// console.log(doubleChar2('illuminati'))
// console.log(doubleChar2('123456'))
// console.log(doubleChar2('%^&*('))

const solution = (str, ending) => {
  return str.endsWith(ending);
};

// console.log(solution('abc', 'bc'))
// console.log(solution('abc', 'd'))
// console.log(solution('static', 'c'))
// console.log(solution('abc', 'd'))

const solution2 = (str, ending) => {
  return str.substr(-ending.length) == ending;
};

// console.log(solution2("abc", "bc"));
// console.log(solution2("abc", "d"));
// console.log(solution2("static", "c"));
// console.log(solution2("steven", "v"));

const solution3 = (str, ending) => {
  return ending === str.substr(str.length - ending.length, str.length);
};

// console.log(solution3("abc", "bc"));
// console.log(solution3("abc", "d"));
// console.log(solution3("static", "c"));
// console.log(solution3("steven", "v"));

const digitize = (n) => {
  // let split = n.toString().split('').reverse()
  // return split.map(ele => parseInt(ele))
  return String(n)
    .split("")
    .reverse()
    .map((ele) => Number(ele));
};

// console.log(digitize(35231))
// console.log(digitize(0))
// console.log(digitize(5234689875))

const digitize2 = (n) => {
  return String(n).split("").map(Number).reverse();
};

// console.log(digitize2(35231))
// console.log(digitize2(0))
// console.log(digitize2(5234689875))

const opposite = (number) => {
  if (number > 0) {
    return number * -1;
  } else if (number < 0) {
    return number * -1;
  } else {
    return 0;
  }
};

// console.log(opposite(1))
// console.log(opposite(0))
// console.log(opposite(4.25))
// console.log(opposite(3.333333))
// console.log(opposite(-12525220.3325))
// console.log(opposite(-5))

const opposite2 = (number) => {
  return number * -1;
};

// console.log(opposite2(1))
// console.log(opposite2(0))
// console.log(opposite2(4.25))
// console.log(opposite2(3.333333))
// console.log(opposite2(-12525220.3325))
// console.log(opposite2(-5))

const fakeBin = (x) => {
  return x
    .split("")
    .map((ele) => (ele < 5 ? 0 : 1))
    .join("");
};

// console.log(fakeBin("45385593107843568"));
// console.log(fakeBin("509321967506747"));
// console.log(fakeBin("366058562030849490134388085"));

const fakeBin2 = (x) => {
  let newStr = "";
  for (let i = 0; i < x.length; i++) {
    newStr += x[i] < 5 ? 0 : 1;
  }
  return newStr;
};

// console.log(fakeBin2("45385593107843568"));
// console.log(fakeBin2("509321967506747"));
// console.log(fakeBin2("366058562030849490134388085"));

const simpleMultiplication = (number) => {
  return number % 2 === 0 ? number * 8 : number * 9;
};

// console.log(simpleMultiplication(2))
// console.log(simpleMultiplication(1))
// console.log(simpleMultiplication(8))
// console.log(simpleMultiplication(4))
// console.log(simpleMultiplication(5))

const simpleMultiplication2 = (number) => {
  return number * (number % 2 ? 9 : 8);
};

// console.log(simpleMultiplication2(2))
// console.log(simpleMultiplication2(1))
// console.log(simpleMultiplication2(8))
// console.log(simpleMultiplication2(4))
// console.log(simpleMultiplication2(5))

const enough = (cap, on, wait) => {
  return on + wait > cap ? on + wait - cap : 0;
};

// console.log(enough(10, 5, 5))
// console.log(enough(100, 60, 50))
// console.log(enough(20, 5, 5))

const squareSum = (numbers) => {
  // return numbers.map(ele => ele * ele ).reduce((a, b) => a + b, 0)
  return numbers.reduce((acc, curr) => acc + curr * curr, 0);
};

// console.log(squareSum([1, 2]))
// console.log(squareSum([0, 3, 4, 5]))
// console.log(squareSum([]))

const squareSum2 = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i] * numbers[i];
  }
  return sum;
};

// console.log(squareSum2([1, 2]))
// console.log(squareSum2([0, 3, 4, 5]))
// console.log(squareSum2([]))

const jadenCase = (str) => {
  console.log(str);
  return str
    .split(" ")
    .map((ele) => ele.charAt(0).toUpperCase() + ele.slice(1))
    .join(" ");
};

// console.log(jadenCase("How can mirrors be real if our eyes aren't real"))

const isSquare = (n) => {
  return Number.isInteger(Math.sqrt(n));
};

// console.log(isSquare(-1))
// console.log(isSquare(0))
// console.log(isSquare(3))
// console.log(isSquare(4))
// console.log(isSquare(25))
// console.log(isSquare(26))

const validatePin = (pin) => {
  var pinLength = pin.length;
  var isCorrectLength = pinLength == 4 || pinLength == 6;
  var hasOnlyNumbers = pin.match(/^\d+$/);

  if (isCorrectLength && hasOnlyNumbers) {
    return true;
  }
  return false;
};

// console.log(validatePin("1"))
// console.log(validatePin("12"))
// console.log(validatePin("123"))
// console.log(validatePin("1345"))
// console.log(validatePin("123456"))
// console.log(validatePin("1234567"))
// console.log(validatePin("-1234"))
// console.log(validatePin("1.234"))
// console.log(validatePin("-1.234"))
// console.log(validatePin("00000000"))

const validatePin2 = (pin) => {
  return /^(\d{4}|\d{6})$/.test(pin);
};

// console.log(validatePin2("1"))
// console.log(validatePin2("12"))
// console.log(validatePin2("123"))
// console.log(validatePin2("1345"))
// console.log(validatePin2("123456"))
// console.log(validatePin2("1234567"))
// console.log(validatePin2("-1234"))
// console.log(validatePin2("1.234"))
// console.log(validatePin2("-1.234"))
// console.log(validatePin2("00000000"))

const camelCase = (string) => {
  let splitAndMapping = string.split("").map((el) => {
    if (el === el.toUpperCase()) {
      el = " " + el;
    }
    return el;
  });
  return splitAndMapping.join("");
};

// console.log(camelCase('camelCasing'))
// console.log(camelCase('camelCasingTest'))

const camelCase2 = (string) => {
  return [...string]
    .map((char) => {
      return char === char.toUpperCase() ? ` ${char}` : char;
    })
    .join("");
};

// console.log(camelCase2('camelCasing'))
// console.log(camelCase2('camelCasingTest'))
// console.log(camelCase2('blooBlooBlooblooBlooBBlOO'))

const DNAtoRNA = (dna) => {
  return dna.split("T").join("U");
};

// console.log(DNAtoRNA('TTTT'))
// console.log(DNAtoRNA('GCAT'))
// console.log(DNAtoRNA('GACCGCCGCC'))

const DNAtoRNA2 = (dna) => {
  let hold = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "T") {
      hold = hold + "U";
    } else {
      {
        hold += dna[i];
      }
    }
  }
  return hold;
};

// console.log(DNAtoRNA2('TTTT'))
// console.log(DNAtoRNA2('GCAT'))
// console.log(DNAtoRNA2('GACCGCCGCC'))

const DNAtoRNA3 = (dna) => {
  return dna.replace(/T/g, "U");
};

// console.log(DNAtoRNA3('TTTT'))
// console.log(DNAtoRNA3('GCAT'))
// console.log(DNAtoRNA3('GACCGCCGCC'))

const betterThanAverage = (classPoints, yourPoints) => {
  let total = classPoints.reduce((a, b) => a + b, 0);
  let average = total / classPoints.length;
  return yourPoints > average;
};

// console.log(betterThanAverage([2, 3], 5))
// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))
// console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9))
// console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50))
// console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21))

const betterThanAverage2 = (classPoints, yourPoints) => {
  return (
    yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length
  );
};

// console.log(betterThanAverage2([2, 3], 5))
// console.log(betterThanAverage2([100, 40, 34, 57, 29, 72, 57, 88], 75))
// console.log(betterThanAverage2([12, 23, 34, 45, 56, 67, 78, 89, 90], 9))
// console.log(betterThanAverage2([41, 75, 72, 56, 80, 82, 81, 33], 50))
// console.log(betterThanAverage2([29, 55, 74, 60, 11, 90, 67, 28], 21))

const addBinary = (a, b) => {
  return (a + b).toString(2);
};

// console.log(addBinary(1, 2))
// console.log(addBinary(5, 9))

const wave = (str) => {
  let result = [];

  str.split("").forEach((char, index) => {
    if (/[a-z]/.test(char)) {
      result.push(
        str.slice(0, index) + char.toUpperCase() + str.slice(index + 1)
      );
    }
  });
  return result;
};

// console.log(wave('hello'))

const wave2 = (str) => {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let copy = str.split("");
    // console.log(copy)
    if (copy[i] !== " ") {
      copy[i] = copy[i].toUpperCase();
      // console.log(copy)
      result.push(copy.join(""));
    }
  }
  return result;
};

// console.log(wave2('elephant'))

const letterCount = (str) => {
  let newObj = {};

  let splitting = str.split("");
  splitting.map((ele) => {
    if (newObj[ele]) {
      newObj[ele]++;
    } else {
      newObj[ele] = 1;
    }
    // newObj[ele] ? newObj[ele]++ : newObj[ele] = 1;
  });
  return newObj;
};

// console.log(letterCount('elephant'))

const letterCount2 = (str) => {
  return str.split("").reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
};

// console.log(letterCount2('abaaaa'))

const sumOfAll = (numbers) => {
  return numbers.reduce((acc, val) => acc + val, 0);
};

// console.log(sumOfAll([]))
// console.log(sumOfAll([1, 5.2, 4, 0, -1]))

const sumOfAll2 = (numbers) => {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total;
};

// console.log(sumOfAll2([]))
// console.log(sumOfAll2([1, 5.2, 4, 0, -1]))

const persistence = (num) => {
  for (var i = 0; num > 9; i++) {
    num = num
      .toString()
      .split("")
      .reduce((t, c) => t * c);
  }
  return i;
};

// console.log(persistence(39))
// console.log(persistence(999))
// console.log(persistence(4))

const checkForMatch = (a, x) => {
  return a.includes(x);
};

// console.log(checkForMatch([66, 101], 66))
// console.log(checkForMatch([101, 45, 75, 105, 99, 107], 107))
// console.log(checkForMatch(['t', 'e', 's', 't'], 'e'))
// console.log(checkForMatch(['what', 'a', 'great', 'kata'], 'kat'))

const checkForMatch2 = (a, x) => {
  let foundTarget = false;
  a.forEach((ele, i, array) => {
    if (x === ele) {
      foundTarget = true;
    }
  });
  return foundTarget;
};

// console.log(checkForMatch2([66, 101], 66))
// console.log(checkForMatch2([101, 45, 75, 105, 99, 107], 107))
// console.log(checkForMatch2(['t', 'e', 's', 't'], 'e'))
// console.log(checkForMatch2(['what', 'a', 'great', 'kata'], 'kat'))

const checkForMatch3 = (a, x) => {
  let foundTarget = false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === x) {
      foundTarget = true;
    }
  }
  return foundTarget;
};

// console.log(checkForMatch3([66, 101], 66))
// console.log(checkForMatch3([101, 45, 75, 105, 99, 107], 107))
// console.log(checkForMatch3(['t', 'e', 's', 't'], 'e'))
// console.log(checkForMatch3(['what', 'a', 'great', 'kata'], 'kat'))

const checkForMatch4 = (a, x) => {
  return a.some((ele) => ele === x);
};

// console.log(checkForMatch4([66, 101], 66))
// console.log(checkForMatch4([101, 45, 75, 105, 99, 107], 107))
// console.log(checkForMatch4(['t', 'e', 's', 't'], 'e'))
// console.log(checkForMatch4(['what', 'a', 'great', 'kata'], 'kat'))

const uniqueInOrder = (iterable) => {
  var result = [];
  var last;

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== last) {
      result.push((last = iterable[i]));
    }
  }
  return result;
};

// console.log(uniqueInOrder('AAAABBBCCDAABBB'))
// console.log(uniqueInOrder('ABBCcAD'))
// console.log(uniqueInOrder([1, 2, 3]))
// console.log(uniqueInOrder([1, 2, 3, 3, 3, 5, 5, 4, 5, 5, 5, 6, 7, 8, 8, 9]))

const uniqueInOrder2 = (iterable) => {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};

// console.log(uniqueInOrder2("AAAABBBCCDAABBB"));
// console.log(uniqueInOrder2("ABBCcAD"));
// console.log(uniqueInOrder2([1, 2, 3]));
// console.log(uniqueInOrder2([1, 2, 3, 3, 3, 5, 5, 4, 5, 5, 5, 6, 7, 8, 8, 9]));

const uniqueInOrder3 = (iterable) => {
  let newArr = [];

  if (typeof iterable === "string") {
    iterable = iterable.split("");
  }

  let arr = iterable.reduce((prev, curr) => {
    if (prev !== curr) {
      newArr.push(prev);
    }
    return curr;
  });
  newArr.push(arr);

  return newArr;
};

// console.log(uniqueInOrder3("AAAABBBCCDAABBB"));
// console.log(uniqueInOrder3("ABBCcAD"));
// console.log(uniqueInOrder3([1, 2, 3]));
// console.log(uniqueInOrder3([1, 2, 3, 3, 3, 5, 5, 4, 5, 5, 5, 6, 7, 8, 8, 9]));

const bmi = (weight, height) => {
  let final = weight / (height * height);
  console.log(final);
  if (final <= 18.5) {
    return "Underweight";
  } else if (final <= 25.0) {
    return "Normal";
  } else if (final <= 30.0) {
    return "Overweight";
  } else if (final > 30) {
    return "Obese";
  }
};

// console.log(bmi(80, 1.80))

const stray = (numbers) => {
  for (var i in numbers) {
    if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
      return numbers[i];
    }
  }
};

// console.log(stray([1, 1, 2, 1, 1]))
// console.log(stray([17, 17, 17, 17, 17, 18, 17, 17, 17, 17]))

const sumTwoSmallestNumbers = (numbers) => {
  let sorting = numbers.sort((a, b) => {
    if (a < b) {
      return -1;
    }
  });
  return sorting[0] + sorting[1];
};

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))
// console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]))
// console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]))
// console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]))

const sumTwoSmallestNumbers2 = (numbers) => {
  numbers = numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
};

// console.log(sumTwoSmallestNumbers2([5, 8, 12, 19, 22]))
// console.log(sumTwoSmallestNumbers2([15, 28, 4, 2, 43]))
// console.log(sumTwoSmallestNumbers2([3, 87, 45, 12, 7]))
// console.log(sumTwoSmallestNumbers2([23, 71, 33, 82, 1]))
// console.log(sumTwoSmallestNumbers2([52, 76, 14, 12, 4]))

const sumTwoSmallestNumbers3 = (numbers) => {
  let [smaller, smallest] = numbers.slice().sort((a, b) => a - b);
  return smaller + smallest;
};

// console.log(sumTwoSmallestNumbers3([5, 8, 12, 19, 22]))
// console.log(sumTwoSmallestNumbers3([15, 28, 4, 2, 43]))
// console.log(sumTwoSmallestNumbers3([3, 87, 45, 12, 7]))
// console.log(sumTwoSmallestNumbers3([23, 71, 33, 82, 1]))
// console.log(sumTwoSmallestNumbers3([52, 76, 14, 12, 4]))

const minMax = (arr) => {
  return [Math.min(...arr), Math.max(...arr)];
};

// console.log(minMax([1, 2, 3, 4, 5]))
// console.log(minMax([2334454, 5]))
// console.log(minMax([5]))

const minMax2 = (arr) => {
  let min = arr[0];
  let max = arr[0];
  for (const num of arr) {
    if (num < min) {
      min = num;
    } else if (num > max) {
      max = num;
    }
  }
  return [min, max];
};

// console.log(minMax2([1, 2, 3, 4, 5]))
// console.log(minMax2([2334454, 5]))
// console.log(minMax2([5]))

const friend = (friends) => {
  return friends.filter((a) => a.length === 4 && isNaN(a));
};

// console.log(friend(["Ryan", "Kieran", "Mark"]))
// console.log(friend(["Ryan", "Jimmy", "1243", "4", "Cool Man"]))
// console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]))
// console.log(friend(["Love", "Your", "Face", "1"]))

const grow = (x) => {
  return x.reduce((acc, curr) => acc * curr, 1);
};

// console.log(grow([1, 2, 3]))
// console.log(grow([4, 1, 1, 1, 4]))
// console.log(grow([2, 2, 2, 2, 2, 2]))
// console.log(grow([3, 2, 5, 6, 1, 6]))

const grow2 = (x) => {
  let initialValue = 1;
  for (let i = 0; i < x.length; i++) {
    initialValue = initialValue * x[i];
  }
  return initialValue;
};

// console.log(grow2([1, 2, 3]))
// console.log(grow2([4, 1, 1, 1, 4]))
// console.log(grow2([2, 2, 2, 2, 2, 2]))
// console.log(grow2([3, 2, 5, 6, 1, 6]))

const longest = (s1, s2) => {
  let output = [];
  let combi = s1.concat(s2);
  let array = combi.split("").sort();

  for (let i = 0; i < array.length; i++) {
    if (!output.includes(array[i])) {
      output.push(array[i]);
    }
  }
  return output.join("");
};

// console.log(longest("aretheyhere", "yestheyarehere"))
// console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"))
// console.log(longest("inmanylanguages", "theresapairoffunctions"))

const longest2 = (s1, s2) => {
  // return [...new Set(s1+s2)].sort().join('')
  let str = new Set([...s1, ...s2]);
  console.log(str);
  return [...str].sort().join("");
};

// console.log(longest2("aretheyhere", "yestheyarehere"))
// console.log(longest2("loopingisfunbutdangerous", "lessdangerousthancoding"))
// console.log(longest2("inmanylanguages", "theresapairoffunctions"))

const removeExclamationMarks = (s) => {
  let splitting = s.split("");
  console.log(splitting);

  for (let i = 0; i < splitting.length; i++) {
    if (splitting[i] === "!") {
      splitting[i] = "";
    }
  }
  return splitting.join("");
};

// console.log(removeExclamationMarks('Hello World!'))

const removeExclamationMarks2 = (s) => {
  return s.split("!").join("");
};

// console.log(removeExclamationMarks2('Hel!!!!lo Wo!!!!!rl!!!!!d!!!! ! ! ! !!! !   !!!'))

const removeExclamationMarks3 = (s) => {
  return s.replace(/!/gi, "");
};

// console.log(removeExclamationMarks3('Hel!!!!lo Wo!!!!!rl!!!!!d!!!! ! ! ! !!! !   !!!'))

const litres = (time) => {
  return Math.floor(time * 0.5);
};

// console.log(litres(2))
// console.log(litres(1.4))
// console.log(litres(12.3))
// console.log(litres(0.82))
// console.log(litres(11.8))
// console.log(litres(1787))
// console.log(litres(0))

const quarterOf = (month) => {
  if (month <= 3) {
    return 1;
  } else if (month <= 6) {
    return 2;
  } else if (month <= 9) {
    return 3;
  } else {
    return 4;
  }
};

// console.log(quarterOf(3))
// console.log(quarterOf(8))
// console.log(quarterOf(11))

const quarterOf2 = (month) => {
  return Math.ceil(month / 3);
};

// console.log(quarterOf2(3))
// console.log(quarterOf2(8))
// console.log(quarterOf2(11))

const hoopCount = (n) => {
  return n >= 10
    ? "Great, now move on to tricks"
    : "Keep at it until you get it";
};

// console.log(hoopCount(3))
// console.log(hoopCount(11))
// console.log(hoopCount(15))
// console.log(hoopCount(2))

const getGrade = (s1, s2, s3) => {
  let average = (s1 + s2 + s3) / 3;

  if (average >= 90) {
    return "A";
  } else if (average >= 80) {
    return "B";
  } else if (average >= 70) {
    return "C";
  } else if (average >= 60) {
    return "D";
  } else return "F";
};

// console.log(getGrade(95, 90, 93))
// console.log(getGrade(100, 85, 96))
// console.log(getGrade(92, 93, 94))
// console.log(getGrade(70, 70, 100))
// console.log(getGrade(85, 85, 87))
// console.log(getGrade(84, 79, 85))
// console.log(getGrade(89, 89, 90))
// console.log(getGrade(60, 82, 76))
// console.log(getGrade(58, 62, 70))
// console.log(getGrade(48, 55, 52))

const invert = (array) => {
  return array.map((ele) => ele * -1);
};

// console.log(invert([1, 2, 3, 4, 5]))
// console.log(invert([1, -2, 3, -4, 5]))
// console.log(invert([]))
// console.log(invert([0]))

// function findEvenIndex(arr)
// {
//   var left = 0, right = arr.reduce(function(pv, cv) { return pv + cv; }, 0);
//   for(var i = 0; i < arr.length; i++) {
//       if(i > 0) left += arr[i-1];
//       right -= arr[i];

//       if(left == right) return i;
//   }

//   return -1;
// }

// function findEvenIndex(arr)
// {
//   let left = 0;
//   let right = arr.reduce((s,n) => s + n, 0);
//   for (let i = 0; i < arr.length; i++) {
//     right -= arr[i];
//     if (left === right) return i;
//     left += arr[i];
//   }
//   return -1;
// }

const findEvenIndex = (arr) => {
  let left = 0;
  let right = arr.reduce((a, b) => a + b, 0);

  for (let i = 0; i < arr.length; i++) {
    right = right - arr[i];

    if (left === right) {
      return i;
    }

    left = left + arr[i];
  }

  return -1;
};

// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
// console.log(findEvenIndex([1, 2, 3, 4, 5, 6]));
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));

const greet = (name, owner) => {
  return name === owner ? "Hello boss" : "Hello guest";
};

// console.log(greet('Daniel', 'Daniel'))
// console.log(greet('Greg', 'Daniel'))

const abbrevName = (name) => {
  return name
    .split(" ")
    .map((ele) => ele[0].toUpperCase())
    .join(".");
};

// console.log(abbrevName('Sam Harris'))
// console.log(abbrevName('Patrick Feenan'))
// console.log(abbrevName('patrick feenan'))
// console.log(abbrevName('Evan Cole'))
// console.log(abbrevName('P Favuzzi'))
// console.log(abbrevName('David Mendieta'))

const countSheep = (num) => {
  let newStr = "";
  for (let i = 1; i <= num; i++) {
    newStr = newStr + `${i} sheep...`;
  }
  return newStr;
};

// console.log(countSheep(0))
// console.log(countSheep(1))
// console.log(countSheep(2))
// console.log(countSheep(3))

const stringToNumber = (str) => {
  return Number(str);
};

// console.log(stringToNumber('1234'))
// console.log(stringToNumber('605'))
// console.log(stringToNumber('1405'))
// console.log(stringToNumber('-7'))

const getAge = (inputString) => {
  // return Number(`${inputString[0]}`)
  return parseInt(inputString);
};

// console.log(getAge('4 years old'))
// console.log(getAge('5 years old'))
// console.log(getAge('21 years old'))

const makeUpperCase = (str) => {
  return str.toUpperCase();
};

// console.log(makeUpperCase('hello'))
// console.log(makeUpperCase('goodbye'))
// console.log(makeUpperCase('sha sha sha da da'))

const powersOfTwo = (n) => {
  let result = [];

  for (let i = 0; i <= n; i++) {
    result.push(Math.pow(2, i));
  }
  return result;
};

// console.log(powersOfTwo(0))
// console.log(powersOfTwo(1))
// console.log(powersOfTwo(4))

const getMiddle = (str) => {
  let length = str.length;
  // console.log(length)
  let middle = Math.floor(length / 2);
  // console.log(middle)

  if (length % 2 === 0) {
    // even
    return str[middle - 1] + str[middle];
  } else {
    // odd
    return str[middle];
  }
};

// console.log(getMiddle('test'))
// console.log(getMiddle('testing'))
// console.log(getMiddle('middle'))
// console.log(getMiddle('A'))

const sumMix = (x) => {
  return x.reduce((acc, curr) => acc + Number(curr), 0);
};

// console.log(sumMix([9, 3, '7', '3']))
// console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))
// console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))

const sumStr = (a, b) => {
  return (Number(a) + Number(b)).toString();
};

// console.log(sumStr('4', '5'))
// console.log(sumStr('34', '5'))

const likes = (names) => {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length >= 4) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
};

// console.log(likes([]))
// console.log(likes(['Peter']))
// console.log(likes(['Jacob', 'Alex']))
// console.log(likes(['Max', 'John', 'Mark']))
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max', 'Steven', 'David', 'Alex', 'Sami']))

const isValidWalk = (walk) => {
  let dx = 0;
  let dy = 0;
  let dt = walk.length;

  for (let i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case "n":
        dy--;
        break;
      case "s":
        dy++;
        break;
      case "w":
        dx--;
        break;
      case "e":
        dx++;
        break;
    }
  }

  return dt === 10 && dx === 0 && dy === 0;
};

// console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
// console.log(
//   isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
// );
// console.log(isValidWalk(["w"]));
// console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));

const testEven = (n) => {
  return n % 2 === 0;
};

// console.log(testEven(0))
// console.log(testEven(0.5))
// console.log(testEven(1))
// console.log(testEven(2))
// console.log(testEven(-4))

const twoSort = (s) => {
  return s.sort()[0].split("").join("***");
};

// console.log(
//   twoSort([
//     "bitcoin",
//     "take",
//     "over",
//     "the",
//     "world",
//     "maybe",
//     "who",
//     "knows",
//     "perhaps",
//   ])
// );
// console.log(
//   twoSort([
//     "turns",
//     "out",
//     "random",
//     "test",
//     "cases",
//     "are",
//     "easier",
//     "than",
//     "writing",
//     "out",
//     "basic",
//     "ones",
//   ])
// );

const reverseWords = (str) => {
  return str
    .split(" ")
    .map((ele) => {
      return ele.split("").reverse().join("");
    })
    .join(" ");
};

// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
// console.log(reverseWords('apple'))
// console.log(reverseWords('a b c d'))
// console.log(reverseWords('double  spaced  words'))

const messiGoals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) => {
  return [laLigaGoals, copaDelReyGoals, championsLeagueGoals].reduce(
    (a, b) => a + b,
    0
  );
};

// console.log(messiGoals(0, 0, 0))
// console.log(messiGoals(43, 10, 5))
// console.log(messiGoals(32, 52, 45))

const gooseFilter = (birds) => {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  return birds.filter((ele) => !geese.includes(ele));
};

// console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))
// console.log(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]))
// console.log(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]))

const gooseFilter2 = (birds) => {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  let newArr = [];
  for (let i = 0; i < birds.length; i++) {
    if (!geese.includes(birds[i])) {
      newArr.push(birds[i]);
    }
  }
  return newArr;
};

// console.log(gooseFilter2(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))
// console.log(gooseFilter2(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]))
// console.log(gooseFilter2(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]))

const countSmileys = (arr) => {
  let map = [
    ":)",
    ";)",
    ":D",
    ";D",
    ":-)",
    ";-)",
    ":~)",
    ";~)",
    ":-D",
    ";-D",
    ":~D",
    ";~)",
    ";~D",
  ];

  let val = 0;
  for (let i = 0; i < arr.length; i++) {
    if (map.includes(arr[i])) {
      val++;
    }
  }
  return val;
};

// console.log(countSmileys([]))
// console.log(countSmileys([':D',':~)',';~D',':)']))
// console.log(countSmileys([':)',':(',':D',':O',':;']))
// console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']))

const findDifference = (a, b) => {
  return Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]);
};

// console.log(findDifference([3, 2, 5], [1, 4, 4]))
// console.log(findDifference([9, 7, 2], [5, 2, 2]))
// console.log(findDifference([11, 2, 5], [1, 10, 8]))
// console.log(findDifference([4, 4, 7], [3, 9, 3]))
// console.log(findDifference([15, 20, 25], [10, 30, 25]))

const alternatingCases = (str) => {
  return str
    .split("")
    .map((ele) =>
      ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()
    )
    .join("");
};

// console.log(alternatingCases('hello world'))
// console.log(alternatingCases('HELLO WORLD'))
// console.log(alternatingCases('hello WORLD'))
// console.log(alternatingCases('HELLO world'))

const greet3 = (language) => {
  let greetings = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };

  return greetings[language] || "Welcome";
};

// console.log(greet3("english"));
// console.log(greet3("dutch"));
// console.log(greet3("flemish"));
// console.log(greet3("finnish"));
// console.log(greet3("IP_ADDRESS_INVALID"));

const isPalindrome = (x) =>
  x.split("").reverse().join("").toLowerCase() === x.toLowerCase();

// console.log(isPalindrome('a'))
// console.log(isPalindrome('aba'))
// console.log(isPalindrome('Abba'))
// console.log(isPalindrome('hello'))
// console.log(isPalindrome('Bob'))
// console.log(isPalindrome('Madam'))
// console.log(isPalindrome('AbBa'))
// console.log(isPalindrome(''))

const smash = (words) => {
  return words.join(" ");
};

// console.log(smash([]));
// console.log(smash(["hello"]));
// console.log(smash(["hello", "world"]));
// console.log(smash(["hello", "amazing", "world"]));
// console.log(smash(["this", "is", "a", "really", "long", "sentence"]));

const comp = (array1, array2) => {
  if (array1 == null || array2 == null) {
    return false;
  }

  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);

  return array1.map((v) => v * v).every((v, i) => v == array2[i]);
};

// console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]))

const comp2 = (array1, array2) => {
  return (
    !!array1 &&
    !!array2 &&
    array1
      .map((ele) => ele * ele)
      .sort()
      .join() == array2.sort().join()
  );
};

// console.log(comp2([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]))

const comp3 = (array1, array2) => {
  if (!array1 || !array2 || array1.length != array2.length) return false;
  return (
    array1
      .map((ele) => ele * ele)
      .sort()
      .toString() === array2.sort().toString()
  );
};

// console.log(comp3([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]))

const accum = (s) => {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
};

// console.log(accum("ZpglnRxqenU"))
// console.log(accum("NyffsGeyylB"))
// console.log(accum("MjtkuBovqrU"))
// console.log(accum("EvidjUnokmM"))
// console.log(accum("HbideVbxncC"))

const arithmetic = (a, b, operator) => {
  if (operator === "add") {
    return a + b;
  } else if (operator === "subtract") {
    return a - b;
  } else if (operator === "multiply") {
    return a * b;
  } else return a / b;
};

// console.log(arithmetic(1, 2, 'add'))
// console.log(arithmetic(8, 2, 'subtract'))
// console.log(arithmetic(5, 2, 'multiply'))
// console.log(arithmetic(8, 2, 'divide'))

const arithmetic2 = (a, b, operator) =>
  ({
    add: a + b,
    subtract: a - b,
    multiply: a * b,
    divide: a / b,
  }[operator]);

// console.log(arithmetic2(1, 2, 'add'))
// console.log(arithmetic2(8, 2, 'subtract'))
// console.log(arithmetic2(5, 2, 'multiply'))
// console.log(arithmetic2(8, 2, 'divide'))

const sequenceSum = (begin, end, step) => {
  let sum = 0;
  for (let i = begin; i <= end; i += step) {
    console.log(i);
    sum = sum + i;
  }
  return sum;
};

// console.log(sequenceSum(2, 6, 2))
// console.log(sequenceSum(1, 5, 1))
// console.log(sequenceSum(1, 5, 3))

const duplicateEncode = (word) => {
  let unique = "";

  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
      unique = unique + "(";
    } else {
      unique = unique + ")";
    }
  }
  return unique;
};

// console.log(duplicateEncode('din'))
// console.log(duplicateEncode('recede'))
// console.log(duplicateEncode('Success'))
// console.log(duplicateEncode('(( @'))

const duplicateEncode2 = (word) => {
  return word
    .toLowerCase()
    .split("")
    .map((ele, index, arr) => {
      return arr.indexOf(ele) == arr.lastIndexOf(ele) ? "(" : ")";
    })
    .join("");
};

// console.log(duplicateEncode2('din'))
// console.log(duplicateEncode2('recede'))
// console.log(duplicateEncode2('Success'))
// console.log(duplicateEncode2('(( @'))

const duplicateCount = (text) => {
  let count = 0;
  let buffer = "";
  let sortedStr = text.toLowerCase().split("").sort().join("");

  for (let i = 0; i < sortedStr.length; i++) {
    if (sortedStr[i] == sortedStr[i + 1] && sortedStr[i] != buffer) {
      buffer = sortedStr[i];
      count++;
    }
  }
  return count;
};

// console.log(duplicateCount(''))
// console.log(duplicateCount('abcde'))
// console.log(duplicateCount('aabbcde'))
// console.log(duplicateCount('aabBcde'))
// console.log(duplicateCount('Indivisibility'))
// console.log(duplicateCount('Indivisibilities'))

const checkForFactor = (base, factor) => {
  return base % factor === 0;
};

// console.log(checkForFactor(10, 2))
// console.log(checkForFactor(63, 7))
// console.log(checkForFactor(2450, 5))
// console.log(checkForFactor(24612, 3))
// console.log(checkForFactor(9, 2))
// console.log(checkForFactor(653, 7))
// console.log(checkForFactor(2453, 5))
// console.log(checkForFactor(24617, 3))

const removeUrlAnchor = (url) => {
  return url.split("#")[0];
};

// console.log(removeUrlAnchor('www.codewars.com#about'))
// console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'))
// console.log(removeUrlAnchor('www.codewars.com/katas/'))

const square = (n) => {
  return n * n;
};

// console.log(square(3))

const nameShuffler = (str) => {
  return str.split(" ").reverse().join(" ");
};

// console.log(nameShuffler('john McClane'))
// console.log(nameShuffler('Mary jeggins'))
// console.log(nameShuffler('tom jerry'))

const correct = (string) => {
  let newStr = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "0") {
      newStr.push("O");
    } else if (string[i] === "5") {
      newStr.push("S");
    } else if (string[i] === "1") {
      newStr.push("I");
    } else {
      newStr.push(string[i]);
    }
  }
  return newStr.join("");
};

// console.log(correct('L0ND0N'))
// console.log(correct('DUBL1N'))
// console.log(correct('51NGAP0RE'))
// console.log(correct('BUDAPE5T'))
// console.log(correct('PAR15'))

const correct2 = (string) => {
  return string.replace(/0/g, "O").replace(/5/g, "S").replace(/1/g, "I");
};

// console.log(correct2('L0ND0N'))
// console.log(correct2('DUBL1N'))
// console.log(correct2('51NGAP0RE'))
// console.log(correct2('BUDAPE5T'))
// console.log(correct2('PAR15'))

const checkIndex = (array, n) => {
  let newNum = 0;

  for (let i = 0; i < array.length; i++) {
    if (i === n) {
      newNum = Math.pow(array[i], n);
    }
  }

  if (n > array.length) {
    newNum = -1;
  }
  return newNum;
};

// console.log(checkIndex([1, 2, 3, 4], 2))
// console.log(checkIndex([1, 3, 10, 100],3))
// console.log(checkIndex([1, 2],3))
// console.log(checkIndex([1,1,1,1,1,1,1,1,1,1], 9))
// console.log(checkIndex([1,1,1,1,1,1,1,1,1,2], 9))
// console.log(checkIndex([29,82,45,10], 3))
// console.log(checkIndex([6,31], 3))
// console.log(checkIndex([75,68,35,61,9,36,89,0,30], 10))

const checkIndex2 = (array, n) => {
  if (array.length > n) {
    return Math.pow(array[n], n);
  } else {
    return -1;
  }
};

// console.log(checkIndex2([1, 2, 3, 4], 2))
// console.log(checkIndex2([1, 3, 10, 100],3))
// console.log(checkIndex2([1, 2],3))
// console.log(checkIndex2([1,1,1,1,1,1,1,1,1,1], 9))
// console.log(checkIndex2([1,1,1,1,1,1,1,1,1,2], 9))
// console.log(checkIndex2([29,82,45,10], 3))
// console.log(checkIndex2([6,31], 3))
// console.log(checkIndex2([75,68,35,61,9,36,89,0,30], 10))

const titleCase = (title, minorWords) => {
  let minor = minorWords ? minorWords.toLowerCase().split(" ") : [];

  return title
    .toLowerCase()
    .split(" ")
    .map((v, i) => {
      if (v != "" && (minor.indexOf(v) === -1 || i === 0)) {
        v = v.split("");
        v[0] = v[0].toUpperCase();
        v = v.join("");
      }
      return v;
    })
    .join(" ");
};

// console.log(titleCase('a clash of KINGS', 'a an the of'))
// console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'))
// console.log(titleCase('the quick brown fox'))

const numberedItems = (array) => {
  return array.map((ele, i) => `${i + 1}: ${ele}`);
};

// console.log(numberedItems([]));
// console.log(numberedItems(["a", "b", "c"]));

const numberedItems2 = (array) => {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    newArr.push(i + 1 + ": " + array[i]);
  }

  return newArr;
};

// console.log(numberedItems2([]));
// console.log(numberedItems2(["a", "b", "c"]));

const sayHello = (name) => {
  return `Hello, ${name}`;
};

// console.log(sayHello('Mr. Spock'))
// console.log(sayHello('Captain Kirk'))
// console.log(sayHello('Liutenant Uhura'))
// console.log(sayHello('Dr. McCoy'))

const isUpperCase = (string) => {
  return string === string.toUpperCase();
};

// console.log(isUpperCase('c'))
// console.log(isUpperCase('C'))
// console.log(isUpperCase('hello I AM DONALD'))
// console.log(isUpperCase('HELLO I AM DONALD'))
// console.log(isUpperCase('ACSKLDFJSgSKLDFJSKLDFJ'))
// console.log(isUpperCase('ACSKLDFJSGSKLDFJSKLDFJ'))

const sortByLength = (array) => {
  return array.sort((a, b) => a.length - b.length);
};

// console.log(sortByLength(["Beg", "Life", "I", "To"]))
// console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]))
// console.log(sortByLength(["Longer", "Longest", "Short"]))

const between = (a, b) => {
  let newArr = [];

  for (let i = a; i <= b; i++) {
    newArr.push(i);
  }
  return newArr;
};

// console.log(between(1, 4))
// console.log(between(-2, 2))

const between2 = (a, b) => {
  let newArr = [];

  while (a <= b) {
    newArr.push(a);
    a++;
  }
  return newArr;
};

// console.log(between2(1, 4))
// console.log(between2(-2, 2))

const between3 = (a) => {
  let newArr = [];

  for (let i = 0; i < a; i++) {
    newArr.push(i);
  }
  return newArr;
};

// console.log(between3(4))

const getDivisorsCnt = (n) => {
  let div = 0;
  // let newArr = []
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      // newArr.push(i)
      div++;
    }
  }

  // return newArr
  return div;
};

// console.log(getDivisorsCnt(1))
// console.log(getDivisorsCnt(10))
// console.log(getDivisorsCnt(11))
// console.log(getDivisorsCnt(54))
// console.log(getDivisorsCnt(30))

const booleanToString = (b) => {
  return b.toString();
};

// console.log(booleanToString(true))
// console.log(booleanToString(false))

const reverseSeq = (n) => {
  let newArr = [];

  for (let i = 1; i <= n; i++) {
    newArr.push(i);
  }
  return newArr.reverse();
};

// console.log(reverseSeq(5))
// console.log(reverseSeq(10))
// console.log(reverseSeq(20))
// console.log(reverseSeq(35))

const reverseSeq2 = (n) => {
  let newArr = [];
  for (let i = n; i > 0; i--) {
    newArr.push(i);
  }
  return newArr;
};

// console.log(reverseSeq2(5))
// console.log(reverseSeq2(10))
// console.log(reverseSeq2(20))
// console.log(reverseSeq2(35))

const warnTheSheep = (q) => {
  let reverseArr = q.reverse().indexOf("wolf");
  if (reverseArr === 0) {
    return "Pls go away and stop eating my sheep";
  } else {
    return `Oi! Sheep number ${reverseArr}! You are about to be eaten by a wolf!`;
  }
};

// console.log(
//   warnTheSheep([
//     "sheep",
//     "sheep",
//     "sheep",
//     "sheep",
//     "sheep",
//     "wolf",
//     "sheep",
//     "sheep",
//   ])
// );
// console.log(
//   warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"])
// );
// console.log(
//   warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"])
// );
// console.log(warnTheSheep(["sheep", "wolf", "sheep"]));
// console.log(warnTheSheep(["wolf"]));
// console.log(warnTheSheep(["sheep", "sheep", "wolf"]));

const sortedPassedArr = (nums) => {
  // if(nums === null) {
  //   return []
  // }
  // return nums.sort((a, b) => a - b)

  return nums !== null ? nums.sort((a, b) => a - b) : [];
};

// console.log(sortedPassedArr([1, 2, 3, 10, 5]))
// console.log(sortedPassedArr([null]))
// console.log(sortedPassedArr([]))
// console.log(sortedPassedArr([20, 2, 10]))
// console.log(sortedPassedArr([2, 20, 10]))

const getRealFloor = (n) => {
  if (n <= 0) {
    return n;
  } else if (n >= 13) {
    return n - 2;
  } else return n - 1;
};

// console.log(getRealFloor(1))
// console.log(getRealFloor(5))
// console.log(getRealFloor(15))

const towerBuilder = (floors) => {
  let tower = [];

  for (let i = 0; i < floors; i++) {
    tower.push(
      " ".repeat(floors - i - 1) +
        "*".repeat(i * 2 + 1) +
        " ".repeat(floors - i - 1)
    );
  }
  return tower;
};

// console.log(towerBuilder(1))
// console.log(towerBuilder(2))
// console.log(towerBuilder(3))

const towerBuilder2 = (floors) => {
  let bricks = "*";
  let spaces = "";
  let tower = [];

  for (let i = 1; i < floors; i++) {
    spaces = spaces + " ";
  }

  for (let i = 0; i < floors; i++) {
    let space = spaces.substring(0, floors - i - 1);
    tower.push(space + bricks + space);
    bricks = bricks + "**";
  }

  return tower;
};

// console.log(towerBuilder2(1))
// console.log(towerBuilder2(2))
// console.log(towerBuilder2(3))

const highestAndLowest = (arr) => {
  if (arr === null || arr.length <= 2) {
    return 0;
  }

  let max = Math.max(...arr);
  let min = Math.min(...arr);

  let sum = arr.reduce((a, b) => a + b, 0);

  return sum - max - min;
};

// console.log(highestAndLowest(null))
// console.log(highestAndLowest([ ]))
// console.log(highestAndLowest([ 3 ]))
// console.log(highestAndLowest([ 3, 5 ]))
// console.log(highestAndLowest([ 6, 2, 1, 8, 10 ]))
// console.log(highestAndLowest([ 0, 1, 6, 10, 10 ]))
// console.log(highestAndLowest([ -6, -20, -1, -10, -12 ]))
// console.log(highestAndLowest([ -6, 20, -1, 10, -12 ]))

const highestAndLowest2 = (arr) => {
  return arr
    ? arr
        .sort((x, y) => x - y)
        .slice(1, -1)
        .reduce((a, b) => a + b, 0)
    : 0;
};

// console.log(highestAndLowest2(null))
// console.log(highestAndLowest2([ ]))
// console.log(highestAndLowest2([ 3 ]))
// console.log(highestAndLowest2([ 3, 5 ]))
// console.log(highestAndLowest2([ 6, 2, 1, 8, 10 ]))
// console.log(highestAndLowest2([ 0, 1, 6, 10, 10 ]))
// console.log(highestAndLowest2([ -6, -20, -1, -10, -12 ]))
// console.log(highestAndLowest2([ -6, 20, -1, 10, -12 ]))

const highestAndLowest3 = (arr) => {
  arr = arr || [];

  return arr
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((a, b) => a + b, 0);
};

// console.log(highestAndLowest3(null))
// console.log(highestAndLowest3([ ]))
// console.log(highestAndLowest3([ 3 ]))
// console.log(highestAndLowest3([ 3, 5 ]))
// console.log(highestAndLowest3([ 6, 2, 1, 8, 10 ]))
// console.log(highestAndLowest3([ 0, 1, 6, 10, 10 ]))
// console.log(highestAndLowest3([ -6, -20, -1, -10, -12 ]))
// console.log(highestAndLowest3([ -6, 20, -1, 10, -12 ]))

const helloName = (name) => {
  if (name) {
    return (
      "Hello, " + name[0].toUpperCase() + name.slice(1).toLowerCase() + "!"
    );
  } else {
    return "Hello, World!";
  }
};

// console.log(helloName("johN"));
// console.log(helloName("alice"));
// console.log(helloName());
// console.log(helloName(""));

const strCount = (str, letter) => {
  let sum = 0;

  str.split("").map((ele) => {
    if (ele.includes(letter)) {
      sum++;
    }
  });
  return sum;
};

// console.log(strCount('Hello', 'o'))
// console.log(strCount('Hello', 'l'))
// console.log(strCount('', 'z'))

const strCount2 = (str, letter) => {
  return str.split(letter).length - 1;
};

// console.log(strCount2('Hello', 'o'))
// console.log(strCount2('Hello', 'l'))
// console.log(strCount2('', 'z'))

const strCount3 = (str, letter) => {
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    if (letter === str[i]) {
      sum++;
    }
  }
  return sum;
};

// console.log(strCount3('Hello', 'o'))
// console.log(strCount3('Hello', 'l'))
// console.log(strCount3('', 'z'))

const noBoringZeros = (n) => {
  return +`${n}`.replace(/0*$/, "");
};

// console.log(noBoringZeros(1450))
// console.log(noBoringZeros(960000))
// console.log(noBoringZeros(1050))
// console.log(noBoringZeros(-1050))
// console.log(noBoringZeros(-105))
// console.log(noBoringZeros(0))

const findSum = (n) => {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i;
    }
  }
  return sum;
};

// console.log(findSum(5))
// console.log(findSum(10))

const findMultiples = (integer, limit) => {
  let newArr = [];

  for (let i = integer; i <= limit; i += integer) {
    newArr.push(i);
  }
  return newArr;
};

// console.log(findMultiples(5, 25));
// console.log(findMultiples(1, 2));
// console.log(findMultiples(5, 7));
// console.log(findMultiples(4, 27));
// console.log(findMultiples(11, 54));

const finalGrade = (exam, projects) => {
  if (exam > 90 && projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else return 0;
};

// console.log(finalGrade(100, 12))
// console.log(finalGrade(85, 5))

const expressionMatters = (a, b, c) => {
  return Math.max(
    a + b + c,
    a * b * c,
    a * (b + c),
    (a + b) * c,
    a + b * c,
    a * b + c
  );
};

// console.log(expressionMatters(2, 1, 2))
// console.log(expressionMatters(2, 1, 1))
// console.log(expressionMatters(1, 1, 1))
// console.log(expressionMatters(1, 2, 3))
// console.log(expressionMatters(1, 3, 1))
// console.log(expressionMatters(2, 2, 2))

const capitals = (word) => {
  let newArr = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      newArr.push(i);
    }
  }
  return newArr;
};

// console.log(capitals('CodEWaRs'))

const isPangram = (string) => {
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every((x) => string.toLowerCase().includes(x));
};

// console.log(isPangram('The quick brown fox jumps over the lazy dog.'))
// console.log(isPangram('This is not a pangram.'))

const isPangram2 = (string) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  string = string.toLowerCase();
  return alphabet.every((ele) => string.includes(ele));
};

// console.log(isPangram2('The quick brown fox jumps over the lazy dog.'))
// console.log(isPangram2('This is not a pangram.'))

const gimme = (triplet) => {
  let max = Math.max(...triplet);
  let min = Math.min(...triplet);
  for (let i = 0; i < triplet.length; i++) {
    if (triplet[i] !== max && triplet[i] !== min) {
      return i;
    }
  }
};

// console.log(gimme([2, 3, 1]))
// console.log(gimme([5, 10, 14]))
// console.log(gimme([2.1, 3.2, 1.4]))
// console.log(gimme([5.9, 10.4, 14.2]))
// console.log(gimme([-2, -3, -1]))
// console.log(gimme([-5, -10, -14]))
// console.log(gimme([-2, -3.2, 1]))
// console.log(gimme([-5.2, -10.6, 14]))

const gimme2 = (triplet) => {
  return triplet.indexOf([...triplet].sort((a, b) => a - b)[1]);
};

// console.log(gimme2([2, 3, 1]))
// console.log(gimme2([5, 10, 14]))
// console.log(gimme2([2.1, 3.2, 1.4]))
// console.log(gimme2([5.9, 10.4, 14.2]))
// console.log(gimme2([-2, -3, -1]))
// console.log(gimme2([-5, -10, -14]))
// console.log(gimme2([-2, -3.2, 1]))
// console.log(gimme2([-5.2, -10.6, 14]))

const getChar = (c) => {
  return String.fromCharCode(c);
};

// console.log(getChar(55))
// console.log(getChar(56))
// console.log(getChar(57))
// console.log(getChar(58))
// console.log(getChar(59))
// console.log(getChar(60))
// console.log(getChar(61))
// console.log(getChar(62))

const solve = (s) => {
  let uppercase = 0;
  let lowercase = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i].toUpperCase()) {
      uppercase++;
    } else {
      lowercase++;
    }
  }

  if (uppercase > lowercase) {
    return s.toUpperCase();
  } else {
    return s.toLowerCase();
  }
};

// console.log(solve('code'))
// console.log(solve('CODe'))
// console.log(solve('COde'))
// console.log(solve('Code'))

const mxdiflg = (a1, a2) => {
  if (a1.length === 0 || a2.length === 0) return -1;
  let l1 = a1.map((str) => str.length);
  let l2 = a2.map((str) => str.length);
  return Math.max(
    Math.max(...l1) - Math.min(...l2),
    Math.max(...l2) - Math.min(...l1)
  );
};

// console.log(mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]))

const preFizz = (n) => {
  let newArr = [];

  for (let i = 1; i <= n; i++) {
    newArr.push(i);
  }
  return newArr;
};

// console.log(preFizz(1))
// console.log(preFizz(2))
// console.log(preFizz(3))
// console.log(preFizz(4))
// console.log(preFizz(5))

const preFizz2 = (n) => {
  return [...Array(n)].map((ele, index) => index + 1);
};

// console.log(preFizz2(1))
// console.log(preFizz2(2))
// console.log(preFizz2(3))
// console.log(preFizz2(4))
// console.log(preFizz2(5))

const hexToDex = (hexString) => {
  return parseInt(hexString, 16);
};

// console.log(hexToDex('1'))
// console.log(hexToDex('a'))
// console.log(hexToDex('10'))
// console.log(hexToDex('FF'))
// console.log(hexToDex('-C'))

const mouthSize = (animal) => {
  return animal.toLowerCase() == "alligator" ? "small" : "wide";
};

// console.log(mouthSize('toucan'))
// console.log(mouthSize('ant bear'))
// console.log(mouthSize('alligator'))

const stringClean = (s) => {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i]) || s[i] == " ") {
      result += s[i];
    }
  }
  return result;
};

// console.log(stringClean(""));
// console.log(stringClean("! !"));
// console.log(stringClean("123456789"));
// console.log(stringClean("E3at m2e2!!"));
// console.log(stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!"));
// console.log(stringClean("A1 A1! AAA   3J4K5L@!!!"));
// console.log(stringClean("Adgre2321 A1sad! A2A3A4 fv3fdv3J544K5L@"));
// console.log(stringClean("Ad2dsad3ds21 A  1$$s122ad! A2A3Ae24 f44K5L@222222 "));
// console.log(
//   stringClean("33333Ad2dsad3ds21 A3333  1$$s122a!d! A2!A!3Ae$24 f2##222 ")
// );
// console.log(
//   stringClean('My "me3ssy" d8ata issues2! Will1 th4ey ever, e3ver be3 so0lved?')
// );
// console.log(
//   stringClean("Wh7y can't we3 bu1y the goo0d software3? #cheapskates3")
// );

const updateLight = (current) => {
  return current === "yellow"
    ? "red"
    : current === "green"
    ? "yellow"
    : "green";
};

// console.log(updateLight('green'))
// console.log(updateLight('yellow'))
// console.log(updateLight('red'))

const capitalize = (s) => {
  let s1 = s
    .split("")
    .map((ele, index) =>
      index % 2 === 0 ? ele.toUpperCase() : ele.toLowerCase()
    )
    .join("");
  let s2 = s
    .split("")
    .map((ele, index) =>
      index % 2 === 1 ? ele.toUpperCase() : ele.toLowerCase()
    )
    .join("");
  return [s1, s2];
};

// console.log(capitalize('abcdef'))
// console.log(capitalize('codewars'))
// console.log(capitalize('abracadabra'))
// console.log(capitalize('codewarriors'))

const minValue = (values) => {
  let newArr = [];

  for (let i = 0; i < values.length; i++) {
    if (newArr.indexOf(values[i]) === -1) {
      newArr.push(values[i]);
    }
  }
  return parseInt(newArr.sort().join(""));
};

// console.log(minValue([1, 3, 1]))
// console.log(minValue([4, 7, 5, 7]))
// console.log(minValue([4, 8, 1, 4]))
// console.log(minValue([5, 7, 9, 5, 7]))
// console.log(minValue([6, 7, 8, 7, 6, 6]))
// console.log(minValue([5, 6, 9, 9, 7, 6, 4]))
// console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]))
// console.log(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]))
// console.log(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))

const minValue2 = (values) => {
  return parseInt(
    values
      .filter((ele, index, array) => values.indexOf(ele) === index)
      .sort()
      .join("")
  );
};

// console.log(minValue2([1, 3, 1]))
// console.log(minValue2([4, 7, 5, 7]))
// console.log(minValue2([4, 8, 1, 4]))
// console.log(minValue2([5, 7, 9, 5, 7]))
// console.log(minValue2([6, 7, 8, 7, 6, 6]))
// console.log(minValue2([5, 6, 9, 9, 7, 6, 4]))
// console.log(minValue2([1, 9, 1, 3, 7, 4, 6, 6, 7]))
// console.log(minValue2([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]))
// console.log(minValue2([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))

const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
  return (
    enteredCode === correctCode &&
    new Date(currentDate) <= new Date(expirationDate)
  );
};

// console.log(checkCoupon("123", "123", "September 5, 2014", "October 1, 2014"));
// console.log(checkCoupon("123a", "123", "September 5, 2014", "October 1, 2014"));

const order = (words) => {
  let newArr = words.split(" ");
  let sortedArray = [];

  for (let i = 0; i <= newArr.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[j].indexOf(i) >= 0) {
        sortedArray.push(newArr[j]);
      }
    }
  }
  return sortedArray.join(" ");
};

// console.log(order("is2 Thi1s T4est 3a"))
// console.log(order("4of Fo1r pe6ople g3ood th5e the2"))
// console.log(order(""))

const pipeFix = (numbers) => {
  let first = numbers[0];
  let last = numbers[numbers.length - 1];
  let newArr = [];

  for (let i = first; i <= last; i++) {
    newArr.push(i);
  }
  return newArr;
};

// console.log(pipeFix([1, 2, 3, 4, 5, 6, 8, 9]))
// console.log(pipeFix([1, 2, 3, 12]))
// console.log(pipeFix([6, 9]))
// console.log(pipeFix([-1, 4]))
// console.log(pipeFix([1, 2, 3]))

const pipeFix2 = (numbers) => {
  return Array(numbers.pop() - numbers[0] + 1)
    .fill(0)
    .map((ele, index) => index + numbers[0]);
};

// console.log(pipeFix2([1, 2, 3, 4, 5, 6, 8, 9]))
// console.log(pipeFix2([1, 2, 3, 12]))
// console.log(pipeFix2([6, 9]))
// console.log(pipeFix2([-1, 4]))
// console.log(pipeFix2([1, 2, 3]))

const flattenAndSort = (array) => {
  return array.flat().sort((a, b) => a - b);
};

// console.log(flattenAndSort([]))
// console.log(flattenAndSort([[], []]))
// console.log(flattenAndSort([[], [1]]))
// console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]))
// console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]))

const flattenAndSort2 = (array) => {
  return [].concat(...array).sort((a, b) => a - b);
};

// console.log(flattenAndSort2([]))
// console.log(flattenAndSort2([[], []]))
// console.log(flattenAndSort2([[], [1]]))
// console.log(flattenAndSort2([[3, 2, 1], [7, 9, 8], [6, 4, 5]]))
// console.log(flattenAndSort2([[1, 3, 5], [100], [2, 4, 6]]))

const sumOfMinimums = (arr) => {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total = total + Math.min(...arr[i]);
  }

  return total;
};

// console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]))
// console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]))

const setAlarm = (employed, vacation) => {
  return employed > vacation;
};

// console.log(setAlarm(true, true))
// console.log(setAlarm(false, true))
// console.log(setAlarm(true, false))

const xor = (a, b) => {
  return a != b;
};

// console.log(xor(false, false))
// console.log(xor(true, false))
// console.log(xor(false, true))
// console.log(xor(true, true))

const rainAmount = (mm) => {
  let amount = 40 - mm;
  return mm >= 40
    ? "Your plant has had more than enough water for today!"
    : `You need to give your plant ${amount}mm of water`;
};

// console.log(rainAmount(100))
// console.log(rainAmount(39))

const take = (arr, n) => {
  return arr.slice(0, n);
};

// console.log(take([0, 1, 2, 3, 4, 5, 8, 13], 3))

const howManyLightsabersDoYouOwn = (name) => {
  return name === "Zach" ? 18 : 0;
};

// console.log(howManyLightsabersDoYouOwn('Adam'))
// console.log(howManyLightsabersDoYouOwn('Zach'))

const include = (arr, item) => {
  return arr.includes(item);
};

// console.log(include([1, 2, 3, 4], 3))
// console.log(include([1, 2, 4, 5], 3))

const largestPairSum = (numbers) => {
  let secondNum = numbers.sort((a, b) => b - a)[1];
  return secondNum + Math.max(...numbers);
};

// console.log(largestPairSum([10, 14, 2, 23, 19]));
// console.log(largestPairSum([-100, -29, -24, -19, 19]));
// console.log(largestPairSum([1, 2, 3, 4, 6, -1, 2]));
// console.log(largestPairSum([-10, -8, -16, -18, -19]));

const largestPairSum2 = (numbers) => {
  return numbers
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((a, b) => a + b, 0);
};

// console.log(largestPairSum2([10, 14, 2, 23, 19]));
// console.log(largestPairSum2([-100, -29, -24, -19, 19]));
// console.log(largestPairSum2([1, 2, 3, 4, 6, -1, 2]));
// console.log(largestPairSum2([-10, -8, -16, -18, -19]));

const largestPairSum3 = (numbers) => {
  let [a, b] = numbers.sort((a, b) => b - a);
  return a + b;
};

// console.log(largestPairSum3([10, 14, 2, 23, 19]));
// console.log(largestPairSum3([-100, -29, -24, -19, 19]));
// console.log(largestPairSum3([1, 2, 3, 4, 6, -1, 2]));
// console.log(largestPairSum3([-10, -8, -16, -18, -19]));

const problem = (x) => {
  return typeof x === "string" ? "Error" : x * 50 + 6;
};

// console.log(problem(1))
// console.log(problem(5))
// console.log(problem(0))
// console.log(problem(1.2))
// console.log(problem(3))
// console.log(problem('RyanIsCool'))
// console.log(problem(-3))
// console.log(problem(""))
// console.log(problem(0.03))

const combat = (health, damage) => {
  if (health - damage < 0) {
    return 0;
  }

  return health - damage;
};

// console.log(combat(100, 5))
// console.log(combat(92, 8))
// console.log(combat(20, 30))

const combat2 = (health, damage) => {
  return health - damage < 0 ? 0 : health - damage;
};

// console.log(combat2(100, 5))
// console.log(combat2(92, 8))
// console.log(combat2(20, 30))

const feast = (beast, dish) => {
  return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);
};

// console.log(feast('great blue heron', 'garlic naan'))
// console.log(feast('chickadee', 'chocolate cake'))
// console.log(feast('brown bear', 'bear claw'))

const arrayDiff = (a, b) => {
  return a.filter((e) => !b.includes(e));
};

// console.log(arrayDiff([1, 2], [1]))
// console.log(arrayDiff([1, 2, 2], [1]))
// console.log(arrayDiff([1, 2, 2], [2]))
// console.log(arrayDiff([1, 2, 2], []))
// console.log(arrayDiff([], [1, 2]))
// console.log(arrayDiff([1, 2, 3], [1, 2]))

const arrayDiff2 = (a, b) => {
  let newArr = [];

  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) < 0) {
      newArr.push(a[i]);
    }
  }
  return newArr;
};

// console.log(arrayDiff2([1, 2], [1]))
// console.log(arrayDiff2([1, 2, 2], [1]))
// console.log(arrayDiff2([1, 2, 2], [2]))
// console.log(arrayDiff2([1, 2, 2], []))
// console.log(arrayDiff2([], [1, 2]))
// console.log(arrayDiff2([1, 2, 3], [1, 2]))

const deleteNth = (arr, x) => {
  let map = {};

  return arr.filter((n) => {
    map[n] = (map[n] || 0) + 1;
    return map[n] <= x;
  });
};

// console.log(deleteNth([20,37,20,21], 1))
// console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3))

const addLength = (str) => {
  return str.split(" ").map((e) => `${e} ${e.length}`);
};

// console.log(addLength('apple ban'))
// console.log(addLength('you will win'))

const smallEnough = (a, limit) => {
  return a.every((e) => e <= limit);
};

// console.log(smallEnough([66, 101], 200))
// console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))
// console.log(smallEnough([101, 45, 75, 105, 99, 107], 107))
// console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120))

const switchItUp = (number) => {
  switch (number) {
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
    case 0:
      return "Zero";
  }
};

// console.log(switchItUp(1));
// console.log(switchItUp(2));
// console.log(switchItUp(3));
// console.log(switchItUp(4));
// console.log(switchItUp(5));

const apple = (x) => {
  return Math.pow(x, 2) > 1000
    ? "It's hotter than the sun!!"
    : "Help yourself to a honeycomb Yorkie for the glovebox.";
};

// console.log(apple('50'))
// console.log(apple(4))

const remove = (string) => {
  return string.charAt(string.length - 1) === "!"
    ? string.slice(0, -1)
    : string;
};

// console.log(remove('Hi!'))
// console.log(remove('Hi!!!'))
// console.log(remove('!Hi'))
// console.log(remove('!Hi!'))
// console.log(remove('Hi! Hi!'))
// console.log(remove('Hi'))

const remove2 = (string, number) => {
  for (let i = 0; i < number; i++) {
    string = string.replace("!", "");
  }
  return string;
};

// console.log(remove2('Hi!', 1))
// console.log(remove2('Hi!', 100))
// console.log(remove2('Hi!!!', 1))
// console.log(remove2('Hi!!!', 100))
// console.log(remove2('!Hi', 1))
// console.log(remove2('!Hi!', 1))
// console.log(remove2('!Hi!', 100))
// console.log(remove2('!!!Hi !!hi!!! !hi', 1))
// console.log(remove2('!!!Hi !!hi!!! !hi', 3))
// console.log(remove2('!!!Hi !!hi!!! !hi', 5))
// console.log(remove2('!!!Hi !!hi!!! !hi', 100))

const reverseLetter = (str) => {
  return str
    .replace(/[^a-z]/gi, "")
    .split("")
    .reverse()
    .join("");
};

// console.log(reverseLetter('krishan'))
// console.log(reverseLetter('ultr530?n'))
// console.log(reverseLetter('ab23c'))
// console.log(reverseLetter('krish21an'))

const getEvenNumbers = (numbersArray) => {
  return numbersArray.filter((n) => n % 2 === 0);
};

// console.log(getEvenNumbers([1,2,3,6,8,10]))
// console.log(getEvenNumbers([1,2]))
// console.log(getEvenNumbers([12,14,15]))
// console.log(getEvenNumbers([13,15]))
// console.log(getEvenNumbers([1,3,9]))

const check2 = (a, x) => {
  return a.includes(x);
};

// console.log(check2([66, 101], 66))
// console.log(check2([80, 117, 115, 104, 45, 85, 112, 115], 45))
// console.log(check2(['t', 'e', 's', 't'], 'e'))
// console.log(check2(['what', 'a', 'great', 'kata'], 'kat'))

const usdcny = (usd) => {
  return `${(usd * 6.75).toFixed(2)} Chinese Yuan`;
};

// console.log(usdcny(15))
// console.log(usdcny(465))
// console.log(usdcny(4))

const rowWeights = (array) => {
  let team1 = [];
  let team2 = [];

  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      team2.push(array[i]);
    } else {
      team1.push(array[i]);
    }
  }
  let newTeam1 = team1.reduce((a, b) => a + b, 0);
  let newTeam2 = team2.reduce((a, b) => a + b, 0);
  return [newTeam2, newTeam1];
};

// console.log(rowWeights([80]))
// console.log(rowWeights([100,50]))
// console.log(rowWeights([50,60,70,80]))
// console.log(rowWeights([13,27,49]))
// console.log(rowWeights([70,58,75,34,91]))
// console.log(rowWeights([29,83,67,53,19,28,96]))
// console.log(rowWeights([0]))
// console.log(rowWeights([100,51,50,100]))
// console.log(rowWeights([39,84,74,18,59,72,35,61]))
// console.log(rowWeights([0,1,0]))

const rowWeights2 = (array) => {
  let team1 = array
    .filter((ele, ind) => ind % 2 == 0)
    .reduce((acc, curr) => acc + curr, 0);
  let team2 = array
    .filter((ele, ind) => ind % 2 != 0)
    .reduce((acc, curr) => acc + curr, 0);
  return [team1, team2];
};

// console.log(rowWeights2([80]))
// console.log(rowWeights2([100,50]))
// console.log(rowWeights2([50,60,70,80]))
// console.log(rowWeights2([13,27,49]))
// console.log(rowWeights2([70,58,75,34,91]))
// console.log(rowWeights2([29,83,67,53,19,28,96]))
// console.log(rowWeights2([0]))
// console.log(rowWeights2([100,51,50,100]))
// console.log(rowWeights2([39,84,74,18,59,72,35,61]))
// console.log(rowWeights2([0,1,0]))

const findUnique = (arr) => {
  arr.sort((a, b) => a - b);
  if (arr[0] == arr[1]) {
    return arr[arr.length - 1];
  } else {
    return arr[0];
  }
};

// console.log(findUnique([1, 0, 0]));
// console.log(findUnique([0, 1, 0]));
// console.log(findUnique([0, 0, 1]));
// console.log(findUnique([1, 1, 1, 2, 1, 1]));
// console.log(findUnique([1, 1, 2, 1, 1]));
// console.log(findUnique([3, 10, 3, 3, 3]));

const findUnique2 = (arr) => {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0];
};

// console.log(findUnique2([1, 0, 0]));
// console.log(findUnique2([0, 1, 0]));
// console.log(findUnique2([0, 0, 1]));
// console.log(findUnique2([1, 1, 1, 2, 1, 1]));
// console.log(findUnique2([1, 1, 2, 1, 1]));
// console.log(findUnique2([3, 10, 3, 3, 3]));

const findUnique3 = (arr) => {
  if (arr[0] === arr[1]) {
    return arr.find((v) => v !== arr[0]);
  }
  return arr[1] === arr[2] ? arr[0] : arr[1];
};

// console.log(findUnique3([1, 0, 0]));
// console.log(findUnique3([0, 1, 0]));
// console.log(findUnique3([0, 0, 1]));
// console.log(findUnique3([1, 1, 1, 2, 1, 1]));
// console.log(findUnique3([1, 1, 2, 1, 1]));
// console.log(findUnique3([3, 10, 3, 3, 3]));

const mergeArrays = (arr1, arr2) => {
  return arr1
    .concat(arr2)
    .sort((a, b) => a - b)
    .filter((ele, ind, arr) => arr.indexOf(ele) === ind);
};

// console.log(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8]));
// console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]));
// console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));

const removeFirstAndLast = (arr) => {
  arr = arr.split(",");
  if (arr.length < 3) {
    return null;
  }
  return arr.slice(1, arr.length - 1).join(" ");
};

// console.log(removeFirstAndLast("1,2,3"));
// console.log(removeFirstAndLast("1,2,3,4"));
// console.log(removeFirstAndLast("1,2,3,4,5"));

const alphabetWar = (fight) => {
  let right = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
  };

  let left = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
  };

  let leftSide = 0;
  let rightSide = 0;

  for (let char of fight) {
    if (char in left) {
      leftSide = leftSide + left[char];
    }

    if (char in right) {
      rightSide = rightSide + right[char];
    }
  }

  return leftSide > rightSide
    ? "Left side wins!"
    : leftSide < rightSide
    ? "Right side wins!"
    : "Let's fight again!";
};

// console.log(alphabetWar('z'))
// console.log(alphabetWar('zdqmwpbs'))
// console.log(alphabetWar('zzzzs'))
// console.log(alphabetWar('wwwwww'))

const calculateAge = (birthYear, relationYear) => {
  if (relationYear - birthYear === 1) {
    return `You are ${relationYear - birthYear} year old.`;
  } else if (birthYear < relationYear) {
    return `You are ${relationYear - birthYear} years old`;
  } else if (relationYear - birthYear === -1) {
    return `You will be born in ${birthYear - relationYear} year.`;
  } else if (birthYear > relationYear) {
    return `You will be born in ${birthYear - relationYear} years`;
  } else if (birthYear === relationYear) {
    return "You were born this very year!";
  }
};

// console.log(calculateAge(2012, 2016));
// console.log(calculateAge(1989, 2016));
// console.log(calculateAge(2000, 2090));
// console.log(calculateAge(2000, 1990));
// console.log(calculateAge(3400, 3400));
// console.log(calculateAge(900, 2900));
// console.log(calculateAge(2010, 1990));
// console.log(calculateAge(2010, 1500));
// console.log(calculateAge(2011, 2012));
// console.log(calculateAge(2000, 1999));

const bump = (x) => {
  let res = 0;
  let splitting = x.split("");

  for (let i = 0; i < splitting.length; i++) {
    if (splitting[i] === "n") {
      res++;
    }
  }
  return res > 15 ? "Car Dead" : "Woohoo!";
};

// console.log(bump("n"))
// console.log(bump("__nn_nnnn__n_n___n____nn__nnn"))
// console.log(bump("nnn_n__n_n___nnnnn___n__nnn__"))
// console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"))
// console.log(bump("______n___n_"))

const bump2 = (x) => {
  return x.split("").filter((e) => e === "n").length > 15
    ? "Car Dead"
    : "Woohoo!";
};

// console.log(bump2("n"));
// console.log(bump2("__nn_nnnn__n_n___n____nn__nnn"));
// console.log(bump2("nnn_n__n_n___nnnnn___n__nnn__"));
// console.log(bump2("_nnnnnnn_n__n______nn__nn_nnn"));
// console.log(bump2("______n___n_"));

const adjacentElementsProduct = (array) => {
  let newArr = [];

  for (let i = 0; i < array.length - 1; i++) {
    newArr.push(array[i] * array[i + 1])
  }
  return Math.max(...newArr);
};

console.log(adjacentElementsProduct([5, 8]));
console.log(adjacentElementsProduct([1, 2, 3]));
console.log(adjacentElementsProduct([1, 5, 10, 9]));
console.log(adjacentElementsProduct([4, 12, 3, 1, 5]));
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]));
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]));
console.log(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]));
console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]));
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]));
