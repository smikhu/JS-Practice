// Write a JS program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100.

const twoNum = (num1, num2) => {
    if (num1 + num2 === 100){
        return true
    } else if (num1 === 100 || num2 === 100) {
        return true
    } else {
        return false
    }
}

// console.log(twoNum(50, 50))
// console.log(twoNum(100, 50))
// console.log(twoNum(50, 100))
// console.log(twoNum(42, 32))
// console.log(twoNum(10, 1))
// console.log(twoNum(70, 30))
// console.log(twoNum(65, 33))


const twoNum2 = (num1, num2) => {
    return (num1 + num2 === 100 || num1 == 100 || num2 === 100 ? true : false)
}

// console.log(twoNum2(63, 37))
// console.log(twoNum2(100, 37))
// console.log(twoNum2(63, 100))
// console.log(twoNum2(63, 3))
// console.log(twoNum2(23, 56))



// Write a JS program to get the extension of a filename.

const getFileExtension = (str) => {
    return str.split('.')[1]
}

// console.log(getFileExtension('index.html'))
// console.log(getFileExtension('styles.css'))
// console.log(getFileExtension('script.js'))


const getFileExtension2 = (str) => {
    return str.slice(str.lastIndexOf('.'))
}

// console.log(getFileExtension2('index.html'))
// console.log(getFileExtension2('styles.css'))
// console.log(getFileExtension2('script.js'))
// console.log(getFileExtension2('webpack.config.jpeg'))



// Write a JS program to replace every character in a given string with the character following it in the alphabet.

const moveCharsForward = (str) => 
    str
    .split('')
    .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
    .join('');

// console.log(moveCharsForward('abcde'))


// Write a JS program to get the current date. expected output - mm-dd-yyyy

const formatDate = (date = new Date()) => {
    const days = date.getDate() + 1;
    const months = date.getMonth() + 1;
    const years = date.getFullYear();
    return `${days}/${months}/${years}`
}

// console.log(formatDate())



// Write a JS program to create a new string adding "New!" in front of a given string. If the given string begins with "New!" already then return the original string.

const addNew = (str) => {
    if(str.indexOf('New!') === 0) {
        return str
    } else {
        return `New! ${str}`
    }
}

// console.log(addNew('New! Offers'))
// console.log(addNew('Offers'))
// console.log(addNew('Old! Offers'))
// console.log(addNew('New! Old! Offers'))



const addNew2 = (str) => 
    str.indexOf('New!') === 0 ? str : `New! ${str}`;


// console.log(addNew2('New! Offers'))
// console.log(addNew2('Offers'))
// console.log(addNew2('Old! Offers'))
// console.log(addNew2('New! Old! Offers'))





// REVERSING A STRING


function reverseString(str) {
    return str.split('').reverse().join('')
}

console.log(reverseString('hello'))





function reverseString2(str) {
    let revString = '';
    for(let i = str.length - 1; i >= 0; i--) {
        revString = revString + str[i]
    }
    return revString
}


console.log(reverseString2('hello'))
console.log(reverseString2('crocodile'))





function reverseString3(str) {
    let revString = '';
    for(let i = 0; i <= str.length - 1; i++) {
        revString = str[i] + revString
    }
    return revString
}


console.log(reverseString3('hello'))
console.log(reverseString3('crocodile'))




function reverseString4(str) {
    let revString = '';
    for(let char of str) {
        revString = char + revString
    }
    return revString
}

console.log(reverseString4('hello'))
console.log(reverseString4('crocodile'))




function reverseString5(str) {
    let revString = '';
    str.split('').forEach(function (char) {
        revString = char + revString;
    })
    return revString
}

console.log(reverseString5('hello'))
console.log(reverseString5('crocodile'))




function reverseString6(str) {
    let revString = '';
    str.split('').forEach(char => revString = char + revString);
    return revString
}

console.log(reverseString6('hello'))
console.log(reverseString6('crocodile'))




function reverseString7(str) {
    return str.split('').reduce(function (revString, char) {
        return char + revString
    }, '')
}


console.log(reverseString7('hello'))
console.log(reverseString7('crocodile'))




function reverseString8(str) {
    return str.split('').reduce((revString, char) => char + revString
    , '');
}


console.log(reverseString8('hello'))
console.log(reverseString8('crocodile'))





// IS PALINDROME


function isPalindrome(str) {
    let newStr = str.split('').reverse().join('')
    if(newStr === str) {
        return true
    } else {
        return false
    }
}

console.log(isPalindrome('racecar'))
console.log(isPalindrome('crocodile'))
console.log(isPalindrome('eye'))




function isPalindrome2(str) {
    let newStr = str.split('').reverse().join('')

    return newStr === str;
}



console.log(isPalindrome2('racecar'))
console.log(isPalindrome2('crocodile'))
console.log(isPalindrome2('eye'))





// REVERSE AN INTEGER

function reverseInt(int) {
    const revString = int.toString().split('').reverse().join('')
    
    return parseInt(revString) * Math.sign(int);
}


console.log(reverseInt(521))
console.log(reverseInt(12345))
console.log(reverseInt(-12345))





// CAPITALIZING LETTERS


function capitalizeLetters(str) {
    const strArr = str.toLowerCase().split(' ');

    for(let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1)
    }

    return strArr.join(' ')
}

console.log(capitalizeLetters('i love javascript'))
console.log(capitalizeLetters('i love javaSCRipt'))




function capitalizeLetters2(str) {
    return str
    .toLowerCase()
    .split(' ')
    .map(function(word) {
        return word[0].toUpperCase() + word.substr(1);
    })
    .join(' ')
}   


console.log(capitalizeLetters2('i love javascript'))
console.log(capitalizeLetters2('i love javaSCRipt'))



function capitalizeLetters3(str) {
    return str.replace(/\b[a-z]/gi, function(char) {
        return char.toUpperCase();
    })
}


console.log(capitalizeLetters3('i love javascript'))
console.log(capitalizeLetters3('i love javaSCRipt'))






// MAX CHARACTER

function maxCharacter(str) {
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';

    str.split('').forEach(function (char) {
        if(charMap[char] ) {
            charMap[char]++
        } else {
            charMap[char] = 1;
        }
    })

    for(let char in charMap) {
        if(charMap[char] > maxNum) {
            maxNum = charMap[char]
            maxChar = char;
        }
    }
    return maxChar
}


console.log(maxCharacter('javascript'))
console.log(maxCharacter('javascriptttttt'))





// FIZZBUZZ

function fizzBuzz() {
    for(let i = 1; i <= 100; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else if(i % 3 === 0) {
            console.log('Fizz')
        } else if (i % 5 === 0){
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}

// console.log(fizzBuzz())







// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

    const sorted = wordArr.sort(function(a, b) {
        return b.length - a.length;
    })

    const longestWordArr = sorted.filter(function(word) {
        return word.length === sorted[0].length
    })

    if(longestWordArr.length === 1) {
        return longestWordArr[0]
    } else {
        return longestWordArr
    }
}

console.log(longestWord('Helloo there, my name is Brad'))
    
  
// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
    const chunkedArr = [];
    let i = 0;

    while(i < arr.length) {
        chunkedArr.push(arr.slice(i, i + len));

        i += len
    }

    return chunkedArr;
}


console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3))
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2))




function chunkArray2(arr, len) {
    const chunkedArr = [];
    arr.forEach(function(val) {
        const last = chunkedArr[chunkedArr.length - 1]

        if(!last || last.length === len) {
            chunkedArr.push([val])
        } else {
            last.push(val)
        }

        
    });

    return chunkedArr;
}



console.log(chunkArray2([1, 2, 3, 4, 5, 6, 7], 3))
console.log(chunkArray2([1, 2, 3, 4, 5, 6, 7], 2))


// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
    return arrays.reduce(function(a, b) {
        return a.concat(b)
    });
}

console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]))




function flattenArray2(arrays) {
    return [].concat.apply([], arrays)
}


console.log(flattenArray2([[1, 2], [3, 4], [5, 6], [7]]))





function flattenArray3(arrays) {
    return [].concat(...arrays)
}


console.log(flattenArray3([[1, 2], [3, 4], [5, 6], [7]]))



// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
    return formatStr(str1) === formatStr(str2);
}


// helper function
function formatStr(str) {
    return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}

console.log(isAnagram('elbow', 'below'))
console.log(isAnagram('dirty room', 'Dormitory!!!###'))
console.log(isAnagram('dirty rooms', 'Dormitory'))



// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'
  

function letterChanges(str) {
    let newStr = str.toLowerCase().replace(/[a-z]/gi, function(char) {
        if(char === 'z' || char === 'Z') {
            return 'a';
        } else {
            return String.fromCharCode(char.charCodeAt() + 1)
        }
    })

    newStr = newStr.replace(/a|e|i|o|u/gi, function(vowel) {
        return vowel.toUpperCase();
    })

    return newStr;
}

console.log(letterChanges('Hello there'))
console.log(letterChanges('Helloz therez'))
 



// CHALLENGE 1 : ADD ALL NUMBERS

function addAll() {
    var args = Array.prototype.slice.call(arguments);
    var total = 0;

    for(i = 0; i < args.length; i++) {
        total += args[i]
    }
    return total
}


console.log(addAll(2, 5, 6, 7))



function addAll2(...numbers) {
    let total = 0;
    numbers.forEach(function(num) {
        total += num
    })
    return total
}

console.log(addAll2(2, 5, 6, 7, 5))



function addAll3(...numbers) {
    return numbers.reduce((acc, cur) => acc + cur)
}

console.log(addAll3(2, 5, 6, 7, 5, 10))





// CHALLENGE 2 : SUM ALL PRIMES


function sumAllPrimes(num) {
    let total = 0;
    
    function checkForPrime(i) {
        for (let j = 2; j < i; j++) {
            if(i % j === 0) {
                return false
            }
        }
        return true
    }



    for (let i = 2; i <= num; i++) {
        if(checkForPrime(i)) {
            total += i;
        }
    }
    return total;
}

console.log(sumAllPrimes(10))




// CHALLENGE 3 : SEEK & DESTROY


function seekAndDestroy(arr) {
    const args = Array.from(arguments);

    function filterArr(arr) {
        //Return true if NOT in array
        return args.indexOf(arr) === -1
    }

    return arr.filter(filterArr);
}

console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6))
console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6, 'hello'))




function seekAndDestroy2(arr, ...rest) {
    return arr.filter(val => !rest.includes(val))
}


console.log(seekAndDestroy2([2, 3, 4, 6, 6, 'hello'], 2, 6))
console.log(seekAndDestroy2([2, 3, 4, 6, 6, 'hello'], 2, 6, 'hello'))







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

// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))






function sortByHeight2(a) {
    const arr1 = [];
    const arr2 = [];

    a.forEach((val, i) => val === -1 ? arr1.push(i) : arr2.push(val));

    const sortArr = arr2.sort((a, b) => a - b);

    arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));

    return sortArr;
}

// console.log(sortByHeight2([-1, 150, 190, 170, -1, -1, 160, 180]))






// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined.
// ex.
// missingLetters("abce" == "d")
// missingLetters("abcdefghjklmno" == "i")
// missingLetters("abcdefghijklmnopqrstuvwxyz" == undefined)

function missingLetters(str) {
    let compare = str.charCodeAt(0);
    let missing;

    str.split('').map((char, i) => {
        if(str.charCodeAt(i) == compare) {
            ++compare
        } else {
            missing = String.fromCharCode(compare)
        }
    });

    return missing;
}

console.log(missingLetters("abce"))
console.log(missingLetters("abcdefghjklmno"))
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"))






// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71] == [170, 116])

function evenOddSums(arr) {
    let evenSum = 0;
    let oddSum = 0;

    arr.forEach(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)))

    return [evenSum, oddSum]
}


console.log(evenOddSums([50, 60, 60, 45, 71]))






// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// If more than one longest word, put into an array
// ex. longestWord('Hello, my name is Brad') === 'hello'
// ex. longestWord('Hello there, my name is Brad') === ['hello', 'there']

function longestWord10(sen) {
    // create filtered array
    let wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

    // sort by length
    const sorted = wordArr.sort(function(a, b) {
        return b.length - a.length
    });

    // if multiple words, put into an array
    const longestWord = sorted.filter(function(word) {
        return word.length === sorted[0].length
    })

    // check if more than one array value
    if(longestWord.length === 1) {
        return longestWord[0]
    } else {
        return longestWord
    }
}

// console.log(longestWord10('Hello, my name is Brad'))
// console.log(longestWord10('Hello there, my name is Brad'))







// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6], [7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6], [7]]

function chunkArray10(arr, len) {
    // initialize chunked arr
    const chunkedArr = [];
    // set index
    let i = 0;

    // loop while index is less than the array length
    while (i < arr.length) {
        // slice out from the index to the index + the chunk length and push on to the chunkedArr
        chunkedArr.push(arr.slice(i, i + len))
        // increment by chunk length
        i += len;
    }
    return chunkedArr
}

// console.log(chunkArray10([1, 2, 3, 4, 5, 6, 7], 3))
// console.log(chunkArray10([1, 2, 3, 4, 5, 6, 7], 2))





function chunkArray11(arr, len) {
    // init chunked arr
    const chunkedArr = [];

    // loop through arr
    arr.forEach(function(val) {
        // get last element
        const last = chunkedArr[chunkedArr.length - 1]
        
        // check if last and if last length is equal to the chunk length
        if (!last || last.length === len) {
            chunkedArr.push([val])
        } else {
            last.push([val])
        }
    })
    return chunkedArr
}

// console.log(chunkArray11([1, 2, 3, 4, 5, 6, 7], 3))
// console.log(chunkArray11([1, 2, 3, 4, 5, 6, 7], 2))




// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]


function flattenArray10(arrays) {
    return arrays.reduce(function(a, b) {
        return a.concat(b)
    })
}

console.log(flattenArray10([[1, 2], [3, 4], [5, 6], [7]]))



function flattenArray11(arrays) {
    return [].concat.apply([], arrays)
}

console.log(flattenArray11([[1, 2], [3, 4], [5, 6], [7]]))




function flattenArray12(arrays) {
    return [].concat(...arrays)
}

console.log(flattenArray12([[1, 2], [3, 4], [5, 6], [7]]))





function solution(str) {
    return str.split('').reverse().join('').toLowerCase();
  }
  
console.log(solution('Hello'))
  






function even_or_odd(number) {
    if(number % 2 === 0) {
      return "Even"
    } else {
      return "Odd"
    }
  }
  
console.log(even_or_odd(26))







function countSheeps(arrayOfSheep) {
    let numberOfSheep = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
      if (arrayOfSheep[i] === true) {
        numberOfSheep += 1
      }
    }
    return `There are ${numberOfSheep} sheeps in total`
  }
  
  var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];
  
console.log(countSheeps(array1))









function getCount(str) {
    var vowelsCount = 0;
    const splitting = str.split('')
    console.log(splitting)
      for(let i = 0; i < splitting.length; i++) {
        switch(splitting[i]) {
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
  
  // console.log(getCount("abracadabra"))






  
function greet(name){
    if(name === "Johnny") {
      return "Hello, my love!";
    } else {
      return "Hello, " + name + "!";
    }
  }
  
console.log(greet("Johnny"))








function isDivisible(n, x, y) {
    if(n % x === 0 && n % y === 0) {
      return true
    } else {
      return false
    }
  }
  
  // console.log(isDivisible(3,3,4))
  // console.log(isDivisible(12,3,4))
  // console.log(isDivisible(8,3,4))
  // console.log(isDivisible(48,3,4))




  function makeNegative(num) {
    if(num <= 0) {
      return num * 1
    } else {
      return num * -1
    }
  }
  
  // console.log(makeNegative(1))
  // console.log(makeNegative(-5))
  // console.log(makeNegative(0))
  // console.log(makeNegative(0.12))
  






  function findSmallestInt(args) {
    const order = args.sort((a, b) => a - b)
    return order[0]
    
    // return Math.min(...args)
  }
  
  
  // console.log(findSmallestInt([34, 15, 88, 2]))
  // console.log(findSmallestInt([34, -345, -1, 100]))





  var summation = function (num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum = sum + i
      // console.log(i)
      // console.log(sum)
    }
    return sum
  }
  
  // function summation(num) {
  //   return num * (num + 1) / 2
    
  // }
  
  // console.log(summation(8))




  function getAverage2(marks) {
    let total = 0;
    for(let i = 0; i < marks.length; i++) {
      total = total + marks[i]
    }
  
    return Math.floor(total / marks.length);
  }
  
  
  // console.log(getAverage2([2, 2, 2, 2]))
  // console.log(getAverage2([1, 2, 3, 4, 5]))
  // console.log(getAverage2([1, 1, 1, 1, 1, 1, 1, 2]))
  



  const rps = (p1, p2) => {
    if(p1 === p2) {
      return "Draw!"
    } else if (p1 === "rock" && p2 === "scissors") {
      return "Player 1 wins!"
    } else if (p1 === "scissors" && p2 === "paper") {
      return "Player 1 wins!"
    } else if (p1 === "paper" && p2 === "rock") {
      return "Player 1 wins!"
    } else {
      return "Player 2 wins!"
    }
  };
  
  // console.log(rps("paper", "scissors"))




  function removeChar(str){
    let splitting = str.split('')
    splitting.pop()
    splitting.shift()
    return splitting.join('')
   };
  
   
  // console.log(removeChar("Steven")) 
  





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






  function basicOp(operation, value1, value2) {
    if (operation === "+") {
      return value1 + value2
    } else if (operation === "-") {
      return value1 - value2
    } else if (operation === "*") {
      return value1 * value2
    } else if (operation === "/") {
      return value1 / value2
    }
  }
  
  // console.log(basicOp('+', 4, 7))
  // console.log(basicOp('-', 15, 18))
  // console.log(basicOp('*', 5, 5))
  // console.log(basicOp('/', 49, 7))





  function repeatStr (n, s) {
    let starterString = ''
    for(let i = 0; i < n; i++) {
      starterString = starterString + s
    }
    return starterString
  }
  
  
  console.log(repeatStr(6, 'I'))
  console.log(repeatStr(5, 'Hello'))














  // Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?



var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};

// console.log(twoSum([2, 7, 11, 15], 9))
// console.log(twoSum([2, 7, 11, 15], 22))
// console.log(twoSum([2, 7, 11, 15], 26))
// console.log(twoSum([2, 7, 11, 15], 17))