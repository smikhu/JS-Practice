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

console.log(evenOrOdd(6))

const evenOrOdd2 = num => num % 2 === 0 ? 'Even' : 'Odd'

console.log(evenOrOdd2(7))







const arrayOfSheep = (sheeps) => {
    let countedSheep = 0;

    sheeps.filter((sheep) => {
        if(sheep === true) {
            countedSheep++
        }
    })
    return countedSheep;
}


console.log(arrayOfSheep([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ]))