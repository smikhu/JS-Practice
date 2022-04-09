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

console.log(reverseString4('hello'))

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

console.log(isPalindrome('racecar'))


function isPalindrome2(str) {
    let revString = str.split('').reverse().join('')
    return revString === str;
}

console.log(isPalindrome2('doodle'))




// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
    const revString = int.toString().split('').reverse().join('')
    return parseInt(revString) * Math.sign(int)
}   

console.log(reverseInt('-9876'))