// Finding even or odd numbers using modulus 

function even_or_odd(number) {
    if(number % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

console.log(even_or_odd(1000))


function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
}

console.log(even_or_odd(999))