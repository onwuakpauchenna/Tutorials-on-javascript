'use script';

// all this scopre are turw with script mode

/*
// SCOPING

// function scope
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  // console.log(firstName); can acess global score before intialization of calcAge function

  // function scope
  function printAge() {
    let output = `${firstName}you are ${age}, born in ${birthYear}`;
    console.log(output);

    // block score
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // creating NEW variable with some name as
      // outer scope's variable
      firstName = 'alberto'; // if firstname here is not commented it will be used in the
      // as the first name because scoping loooks up when looking for it variable if not it will use the global scope

      //reassingning outer scope's variable
      let output = 'OUTPUT'; // Redefining a varibles

      const str = `oh, and you,re a millenial. ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      console.log(add(2, 4));
      console.log(output); // outpout will appear in the colsole because we defined it
    }
    //console.log(str); // only have access to the block scope can acess
    //outside block scope, const and let variable are block scope except var
    // variables only have acesss outside the block scope they are now function scope
    console.log(millenial); // will exexcute in the console but var varible are function scope even when used inside block scope
    // console.log(add(2, 3)); // its a block scope , function can be a blcok scope too
  }
  printAge();
  return age;
}

const firstName = 'skertel'; // Global score
calcAge(1991);

// global scope dont have access to element defined in other scope
// and scope defined in function block scope cant be access outside
// the function scope except function inside a function which can acsss
// it parent scope or child scope example
// console.log(age) and
// printage();

*/

/*
// HOSTING

// Variable
console.log(me);
// console.log(job); cans acess job before initialization
// console.log(year); "   """  ""   ""  ""  ""  ""

var me = 'skertel';
let job = 'teacher';
const year = 1991;

// Functions

console.log(addDel(2, 3)); // 5 ,  function declaration can access function before initialization;
// console.log(addExp(2, 3)); cant access before initialization before of const in function experessing used which makes it a temporal dead zone
// console.log(addArrow(2, 3));   cant access before initialicaiton becaus is arrow function and it contains var variable

function addDel(a, b) {
  return a + b;
}

const addExp = function (a, b) {
  return a + b;
};
// any variable declared with var will be hoisted and set as undefined
var addArrow = (a, b) => a + b;

// Example
// remember never to use var variable to avoid bug use const and let variable always

// and variables should be declared on top of the code

console.log(numProducts); // undefined becaused var variables are undfineed
if (!numProducts) deleteShoppingCart(); // it will be undefined becaces numproduct used var variable
// and var variable are undefined and undefined is falsy value which !false will be true then
// console .log('All product Deleted') will execute

var numProducts = 10; // undefined;

function deleteShoppingCart() {
  console.log('All Product Delete');
}

*/

/*
// THIS . KEYBOARD
// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);

//console.log(this); // will show window in console

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  //console.log(this); // undefined
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  //console.log(this); // wil escute because arrow function does not get it own this keyword simply the arrow keyword used lexical thiy keyword
  // which means it used keyword of its parents element
};
calcAgeArrow(1991);

const skertel = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
skertel.calcAge();

const matilda = {
  year: 2017,
};

// borrowing (putting object inside another ibject)
matilda.calcAge = skertel.calcAge;
matilda.calcAge();

*/
/*
//this keyword in regular function and arrow function

// var firstName = 'matilda';

const jonas = {
  firstName: 'jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // solution 1 other functions use this keyword as windows
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1966);
    // };

    // solution 2 // arrow function use it this keyword from its parenst element
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1966);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`this ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge();

// arguments keyword

const addExp = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExp(2, 5);
addExp(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8, 12);
*/

//  difference between primitive and object type are stored in memory

// primitive type
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

// refrence type
const me = {
  name: 'skertel ',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('friend', friend);
console.log('me', me);

// PRIMTIVE TYPES
let lastName = 'william';
let oldLastName = lastName;
lastName = 'davis';
console.log(lastName, oldLastName);

// REFRENCE TYPE
const jessica = {
  firstName: 'jessica',
  lastName: 'william',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'davis';
console.log('Before Marriage', jessica);
console.log('After Marriage', marriedJessica);

// marriedjessicaa = {};

// copying objects
const jessica2 = {
  firstName: 'jessica',
  lastName: 'william',
  age: 27,
  family: ['alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'davis';

jessicaCopy.family.push('albert');
jessicaCopy.family.push('skertel');
console.log('Before Marriage', jessica2);
console.log('After Marriage', jessicaCopy);
