// Finding even or odd numbers using modulus 

function even_or_odd(number) {
    if(number % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

console.log(even_or_odd(1000))


function even_or_odd2(number) {
    return number % 2 === 0 ? "Even" : "Odd"
}

console.log(even_or_odd2("999"))

// Return the number (count) of vowels in the given string. We will consider a,e,i,o,u as vowels for this problem (but not y). The input string will only consists of lower case letters and/or spaces.

function getCount(str) {
    let vowelsCount = 0;
    let vowels = ["a", "e", "i", "o", "u"]
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if(str[i] === vowels[j]) {
                vowelsCount++
            }
        }
    }
    return vowelsCount;
}

console.log(getCount("alligator"));
console.log(getCount("jaguar"));
console.log(getCount("lynx"));

function getCount2(str) {
    let vowelsCount = 0;
    let arr = str.split("")
    for(let i = 0; i < arr.length; i++) {
        switch(arr[i]) {
            case "a":
            case "A":
                vowelsCount++;
                break;
            case "e":
            case "E":
                vowelsCount++;
                break;
            case "i":
            case "I":
                vowelsCount++;
                break;
            case "o":
            case "O":
                vowelsCount++;
                break;
            case "u":
            case "U":
                vowelsCount++;
        }
    }
    return vowelsCount;
}

console.log(getCount2("japan"))
console.log(getCount2("new zealand"))
console.log(getCount2("Iraq"))