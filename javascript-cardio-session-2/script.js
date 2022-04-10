// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// If more than one longest word, put into an array
// ex. longestWord('Hello, my name is Brad') === 'hello'
// ex. longestWord('Hello there, my name is Brad') === ['hello', 'there']

function longestWord(sen) {
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

console.log(longestWord('Hello, my name is Brad'))
console.log(longestWord('Hello there, my name is Brad'))