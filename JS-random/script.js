const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach
for (let i = 0; i < companies.length; i++) {
  // console.log(companies[i])
}

companies.forEach(function (company, index, companies) {
  //   console.log(company);
});







// filter
const twentyOneOrOlder = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    twentyOneOrOlder.push(ages[i]);
  }
}

// console.log(twentyOneOrOlder)

const twentyOneOrOlder2 = ages.filter(function (age, index, ages) {
  if (age >= 21) {
    return true;
  }
});

// console.log(twentyOneOrOlder2);


const twentyOneOrOlder3 = ages.filter(age => age >= 21);

// console.log(twentyOneOrOlder3)


const retailCompanies = companies.filter(function(company, index, companies) {
    if(company.category === 'Retail') {
        return true;
    }
})

// console.log(retailCompanies)


const retailCompanies2 = companies.filter(company => company.category === 'Retail');

// console.log(retailCompanies2)


const eightiesCompanies = companies.filter(function(company) {
    if(company.start >= '1980' && company.start <= '1989') {
        return true;
    }
})

// console.log(eightiesCompanies)

const eightiesCompanies2 = companies.filter(company => company.start >= '1980' && company.start <= '1989');

// console.log(eightiesCompanies2)


const lastedTenYears = companies.filter(function(company) {
    if(company.end - company.start >= 10) {
        return true;
    }
})

// console.log(lastedTenYears)

const lastedTenYears2 = companies.filter(company => (company.end - company.start >= 10));

// console.log(lastedTenYears2)






// map
const companyNames = companies.map(function(company) {
    return `${company.name} lasted from ${company.start} to ${company.end}`;
})

// console.log(companyNames)

const companyNames2 = companies.map(company => `${company.name} lasted from ${company.start} to ${company.end}`)

// console.log(companyNames2)

const squareRoot = ages.map(age => Math.sqrt(age));

// console.log(squareRoot)

const agesTimesTwo = ages.map(age => age * 2);

// console.log(agesTimesTwo)

const ageMap = ages.map(age => Math.sqrt(age)).map(age => age * 2);

// console.log(ageMap)






// sort
const sortedCompanies = companies.sort(function(c1, c2) {
    if(c1.start > c2.start) {
        return 1;
    } else {
        return -1;
    }
})

// console.log(sortedCompanies)


const sortedCompanies2 = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1));

// console.log(sortedCompanies2)

const sortAges = ages.sort(function(a1, a2) {
    return a1 - a2;
})

// console.log(sortAges)


const sortAges2 = ages.sort((a, b) => a - b);

// console.log(sortAges2)





// reduce

let ageSum = 0;

for(let i = 0; i < ages.length; i++) {
    ageSum += ages[i]
};

// console.log(ageSum)


const ageSumTotal = ages.reduce((currentTotal, age) => {
    return currentTotal + age
}, 0);

// console.log(ageSumTotal)

const ageSumTotal2 = ages.reduce((total, age) => total + age, 0);

// console.log(ageSumTotal2)


const companiesTotal = companies.reduce((total, company) => company.end - company.start + total, 0);

// console.log(companiesTotal)


// Combine Methods

const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((total, age) => total + age, 0)

// console.log(combined)











const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];


const sortByMass = characters.sort((a, b) => a.mass - b.mass);

// console.log(sortByMass)


const sortByHeight = characters.sort((a, b) => a.height - b.height);

// console.log(sortByHeight);


const sortByName = characters.sort((a, b) => {
    if(a.name > b.name) {
        return 1
    } else {
        return -1
    }
})

// console.log(sortByName)


const sortByGender = characters.sort((a, b) => {
    if(a.gender === 'female') {
        return -1
    } else {
        return 1
    }
})

// console.log(sortByGender)



let list = ['Steven', 'Sarah', 'Alex', 'David', 'Rudi', 'Imaldo', 'Stavri', 'Stevel', 'amanda']

list.sort();

// console.log(list)



let vals = [{
    x: 2,
    y: 10,
    z: 25
}, {
    x: 5,
    y: 6,
    z: 16
}, {
    x: 7,
    y: 7,
    z: 21
}];

function compare(a, b) {
    return a.z - b.z
}

vals.sort(compare)

// console.log(vals)


const finalResults = vals.sort((a, b) => a.z - b.z);

// console.log(finalResults);


const numbers = [2, 5, 100, 4];

const sortedNumbers = numbers.sort((a, b) => {
    return a - b
})

// console.log(sortedNumbers)


const items = [
    { name: 'Bike', price: 100},
    { name: 'TV', price: 200},
    { name: 'Album', price: 10},
    { name: 'Book', price: 5},
    { name: 'Phone', price: 500},
    { name: 'Computer', price: 1000},
    { name: 'Keyboard', price: 25},
];


const lessThan100 = items.filter(item => item.price <= 100);

// console.log(lessThan100)


const everyItemName = items.map(item => item.name);

// console.log(everyItemName)

const foundItem = items.find(item => item.name === 'Computer');

// console.log(foundItem)

// items.forEach(item => console.log(item.name));

const hasInexpensiveItems = items.some(item => item.price > 1250);

// console.log(hasInexpensiveItems)

const hasInexpensiveItems2 = items.every(item => item.price <= 1000);

// console.log(hasInexpensiveItems2)





let sum = 0;

for(let i = 0; i < items.length; i++) {
    sum += items[i].price
}

// console.log(sum)


const totalSum = items.reduce((currentTotal, item) => {
    return currentTotal + item.price
}, 0)

// console.log(totalSum)

const numberedItems = [1, 2, 3, 4, 5];

const includesTwo = numberedItems.includes(2);

// console.log(includesTwo);





// Mon - 7AM
// Tue - Thurs - 4AM
// Fri - 9AM
// Sat - Sun - 8AM

// let day = 'Friday'
//     switch(day) {
//         case 'Sunday':
//             console.log("Wake up, it's 8 AM!")
//             break;
//         case 'Monday':
//             console.log("Wake up, it's 7 AM!")
//             break;
//         case 'Tuesday':
//             console.log("Wake up, it's 4 AM!")
//             break;
//         case 'Wednesday':
//             console.log("Wake up, it's 4 AM!")
//             break;
//         case 'Thursday':
//             console.log("Wake up, it's 4 AM!")
//             break;
//         case 'Friday':
//             console.log("Wake up, it's 9 AM!")
//             break;
//         case 'Saturday':
//             console.log("Wake up, it's 8 AM!")
//             break;    
//     }







function solution(str) {
    // let split = str.split('')
    // console.log(split)
    // let reverse = split.reverse()
    // console.log(reverse)
    // let complete = reverse.join('')
    // return complete

    return str.split('').reverse().join('')
}

// console.log(solution('world'))

const solution2 = (str) => str.split('').reverse().join('');

// console.log(solution2('elephant'))


const solution3 = (str) => {
    const splitting = [...str];
    const reversing = splitting.reverse();
    const final = reversing.join('');
    return final
}

// console.log(solution3('giraffe'))

const solution4 = str => [...str].reverse().join('');

// console.log(solution4('monkey'))


const evenOrOdd = (num) => {
    if(num % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

// console.log(evenOrOdd(6))

const evenOrOdd2 = num => num % 2 === 0 ? 'Even' : 'Odd'

// console.log(evenOrOdd2(7))







const arrayOfSheep = (sheeps) => {
    let countedSheep = 0;

    sheeps.filter((sheep) => {
        if(sheep === true) {
            countedSheep++
        }
    })
    return countedSheep;
}


// console.log(arrayOfSheep([true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true ]))




const getCount = (str) => {
    let count = 0;

    let split = str.split('')
    // console.log(split)

    for(let i = 0; i < split.length; i++) {
        if (split[i] === 'a') {
            count++
        } else if (split[i] === 'e') {
            count++
        } else if (split[i] === 'i') {
            count++
        } else if (split[i] === 'o') {
            count++
        } else if (split[i] === 'u') {
            count++
        }
    }
    return count
}



// console.log(getCount('elephants are beautiful'))


const getCount2 = (str) => {
    let vowelsCount = 0;

    let split = str.split('')
    // console.log(split)

    for(let i = 0; i < split.length; i++) {
        switch(split[i]) {
            case 'a':
            case 'A':
            case 'e':
            case 'E':
            case 'i':
            case 'I':
            case 'o':
            case 'O':
            case 'u':
            case 'U':
                vowelsCount++
        }
    }
    return vowelsCount
}

// console.log(getCount2('elephants are beautiful CREATURES'))


const getCount3 = (str) => {
    let vowelsCount = 0;

    let split = str.toLowerCase().split('')
    split.filter(function(letter) {
        if (letter === 'a') {
            vowelsCount++
        } else if (letter === 'e') {
            vowelsCount++
        } else if (letter === 'i') {
            vowelsCount++
        } else if (letter === 'o') {
            vowelsCount++
        } else if (letter === 'u') {
            vowelsCount++
        }
    })
    return vowelsCount
}

// console.log(getCount3('elephants are beautiful CREATURES'))



const getCount4 = (str) => {
    let vowelCount = 0;
    let arr = str.split('');
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u') {
            vowelCount++
        }
    }
    return vowelCount;
}

// console.log(getCount4('abracadabra elepehant'))




const isDivisible = (n, x, y) => {
    if (n % x === 0 && n % y === 0) {
        return true;
    } else {
        return false;
    }
}

// console.log(isDivisible(12, 3, 4))


const isDivisible2 = (n, x, y) => {
    return n % x === 0 && n % y === 0 ? true : false
}

// console.log(isDivisible2(50, 25, 5))


const isDivisible3 = (n, ...dividers) => {
    return dividers.every(divider => n % divider === 0);
}

// console.log(isDivisible3(12, 3, 4, 6, 2, 1))
// console.log(isDivisible3(12, 3, 4, 6, 2, 1, 5))




const swCharacters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 192,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];


//EVERY
const allBlueEyes = swCharacters.every(character => character.eye_color === 'blue')

// console.log(allBlueEyes);



const massMoreThan40 = swCharacters.every(character => character.mass > 40);

// console.log(massMoreThan40);


const shorterThan200 = swCharacters.every(character => character.height <= 200);

// console.log(shorterThan200)


const allMale = swCharacters.every(character => character.gender === 'male');


// console.log(allMale)

//FILTER
const greaterThan100 = swCharacters.filter(character => character.mass > 100);

// console.log(greaterThan100);

const lessThan200 = swCharacters.filter(character => character.height < 200);

// console.log(lessThan200);


const allMaleCharacters = swCharacters.filter(character => character.gender === 'male');

// console.log(allMaleCharacters);

const allFemaleCharacters = swCharacters.filter(character => character.gender === 'female');

// console.log(allFemaleCharacters);


//SORT
const sortByNames = swCharacters.sort((a, b) => {
    if(a.name > b.name) {
        return 1
    } else {
        return -1
    }
})

// console.log(sortByNames)


const massSort = swCharacters.sort((a, b) => {
    return a.mass - b.mass
})

// console.log(massSort)


const heightSort = swCharacters.sort((a, b) => {
    return a.height - b.height
})

// console.log(heightSort)


const genderSort = swCharacters.sort((a, b) => {
    if(a.gender === 'female') {
        return -1
    } else {
        return 1
    }
})

// console.log(genderSort)

//SOME
const someMaleCharacters = swCharacters.some(character => character.gender === 'male');

// console.log(someMaleCharacters)


const someBlueEyes = swCharacters.some(character => character.eye_color === 'blue');

// console.log(someBlueEyes)


const tallerThan200 = swCharacters.some(character => character.height > 200)

// console.log(tallerThan200)


const massLessThan50 = swCharacters.some(character => character.mass < 50)

// console.log(massLessThan50)



//REDUCE
const totalMass = swCharacters.reduce((acc, cur) => {
    return acc + cur.mass
}, 0);

// console.log(totalMass)


const totalHeight = swCharacters.reduce((total, character) => {
    return total + character.height
}, 0)

// console.log(totalHeight)



const totalCharactersInCharacterName = swCharacters.reduce((acc, cur) => {
    return acc + cur.name.length
}, 0)

// console.log(totalCharactersInCharacterName)




const charactersByEyeColor = characters.reduce((acc, cur) => {
    const color = cur.eye_color;
    if(acc[color]) {
        acc[color]++;
    } else {
        acc[color] = 1
    }
    return acc
}, {})

// console.log(charactersByEyeColor)




// const makeNegative = (num) => {
//     if (num > 0) {
//         return num * -1 
//     } else {
//         return num
//     }
// }

// console.log(makeNegative(5))


// const makeNegative2 = num => num < 0 ? num : -num

// console.log(makeNegative2(10))



const findSmallestInt = (args) => {
    args.sort((a, b) => {
        return a - b
    })
    return args[0]
}
    
// console.log(findSmallestInt([5, 10, 20, 3, 45, 5, 2, 1, -2, -8214, -4, 56, 84772, -9]))



const findSmallestInt2 = (args) => {

    let num;

    for(let i = 0; i < args.length; i++) {
        
        const newNum = args[i];
        
        if(i === 0) {
            num = newNum
        }

        if(newNum < num) {
            num = newNum;
        }
    }
    return num
}

// console.log(findSmallestInt2([5, 10, 20, 3, 45, 5, 2, 1, -2, -8214, -4, 56, 84772, -9]))


const findSmallestInt3 = (args) => {
    return Math.min(...args)
}

// console.log(findSmallestInt3([5, 10, 20, 3, 45, 5, 2, 1, -2, -8214, -4, 56, 84772, -9]))




const summation = (num) => {
    let sum = 0;
    for(let i = 1; i <= num; i++) {
        sum = sum + i
        console.log(sum)
    }
    return sum
}


// console.log(summation(100))


const summation2 = n => n * (n + 1) / 2;

// console.log(summation2(34))



const randomNumbers  = ['100','300','400','60','40'];

const sortingRandomNumbers = randomNumbers.reduce((a, b) => {
    return parseInt(a) + parseInt(b)
}, 0)

// console.log(sortingRandomNumbers)




const getAverage = (marks) => {
    let sum = 0;
    let count = marks.length

    for(let i = 0; i < count; i++) {
        sum = sum + marks[i]
    }

    let average = sum / count
    return Math.floor(average)
}

// console.log(getAverage([1,2,3,4,5,6,7,8,9,10]))




const getAverage2 = (marks) => {
    let total = 0;

    for(let i = 0; i < marks.length; i++) {
        total = total + marks[i]
    }
    
    return Math.floor(total / marks.length)
}

// console.log(getAverage2([1,2,3,4,5,6,7,8,9,10,20]))




const getAverage3 = (marks) => {
    return Math.floor(marks.reduce((a, b) => a + b) / marks.length);
}

// console.log(getAverage3([2,4,6,8,10,12,14,16,18,20]))




// ROCK, PAPER, SCISSORS


const rps = (p1, p2) => {
    if(p1 === 'Rock' && p2 === 'Scissors') {
        return 'Player 1 wins!'
    } else if (p1 === 'Paper' && p2 === 'Rock') {
        return 'Player 1 wins!'
    } else if (p1 === 'Scissors' && p2 === 'Paper') {
        return 'Player 1 wins!'
    } else if (p1 === p2) {
        return 'Draw!'
    } else {
        return 'Player 2 wins!'
    }
}

// console.log(rps('Rock', 'Scissors'))
// console.log(rps('Paper', 'Rock'))
// console.log(rps('Scissors', 'Paper'))
// console.log(rps('Rock', 'Rock'))
// console.log(rps('Scissors', 'Scissors'))
// console.log(rps('Paper', 'Paper'))
// console.log(rps('Rock', 'Paper'))
// console.log(rps('Paper', 'Scissors'))
// console.log(rps('Scissors', 'Rock'))



const winsOver = {
    'Rock' : 'Scissors',
    'Paper' : 'Rock',
    'Scissors' : 'Paper'
}

const rps2 = (p1, p2) => {
    if (p1 === p2) {
        return 'Draw'
    } else if (winsOver[p1] === p2) {
        return 'Player 1 Won!'
    } else {
        return 'Player 2 Won!'
    }
}


// console.log(rps2('Rock', 'Scissors'))
// console.log(rps2('Paper', 'Rock'))
// console.log(rps2('Scissors', 'Paper'))
// console.log(rps2('Rock', 'Rock'))
// console.log(rps2('Scissors', 'Scissors'))
// console.log(rps2('Paper', 'Paper'))
// console.log(rps2('Rock', 'Paper'))
// console.log(rps2('Paper', 'Scissors'))
// console.log(rps2('Scissors', 'Rock'))







const digits = [5, 20, 40, 60, 80, 100]

let averageNumber = Math.floor(digits.reduce((a, b) => a + b) / digits.length)

// console.log(averageNumber)




const removeChar = (str) => {
    return str.slice(1, -1)
}

// console.log(removeChar('Steven'))
// console.log(removeChar('elephant'))
// console.log(removeChar('Steven Mikhu'))


const removeChar2 = (str) => {
    return str.substring(1, str.length - 1)
}

// console.log(removeChar2('Steven'))
// console.log(removeChar2('elephant'))
// console.log(removeChar2('Steven Mikhu'))


const removeChar3 = (str) => {
    let splitting = str.split('')
    splitting.pop()
    splitting.shift()
    return splitting.join('')
}

// console.log(removeChar3('Steven'))
// console.log(removeChar3('elephant'))
// console.log(removeChar3('Steven Mikhu'))



const positiveSum = (arr) => {
    let positive = [];
    let negative = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] * 1 < 0) {
            negative.push(arr[i])
        } else {
            positive.push(arr[i])
        }
    }
    return positive.reduce((a, b) => a + b, 0)
}

// console.log(positiveSum([1,2,3,4,5]))
// console.log(positiveSum([1,-2,3,4,5]))
// console.log(positiveSum([-1,-2,-3,-4,-5]))
// console.log(positiveSum([-1,2,3,4,-5]))


const positiveSum2 = (arr) => {
    return arr.filter(num => num > 0).reduce((a, b) => a + b, 0)
}

// console.log(positiveSum2([1,2,3,4,5]))
// console.log(positiveSum2([1,-2,3,4,5]))
// console.log(positiveSum2([-1,-2,-3,-4,-5, -20, 0, -21]))
// console.log(positiveSum2([-1,2,3,4,-5, 10, 20]))


const positiveSum3 = (arr) => {
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            sum = sum + arr[i]
        }
    }
    return sum
}


// console.log(positiveSum3([1,2,3,4,5]))
// console.log(positiveSum3([1,-2,3,4,5]))
// console.log(positiveSum3([-1,-2,-3,-4,-5, -20, 0, -21]))
// console.log(positiveSum3([-1,2,3,4,-5, 10, 20]))




const basicOp = (operation, value1, value2) => {
    if(operation === '+') {
        return value1 + value2
    } else if(operation === '-') {
        return value1 - value2
    } else if(operation === '*') {
        return value1 * value2
    } else if(operation === '/') {
        return value1 / value2
    }
}

// console.log(basicOp('+', 4, 7))
// console.log(basicOp('-', 15, 18))
// console.log(basicOp('*', 5, 5))
// console.log(basicOp('/', 49, 7))


const basicOp2 = (operation, value1, value2) => {
    switch(operation) {
        case '+':
            return value1 + value2
        case '-':
            return value1 - value2
        case '*':
            return value1 * value2
        case '/':
            return value1 / value2
        default:
            return 'Operation must be one of + - * /'
    }
}

// console.log(basicOp2('+', 4, 7))
// console.log(basicOp2('-', 15, 18))
// console.log(basicOp2('*', 5, 5))
// console.log(basicOp2('/', 49, 7))
// console.log(basicOp2('#', 49, 7))


const basicOp3 = (operation, value1, value2) => {
    return eval(value1 + operation + value2)
}

// console.log(basicOp3('+', 4, 7))
// console.log(basicOp3('-', 15, 18))
// console.log(basicOp3('*', 5, 5))
// console.log(basicOp3('/', 49, 7))


const repeatStr = (numberOfRepeats, str) => {
    let starterString = ''

    for(let i = 0; i < numberOfRepeats; i++) {
        starterString += str
    }
    return starterString
}

// console.log(repeatStr(3, 'S'))
// console.log(repeatStr(5, '#'))
// console.log(repeatStr(23, 'a'))
// console.log(repeatStr(7, 'haha'))


const repeatStr2 = (numberOfRepeats, str) => {
    return str.repeat(numberOfRepeats);
}


// console.log(repeatStr2(3, 'S'))
// console.log(repeatStr2(5, '#'))
// console.log(repeatStr2(23, 'a'))
// console.log(repeatStr2(7, 'haha'))


const stringToArray = (str) => {
    return str.split(' ')
}

// console.log(stringToArray('I love arrays they are my favorite'))
// console.log(stringToArray('Steven Mikhu'))




const noSpace = (x) => {
    let splitting = x.split(' ')
    return splitting.join('')
}

// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))
// console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'))
// console.log(noSpace('8aaaaa dddd r     '))



const noSpace2 = (x) => {
    return x.replace(/\s/g, '')
}


// console.log(noSpace2('8 j 8   mBliB8g  imjB8B8  jl  B'))
// console.log(noSpace2('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'))
// console.log(noSpace2('8aaaaa dddd r     '))



const maps = (x) => {
    let newArr = []
    for(let i = 0; i < x.length; i++) {
        newArr.push(x[i] * 2)
    }
    
    return newArr;
}

// console.log(maps([1, 2, 3]))
// console.log(maps([2, 4, 6]))


const maps3 = (x) => {
    return x.map(num => num * 2)
}

// console.log(maps3([1, 2, 3]))
// console.log(maps3([2, 4, 6]))
// console.log(maps3([3, 6, 9]))




const hero = (bullets, dragons) => {
    if(bullets - dragons >= dragons) {
        return true;
    } else {
        return false;
    }
}

// console.log(hero(10, 5))
// console.log(hero(7, 4))
// console.log(hero(4, 5))
// console.log(hero(100, 40))
// console.log(hero(1500, 751))
// console.log(hero(0, 1))



const hero2 = (bullets, dragons) => {
    if(dragons * 2 <= bullets) {
        return true;
    } else {
        return false;
    }
}

// console.log(hero2(10, 5))
// console.log(hero2(7, 4))
// console.log(hero2(4, 5))
// console.log(hero2(100, 40))
// console.log(hero2(1500, 751))
// console.log(hero2(0, 1))


const hero3 = (bullets, dragons) => {
    return bullets / dragons >= 2
}


// console.log(hero3(10, 5))
// console.log(hero3(7, 4))
// console.log(hero3(4, 5))
// console.log(hero3(100, 40))
// console.log(hero3(1500, 751))
// console.log(hero3(0, 1))



const arrayPlusArray = (arr1, arr2) => {
    let firstArray = arr1.reduce((a, b) => a + b, 0)
    let secondArray = arr2.reduce((a, b) => a + b, 0)
    return firstArray + secondArray
}

// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))
// console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]))
// console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]))
// console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]))


const arrayPlusArray2 = (arr1, arr2) => {
    return arr1.concat(arr2).reduce((a, b) => a + b, 0)
}

// console.log(arrayPlusArray2([1, 2, 3], [4, 5, 6]))
// console.log(arrayPlusArray2([-1, -2, -3], [-4, -5, -6]))
// console.log(arrayPlusArray2([0, 0, 0], [4, 5, 6]))
// console.log(arrayPlusArray2([100, 200, 300], [400, 500, 600]))



const arrayPlusArray3 = (arr1, arr2) => {
    let result = 0;
    for(let i = 0; i < arr1.length; i+=1) {
        result += arr1[i] + arr2[i]
    }
    return result;
}

// console.log(arrayPlusArray3([1, 2, 3], [4, 5, 6]))
// console.log(arrayPlusArray3([-1, -2, -3], [-4, -5, -6]))
// console.log(arrayPlusArray3([0, 0, 0], [4, 5, 6]))
// console.log(arrayPlusArray3([100, 200, 300], [400, 500, 600]))


const arrayPlusArray4 = (arr1, arr2) => {
    let result = 0;
    for(let i = 0; i < arr1.length; i++) {
        result+= arr1[i]
    }
    for(let i = 0; i < arr2.length; i++) {
        result+= arr2[i]
    }
    return result;
}

// console.log(arrayPlusArray4([1, 2, 3], [4, 5, 6]))
// console.log(arrayPlusArray4([-1, -2, -3], [-4, -5, -6]))
// console.log(arrayPlusArray4([0, 0, 0], [4, 5, 6]))
// console.log(arrayPlusArray4([100, 200, 300], [400, 500, 600]))



const arrayPlusArray5 = (arr1, arr2, arr3) => {
    return arr1.concat(arr2).concat(arr3).reduce((a, b) => a + b, 0)
}

// console.log(arrayPlusArray5([1, 2, 3], [4, 5, 6], [7, 8, 9]))
// console.log(arrayPlusArray5([-1, -2, -3], [-4, -5, -6], [-7, -8, -9]))
// console.log(arrayPlusArray5([0, 0, 0], [4, 5, 6], [10, 15, 20]))
// console.log(arrayPlusArray5([100, 200, 300], [400, 500, 600], [700, 800, 900]))


const humanYearsCatYearsDogYear = (humanYears) => {
    if (humanYears === 1) {
        return [humanYears, 15, 15]
    }

    if (humanYears === 2) {
        return [humanYears, 24, 24]
    }

    const excessYears = humanYears - 2;
    const extraCatyears = excessYears * 4;
    const extraDogYears = excessYears * 5;

    return [humanYears, 24 + extraCatyears, 24 + extraDogYears];
}

// console.log(humanYearsCatYearsDogYear(10))



const randomNumbers2 = [5, 1, 3, 2, 6];

const filterEven = randomNumbers2.filter(x => x > 4)

console.log(filterEven);


const reduceNumbers = randomNumbers2.reduce((a, b) => a + b, 0)

console.log(reduceNumbers)

const maxNumber = randomNumbers2.reduce((a, b) => {
    if(a > b) {
        b = a
    }
    return b
});

console.log(maxNumber)



const users = [
    { firstName: "ashkay", lastName: "saini", age:26},
    { firstName: "donald", lastName: "trump", age:75},
    { firstName: "elon", lastName: "musk", age:50},
    { firstName: "deepika", lastName: "padukone", age:26},
];


const listOfFullNames = users.map((x) => {
    return (x.firstName + ' ' + x.lastName)
})

console.log(listOfFullNames)


const sameAge = users.reduce((acc, curr) => {
    if(acc[curr.age]) {
        acc[curr.age]++
    } else {
        acc[curr.age] = 1
    }

    return acc
}, {})

console.log(sameAge)


const lessThan30 = users
.filter(user => user.age < 30)
.map(user => user.firstName)

console.log(lessThan30)


const lessthan30UsingReduce = users.reduce((acc, curr) => {
    if(curr.age < 30) {
        acc.push(curr.firstName)
    }
    return acc    
}, [])

console.log(lessthan30UsingReduce)