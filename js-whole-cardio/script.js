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