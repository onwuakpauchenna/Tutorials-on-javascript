/*
let js = 'amazing'
console.log(40 + 8 + 23 - 10);

console.log("jonas");
console.log(23);

// Variable name conventions
let firstName = "skertel";
console.log(firstName);

let alberto_skertel = "AS";
let $function = 27;

let person = 'skertel';
let PI = 3.1415;

let myFirstJob = 'programmer';
let myCurrentJob = 'teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob, myCurrentJob);
*/


/*
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'skertel');

javaScriptIsFun = 'yes!';
console.log(typeof javaScriptIsFun);

let year;
console.log(typeof year);

year = 1991;
console.log(typeof year);
*/

/*
// let const var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job

var job = 'programmer';
job = 'teacher';

lastName = 'schmedtmann';
console.log(lastName);
*/

/*
//MATHEMATICAL OPERATORS
const now = 2037
const ageskertel = now - 1999;
const agesarah = now - 2005;
console.log(ageskertel, agesarah);

console.log(ageskertel * 2, agesarah / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'alberto';
const lastName = 'skertel';
console.log(firstName + ' ' + lastName);

// ASSIGNMENT OPERATORS
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x /= 2; // x = x / 2 = 50
x++; // x = x + 1 = 51
x--;  // x = x - 1 = 50
console.log(x);

console.log(ageskertel > agesarah); // > , < , <= , >=
console.log(agesarah >= 18);

const isFullAge = agesarah >= 18;

console.log(now - 1991 > now - 2018);

*/

/*
const now = 2037
const ageskertel = now - 1999;
const agesarah = now - 2005;
console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

// const averageAge = ageskertel + agesarah / 2; // agesarah divided by 2 will execute first before the ageskertel + agesarah, that beacuse devision have higher procedence that additon.
// console.log(ageskertel, agesarah, averageAge);

const averageAge = (ageskertel + agesarah) / 2;
console.log(ageskertel, agesarah, averageAge);
*/

/*
//////////////////////////////////////////
//// CODING CHALLENGE #1

;

const markhigherBMI = (BMIMark > BMIJohn);
const johnHigherBmi = (BMIJohn > BMIMark);
console.log(markhigherBMI, johnHigherBmi);
*/

/*
const firstName = 'skertel';
const job = 'footballer';
const birthYear = 1999;
const year = 2023;

const skertel = "i'm " + firstName + ' , a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(skertel);

const skertelNew = `i'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(skertelNew);

console.log(`just a regular string....`);
 
console.log('string with \n\
multiple \n\
lines');

console.log(`string with
multiple
line`);

*/
/*
// const age = 19;
// const isOldEnough = age >= 18;
// if (isOldEnough) {
//     console.log('sarah can start driving license')
// }

const age = 15;
if (age >= 18) {
    console.log('sarah can start driver license')
} else {
    const yearsLeft = 18 - age;
    console.log(`sarah is too young to drive , wait another ${yearsLeft} years :)`);
}
*/

/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.99;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn)

if (BMIMark > BMIJohn) {
    console.log("mark's BMI is higher than johns's");
} else {
    console.log("john's BMI is higher than mark's");
}

//Using template literals
if (BMIMark > BMIJohn) {
    console.log(`mark's BMI (${BMIMark}) is higher than johns's BMI (${BMIJohn})`);
} else {
    console.log(`john's BMI (${BMIJohn}) is higher than mark's BMI (${BMIMark})`);
}

console.log(`mark's BMI${BMIMark} is higher than john's BMI${BMIJohn}`);
*/

/*
// type conversion
const inputYear = '1991';
console.log(inputYear + 18);
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('skertel'));
console.log(typeof NaN);

console.log(String(23));

// type coercion
console.log('i am ' + 23 + ' years old');
console.log('i am ' + '23' + ' years old');
console.log('23' + '10' + 3);
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

*/

/*
// 5 falsy values: 0 , '' , undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean({}));

// const money = 100;
// if (money) {
//     console.log("Don't spend it all");
// } else {
//     console.log('you should get a job');
// }

const money = 0;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log('you should get a job');
}

let height;
if (height) {
    console.log('YAH! height is defined');
} else {
    console.log('height is UNDEFINED')
}
*/
/*
const age = 18;
if (age === 18) console.log('you just became an adult :d (strict)');

if (age == 18) console.log('you just became an adult :d (loose)');


// const favourite = prompt("what's your favourite number?");
// console.log(favourite);

// if (favourite == 23) { // '23' == 23
//     console.log('cool! 23 is an amazing number!')
// }

const favourite = Number(prompt("what's your favourite number?"));

if (favourite === 23) { // 23 === 23
    console.log('cool! 23 is an amazing number!')
} else if (favourite === 7) {
    console.log('7 is alos a cool number')
} else if (favourite === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('number is not 23 or 7 or 9')
}

if (favourite !== 23)
    console.log('why not 23');
*/

/*
const hadDriversLicense = true; // A
// const hasGoodVision= true; // B
const hasGoodVision = false; // B

console.log(hadDriversLicense && hasGoodVision);
console.log(hadDriversLicense || hasGoodVision);
console.log(!hadDriversLicense);

// const shouldDrive = hadDriversLicense && hasGoodVision;
// if (shouldDrive) {
//     console.log('sarah is able to drive');
// } else {
//     console.log('someone else should drive....');
// }

// if (hadDriversLicense && hasGoodVision) {
//     console.log('sarah is able to drive');
// } else {
//     console.log('someone else should drive....');
// }


const isTired = true // C
console.log(hadDriversLicense && hasGoodVision && isTired)

if (hadDriversLicense && hasGoodVision && !isTired) {
    console.log('sarah is able to drive');
} else {
    console.log('someone else should drive....');
}

*/

/*
//CONDING CHAALLANGE
// const averageDolphins = (96 + 108 + 89) / 3;
// const aveargeKoalas = (88 + 91 + 110) / 3;
// console.log(averageDolphins, aveargeKoalas)

// if (averageDolphins > aveargeKoalas) {
//     console.log('Dolphins wins the race')
// } else if (aveargeKoalas > averageDolphins) {
//     console.log('koalas wins the race')
// } else if (averageDolphins === aveargeKoalas) {
//     console.log('both team wins the trophy');
// }

// BONUS 1
const averageDolphins = (97 + 112 + 101) / 3;
const aveargeKoalas = (109 + 95 + 123) / 3;
console.log(averageDolphins, aveargeKoalas)

if (averageDolphins > aveargeKoalas && averageDolphins >= 100) {
    console.log('Dolphins wins the race')
} else if (aveargeKoalas > averageDolphins && aveargeKoalas >= 100) {
    console.log('koalas wins the race')
} else if (averageDolphins === aveargeKoalas && averageDolphins >= 100 && aveargeKoalas >= 100) {
    console.log('both team win the race')
} else {
    console.log('no one wins the trophy');
}
*/

/*
//SWITCH STATEMENT

const day = 'monday';
switch (day) {
    case 'monday': // day === 'monday'
        console.log('plam course structure');
        console.log('go to coding meetup');
        break;
    case 'tuesday':
        console.log('prepare theory videos');
        break;
    case 'wednesdsy':
    case 'thursday':
        console.log('write code examples');
    case 'friday':
        console.log('record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend :D');
        break;
    default:
        console.log('not a valid day');
}

// IF AND ELSE STATEMNT

const day = 'monday';

if (day === 'monday') {
    console.log('plam course structure');
    console.log('go to coding meetup');
} else if (day === 'tuesday') {
    console.log('prepare theory videos');
} else if (day === 'wednesdsy' || day === 'thursday') {
    console.log('write code examples');
} else if (day === 'friday') {
    console.log('record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('enjoy the weekend :D');
} else {
    console.log('not a valid day');
}
*/
/*

3 + 4
1991
true && false && !false

if (23 > 10) {
    const str = '23 is bigger';
}
const me = 'jonas';
console.log(`i'm ${2037 - 1991} years old ${me}`)

*/

/*
const age = 23;
// age >= 18 ? console.log('i like to drink wine') :
//     console.log('i like to drink water');


const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2)

console.log(`i like to drink ${age >= 18 ? 'wine' : 'water'} oftenly`)

*/

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.5 : bill * 0.2;
console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)
