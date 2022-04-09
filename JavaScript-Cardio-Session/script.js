// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
    const splitting = str.split('')
    console.log(splitting)
    const reverse = splitting.reverse()
    console.log(reverse)
    const joining = reverse.join('')
    return joining
}

console.log(reverseString('hello'))