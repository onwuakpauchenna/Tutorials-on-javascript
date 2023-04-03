"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'audio';
// const private = 534;
// const if = 23;  // all this three variables wont work, interface,private and if , because they are use in future javascript or in javascript, so they cant be used as variable
*/

/*
function logger() {
    console.log('my name is skertel');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitprocessor(apple, orange) {
    console.log(apple, orange);
    const juice = `juice with ${apple} apples and ${orange} oranges.`;
    return juice;
}

fruitprocessor(5, 0)
const applesjuice = fruitprocessor(5, 0);
console.log(applesjuice);
console.log(fruitprocessor(5, 0));

const appleOrangeJuice = fruitprocessor(2, 4);
console.log(appleOrangeJuice);

*/
/*
// FUNCTIONS DECLARATION
function calcAge1(birthyear) {
    return 2037 - birthyear;
}

const age1 = calcAge1(1991);
console.log(age1);

// FUNCTION EXPRESSION
const calcAge2 = function (birthyear) {
    return 2037 - birthyear;
}
const age2 = calcAge2(1991)
console.log(age2);
*/

/*
// FUNCTION EXPRESSION
const calcAge2 = function (birthyear) {
    return 2037 - birthyear;
}

// ARROW FUNCTION
const calcAge3 = birthyear => 2037 - birthyear;
const age3 = calcAge3(1991)
console.log(age3);

// const yearsUntilRetirement = birthyear => {
//     const age = 2037 - birthyear;
//     const retirement = 65 - age;
//     return retirement;
// }

// console.log(yearsUntilRetirement(1991));

const yearsUntilRetirement = (birthyear, firstName) => {
    const age = 2037 - birthyear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
} 

console.log(yearsUntilRetirement(1991, 'skertel'));

*/
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitprocessor(apples, oranges) {
    const applespieces = cutFruitPieces(apples);
    const orangepieces = cutFruitPieces(oranges);

    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

console.log(fruitprocessor(2, 3));
*/
/*
const calcAge = function (birthyear) {
    return 2037 - birthyear;
}
const yearsUntilRetirement = (birthyear, firstName) => {
    const age = 2037 - birthyear;
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1999, 'skertel'));
console.log(yearsUntilRetirement(1940, 'jonas'));
*/

/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

const scoreDolphins = calcAverage(44, 23, 71);
const scorekoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scorekoalas);

const checkwinner = function (avgdolphins, avgkoalas) {
    if (avgdolphins >= 2 * avgkoalas) {
        console.log(`dolphins win (${avgdolphins} vs ${avgkoalas})`);
    } else if (avgkoalas >= 2 * avgdolphins) {
        console.log(`koalas win (${avgkoalas} vs ${avgdolphins})`);
    } else {
        console.log(`no team wins...`);
    }
}

checkwinner(scoreDolphins, scorekoalas)
*/

/*
const friend1 = 'micheal';
const friends2 = 'steven';
const friends3 = 'steven';

const friends = ['micheal', 'steven', 'peter'];
console.log(friends);

const yearsss = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'jay';
console.log(friends);
// friends = ['bob', 'alice']

const FirstName = 'skertel';
const skertel = [FirstName, 'alberto', 2022 - 1991, 'teacher', friends];
console.log(skertel);
console.log(skertel.lenght);

//Exercise
const calcAge = function (birthyear) {
    return 2037 - birthyear
}
const years = [1990, 1967, 2002, 2010,];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[2]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[2]), calcAge(years[years.length - 1])];
console.log(age)
*/

/*
const friends = ['micheal', 'steven', 'peter'];


//ADDING ELEMENT
const newLength = friends.push('jay'); // adding element at the emd of the array
console.log(friends);
console.log(newLength)

friends.unshift('john'); // adding element at the begining of he array
console.log(friends)

// REMOVING ELEMENS
friends.pop(); // last
const popped = friends.pop();
console.log(popped);
console.log(friends)

friends.shift(); // first
console.log(friends);

console.log(friends.indexOf('steven'));
console.log(friends.indexOf('bob'));

console.log(friends.includes('steven'));
console.log(friends.includes('bob'));
*/
/*
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// const calcTip = bill => 50 && bill <= 300 ? bill * 0.15 : bill * 0.2

const bills = [125, 555, 44];
// tip1 = calcTip(bills[0])
// [tip1, tip2, tip3]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals); 
*/
/*
////////////////////////////////////////
//// introduction to objects

const skertelArray = [
    'skertel',
    'alberto',
    2023 - 1999,
    'footballer',
    ['large', 'maxwell', 'stanley']
]

const skertel = {
    firstName: 'skertel',
    lastName: 'alberto',
    age: 2023 - 19991,
    job: 'teacher',
    friends: ['large', 'maxwell', 'stanley']
}
*/

/* 
const skertel = {
    firstName: 'skertel',
    lastName: 'alberto',
    age: 2023 - 1999,
    job: 'teacher',
    friends: ['large', 'maxwell', 'stanley']
};
console.log(skertel);

console.log(skertel.firstName);
console.log(skertel['firstName']);

const nameKey = 'Name';
console.log(skertel['first' + nameKey])
console.log(skertel['last' + nameKey])

const interetedin = prompt('what do you want to know about jonas? choose between firstName, lastName, age, job, friends');

if (skertel[interetedin]) {
    console.log(skertel[interetedin]);
} else {
    console.log('wrong request! choose between firstName, lastName, age, job and friends');
}

skertel.location = 'nigeria'
skertel['twitter'] = '@albertoskertel';
console.log(skertel);

// Challenge
console.log(`${skertel.firstName} has ${skertel.friends.length} friends , and his best friend is called ${skertel.friends[0]}`);
*/
/*

const skertel = {
    firstName: 'skertel',
    lastName: 'alberto',
    birthYear: 1999,
    job: 'teacher',
    friends: ['large', 'maxwell', 'stanley'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2023 - birthYear
    // }

    // calcAge: function () {
    //     console.log(this)
    //     return 2023 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${skertel.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};


console.log(skertel.calcAge());
console.log(skertel.age)

// console.log(skertel['calcAge'](1991)); 

console.log(skertel.getSummary());

*/
/*
const mark = {
    fullName: 'markmiller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        mark.bmi = this.mass / this.height ** 2;
        return mark.bMi;
    }
}

const john = {
    fullName: 'johnSmith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMi (${mark.bmi}) is higher than ${john.fullName} BMI ${john.bmi}`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMi (${john.bmi}) is higher than ${mark.fullName} BMI ${mark.bmi}`);

}    
*/

/*
////////////////////////////////////////
// iteration: the for loop

// console.log('lifting weight repetition 1');
// console.log('lifting weight repetition 2');
// console.log('lifting weight repetition 3');
// console.log('lifting weight repetition 4');
// console.log('lifting weight repetition 5');
// console.log('lifting weight repetition 6');
// console.log('lifting weight repetition 7');
// console.log('lifting weight repetition 8');
// console.log('lifting weight repetition 19');
// console.log('lifting weight repetition 10');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`lifting weight repetition ${rep}`);
}*/

/*
////////////////////////////////////
/// looping arrays, breaking and continue
const skertel = [
    'skertel',
    'alberto',
    2023 - 1999,
    'footballer',
    ['large', 'maxwell', 'stanley'],
    true
];

const types = [];

// console.log(skertel[0]);
// console.log(skertel[1]);
// .....
// console.log(skertel[4]);
// skertel[5] does not exist

// for (let i = 0; i < 5; i++) {
//     console.log(skertel[i]);
// }
for (let i = 0; i < skertel.length; i++) {
    // Reading from jonas array
    console.log(skertel[i], typeof skertel[i]);

    // Filling types array
    // types[i] = typeof skertel[i];
    types.push(typeof skertel[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log('---ONLY STRINGS---')
for (let i = 0; i < skertel.length; i++) {
    if (typeof skertel[i] !== 'string') continue;

    console.log(skertel[i], typeof skertel[i]);
}

console.log('---BREAK WITH NUMBER---')
for (let i = 0; i < skertel.length; i++) {
    if (typeof skertel[i] === 'number') break;

    console.log(skertel[i], typeof skertel[i]);
}
*/

/*
const skertel = [
    'skertel',
    'alberto',
    2023 - 1999,
    'footballer',
    ['large', 'maxwell', 'stanley'],
    true
];

// 0, 1, ...., 4
// 4, 3, ...., 0

for (let i = skertel.length - 1; i >= 0; i--) {
    console.log(i, skertel[i])
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`exercise ${exercise}: lifting weight repitition ${rep}`);
    }
}

*/
/*
for (let rep = 1; rep <= 10; rep++) {
    console.log(`lifting weight repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: lifting weight repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`loop is about to end.....`)
}

*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }

  return sum / arr.length;
};

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));

// REVISION;
// const calclAverage = (a, b, c) => (a + b + c) / 3;
// const scoren Dolphins = calcAverage(85, 54, 41);
// const scorekoalas = calcAverage(23, 34, 27);

// const checkWinner = function(averageDolphins,averagekoalas) {
//     if(averageDolphins > 2 * averagekoalas) {
//         console.log(`dolphins wins ${averageDolphins} vs ${averagekoalas}`)
//     } else if(averagekoalas > 2 * averageDolphins) {
//         console.log(koalas wins ${averagekoalas} vs ${averageDolphins})
//     } else {
//         console.log(`no onw wins the race`)
//     }
// } 

// checkWinner (scoreDolphins, scorekoalas)



// const calcTip = function(bill) {
//     return bill <= 300 && >= 50 ? bill * 0.5 : bill * 2.0;
// }

// const bills = [ 125, 555, 44];
// const tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill{2})];
//  const total = [bill[0] + tip[0] , bill[1] + tip[1]. bill[2] + tip[2]];

//  console.log{tip,total}7ol

