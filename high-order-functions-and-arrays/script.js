const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];







//    for(let i = 0; i < companies.length; i++) {
//     console.log(companies[i])
//    }


// forEach

companies.forEach(function(company) {
    // console.log(company)
})

companies.forEach(function(company, index, companies) {
    // console.log(company.category)
    // console.log(index)
    // console.log(companies)
})

companies.forEach(company => {
    // console.log(company)
})






// filter

// GET 21 AND OLDER

let canDrink = [];

for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 21) {
        canDrink.push(ages[i])
    }
}

// console.log(canDrink)


let canDrink2 = ages.filter(function(age) {
    if (age >= 21) {
        return true;
    } else {
        return false;
    }
})

// console.log(canDrink2)


let canDrink3 = ages.filter(age => age >= 21 ? true : false)

// console.log(canDrink3)


// Filter retail companies

let retail = companies.filter(function(company) {
    if (company.category === "Retail") {
        return true
    }
})

// console.log(retail)

let retailCompanies = companies.filter(company => company.category === "Retail")

// console.log(retailCompanies)


// Filter all companies that started in the 80's

let companiesYear = companies.filter(function(company) {
    if (company.start >= 1980 && company.start <= 1989) {
        return true;
    }
})

// console.log(companiesYear)


let companiesYear2 = companies.filter(company => company.start >= 1980 && company.start <= 1989)

// console.log(companiesYear2)


// Filter companies that lasted at least 10 years

let lastingCompanies = companies.filter(function(company) {
    if (company.end - company.start >= 10) {
        return true;
    }
})

// console.log(lastingCompanies)


let lastingCompanies2 = companies.filter(company => company.end - company.start >= 10)

// console.log(lastingCompanies2)





// map

// Create array of company names

let companyNames = companies.map(function(company) {
    return company.name;
})

console.log(companyNames)




let companyNames2 = companies.map(company => company.name)

console.log(companyNames2)





let testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`
)

console.log(testMap)



// square root of ages

let agesSquare = ages.map(age => Math.sqrt(age))

console.log(agesSquare)





let agesSquare2 = ages
.map(age => Math.sqrt(age))
.map(age => age * 2)

console.log(agesSquare2)





let agesTimesTwo = ages.map(age => age * 2)

console.log(agesTimesTwo)









// sort

