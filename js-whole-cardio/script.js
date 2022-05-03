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

console.log(twoNum(50, 50))
console.log(twoNum(100, 50))
console.log(twoNum(50, 100))
console.log(twoNum(42, 32))
console.log(twoNum(10, 1))
console.log(twoNum(70, 30))
console.log(twoNum(65, 33))


const twoNum2 = (num1, num2) => {
    return (num1 + num2 === 100 || num1 == 100 || num2 === 100 ? true : false)
}

console.log(twoNum2(63, 37))
console.log(twoNum2(100, 37))
console.log(twoNum2(63, 100))
console.log(twoNum2(63, 3))
console.log(twoNum2(23, 56))



// Write a JS program to get the extension of a filename.

const getFileExtension = (str) => {
    return str.split('.')[1]
}

console.log(getFileExtension('index.html'))
console.log(getFileExtension('styles.css'))
console.log(getFileExtension('script.js'))


const getFileExtension2 = (str) => {
    return str.slice(str.lastIndexOf('.'))
}

console.log(getFileExtension2('index.html'))
console.log(getFileExtension2('styles.css'))
console.log(getFileExtension2('script.js'))
console.log(getFileExtension2('webpack.config.jpeg'))



// Write a JS program to replace every character in a given string with the character following it in the alphabet.

const moveCharsForward = (str) => 
    str
    .split('')
    .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
    .join('');

console.log(moveCharsForward('abcde'))


// Write a JS program to get the current date. expected output - mm-dd-yyyy

const formatDate = (date = new Date()) => {
    const days = date.getDate() + 1;
    const months = date.getMonth() + 1;
    const years = date.getFullYear();
    return `${days}/${months}/${years}`
}

console.log(formatDate())



// Write a JS program to create a new string adding "New!" in front of a given string. If the given string begins with "New!" already then return the original string.

const addNew = (str) => {
    if(str.indexOf('New!') === 0) {
        return str
    } else {
        return `New! ${str}`
    }
}

console.log(addNew('New! Offers'))
console.log(addNew('Offers'))
console.log(addNew('Old! Offers'))
console.log(addNew('New! Old! Offers'))



const addNew2 = (str) => 
    str.indexOf('New') === 0 ? str : `New ${str}`;


console.log(addNew2('New! Offers'))
console.log(addNew2('Offers'))
console.log(addNew2('Old! Offers'))
console.log(addNew2('New! Old! Offers'))