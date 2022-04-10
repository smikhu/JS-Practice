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

console.log(chunkArray2([1, 2, 3, 4, 5, 6, 7], 3))
console.log(chunkArray2([1, 2, 3, 4, 5, 6, 7], 2))