// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
    console.log(str)
    const splitting = str.split('')
    console.log(splitting)
    const reverse = splitting.reverse()
    console.log(reverse)
    const joining = reverse.join('')
    return joining
}

// console.log(reverseString('hello'))


function reverseString2(str) {
    let revString = ''
    for (let i = str.length - 1; i >= 0; i--) {
        revString = revString + str[i];
    }
    return revString
}

// console.log(reverseString2('hello'))


function reverseString3(str) {
    let revString = ''
    for (let i of str) {
        // console.log(i)
        revString = i + revString;
        // console.log(revString)
    }
    return revString;
}

// console.log(reverseString3('hello'))


function reverseString4(str) {
    let revString = '';
    str.split('').forEach(function(char) {
        console.log(char)
        revString = char + revString;
        
    })
    return revString
}

// console.log(reverseString4('hello'))

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and flase if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') === false

function isPalindrome(str) {
    console.log(str)
    let splitting = str.split('')
    console.log(splitting)
    let reverse = splitting.reverse()
    console.log(reverse)
    let joining = reverse.join('')
    console.log(joining)

    if (joining == str) { 
        return "is a palindrome!"
    } else {
        return "not a palindrome!"
    }

}

// console.log(isPalindrome('racecar'))


function isPalindrome2(str) {
    let revString = str.split('').reverse().join('')
    return revString === str;
}

// console.log(isPalindrome2('doodle'))




// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
    const revString = int.toString().split('').reverse().join('')
    return parseInt(revString) * Math.sign(int)
}   

// console.log(reverseInt('-9876'))



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalzed
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

function capitalizeLetters(str) {
    let splitting = str.split(' ')
    console.log(splitting)
    for (let i = 0; i < splitting.length; i++) {
        splitting[i] = splitting[i][0].toUpperCase() + splitting[i].substr(1)
        
    }
    return splitting.join(' ')
}

// console.log(capitalizeLetters('i love javascript'))


function capitalizeLetters2(str) {
    let strArr = str.toLowerCase().split(' ')
    console.log(strArr)

    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1)
    }

    return strArr.join(' ')
}

// console.log(capitalizeLetters2('i lOvE jAvAsCrIpT'))


function capitalizeLetters3(str) {
    return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' ')
}

// console.log(capitalizeLetters3('i loVe javAscRipt'))




function capitalizeLetters4(str) {
    return str.replace(/\b[a-z]/gi, char => char.toUpperCase());
}

// console.log(capitalizeLetters('i love javascript'))



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

function maxCharacter(str) {
    let charMap = {};
    let maxNum = 0;
    let maxChar = '';

    str.split('').forEach(function(char) {
        if(charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1
        }
    })

    for(let char in charMap) {
        if(charMap[char] > maxNum) {
            maxNum = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

// console.log(maxCharacter('javascript'))



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        // console.log(i)
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else { 
            console.log(i)
        }
    }
        
}

console.log(fizzBuzz())