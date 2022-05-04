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