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

console.log(sortAges)


const sortAges2 = ages.sort((a, b) => a - b);

console.log(sortAges2)


// reduce
