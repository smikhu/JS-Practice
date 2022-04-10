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

// console.log(longestWord('Hello, my name is Brad'))
// console.log(longestWord('Hello there, my name is Brad'))


// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6], [7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6], [7]]

function chunkArray(arr, len) {
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

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3))
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2))




function chunkArray2(arr, len) {
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

// console.log(chunkArray2([1, 2, 3, 4, 5, 6, 7], 3))
// console.log(chunkArray2([1, 2, 3, 4, 5, 6, 7], 2))






// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]


function flattenArray(arrays) {
    return arrays.reduce(function(a, b) {
        return a.concat(b)
    })
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
    return formatStr(str1) === formatStr(str2)
}


// Helper function
function formatStr(str) {
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('')
}

console.log(isAnagram('elbow', 'below'))
console.log(isAnagram('Dormitory', 'dirty room##'))





// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'


function letterChanges(str) {
    let newStr = str.toLowerCase().replace(/[a-z]/gi, function(char) {
        if (char === 'z' || char === 'Z') {
            return 'a';
        } else {
            return String.fromCharCode(char.charCodeAt() + 1)
        }
    })

    newStr = newStr.replace(/a|e|i|o|u/gi, function(vowel) {
        return vowel.toUpperCase()
    })

    return newStr
}

console.log(letterChanges('Hello There'))