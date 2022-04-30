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



// 