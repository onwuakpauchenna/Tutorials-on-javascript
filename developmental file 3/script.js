// Remember, we're gonna use scrict mode in all scripts now;
'use strict';
/*
const x = '23';
if (x === 23) console.log(23);

const CalcAge = birthyear => 2037 - birthyear;
console.log(CalcAge(1993));
*/
// problem
/* we work for a company building a smart home 
thermometer, our most recent task is this: "given an 
array of temperatures of one day, calculate the 
temperature ampliture, keep in mins that sometimes 
there might be  a sensor error."*/

//const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1)understanding the problem
/* - what is temp amplitude? answer: different 
between highest and lowest temp*/
// - how to compute max and min temperature?
// - what's a ssensor error? and what to do?

// 2) breaking up into sub-problesm
// - hpw to ignore error?
// - find max value in temp array
// - find min value in temp array
// - subtract min from max (amplitude) and return it

/*const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curtemp = temps[i];
    if (typeof curtemp !== 'number') continue;

    if (curtemp > max) max = curtemp;
    if (curtemp < min) min = curtemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
*/

// PROBLEM 2;
// function should now recieve 2 arrays of temps

// 1) undestanding the problem
/* - with 2 arrays ,  should we implement functionality 
twice ? NO! just merge two arrays*/

// 2) Breaking up into sub-problems
// - merge 2 arrays?

// const calcTempAmplitueNew = function (t1, t2) {
/*const array1 = ['a', 'b', 'c'];
  const array2 = ['d', 'e', 'f'];
  const array3 = array1.concat(array2);*/

/* const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curtemp = temps[i];
    if (typeof curtemp !== 'number') continue;

    if (curtemp > max) max = curtemp;
    if (curtemp < min) min = curtemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitueNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew); */
/*
const measurekelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    // value: Number(prompt('degree celsius')),
    value: 10,
  };
  // B) FIND
  console.table(measurement);

  // console.log(measurement.value);
  // console.warm(measurement.value);
  // console.error(measurement.value);10

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measurekelvin());
*/

// USING A DEBUGGER
/*const calcTempAmplitueBug = function (t1, t2) {
  //const array1 = ['a', 'b', 'c'];
  //const array2 = ['d', 'e', 'f'];
  //const array3 = array1.concat(array2);

  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curtemp = temps[i];
    if (typeof curtemp !== 'number') continue;

    if (curtemp > max) max = curtemp;
    if (curtemp < min) min = curtemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitueBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeBug); */

// CODING CHALLENGE #1
/*
given an array of forecasted maximun temperature 
the thermometer displays a string with these temperature.

Examples:[17,21,23] will print "... 17c in 1 days  
... 21c in 2 days  .....23c in 3 days..";

create a function 'printforecast' which takes
in an array 'arr' and logs a string like the 
above to the console

use the problem-solving framework: understand
 the problem and break it up into sub-problem!

 TEST DATA 1: [17, 21, 23]
 TEXT DATA 2: [12, 5, -5, 0, 4]
 */

//1) undestanding the problem
// - Array transformed to string, seperated by ....
// - What is the X days? answer? index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with C
// - Strings needs to contain day(index + 1)
// - Add ... between elements and start and end of
// - log string to console

/* const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`...${data1[0]}C ....  ${data1[1]}C .... ${data1[2]}C .... `);

const printforecase = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    // str = str + `${arr[i]}C in ${i + 1} days .... `;
    str += `${arr[i]}C in ${i + 1} days .... `;
  }
  console.log('....' + str);
};

printforecase(data1);
*/

// REVISION
// CODING CHALLENGE #1
/*
given an array of forecasted maximun temperature 
the thermometer displays a string with these temperature.

Examples:[17,21,23] will print "... 17c in 1 days  
... 21c in 2 days  .....23c in 3 days..";

create a function 'printforecast' which takes
in an array 'arr' and logs a string like the 
above to the console

use the problem-solving framework: understand
 the problem and break it up into sub-problem!

 TEST DATA 1: [17, 21, 23]
 TEXT DATA 2: [12, 5, -5, 0, 4]
*/

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// console.log(`...${data1[0]}C...${data1[1]}C...${data1[2]}C`);

// const princtforecast = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}C in ${i + 1} days....`;
//   }
//   console.log('....' + str);
// };

// princtforecast(data1);
