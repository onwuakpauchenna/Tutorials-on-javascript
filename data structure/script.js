'use strict';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Paste', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,
  // the two opening hours are thesame with the help of ES6
  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // open 24 hours
  //     close: 24,
  //   },
  // },

  /*the two order are thesame but object literal in ES6 makes it easier to remove the 
 function and makes it easy and help us write less code*/
  // order: function (starterIndex, mainIndex) {
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  /*the two order are thesame but object literal in ES6 makes it easier to remove the 
 function and makes it easy and help us write less c*/
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    // orderDelivery ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  /*the two order are thesame but object literal in ES6 makes it easier to remove the 
 function and makes it easy and help us write less c*/
  orderPaste(ing1, ing2, ing3) {
    console.log(
      `here is yout delicious paste with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainingredient, ...otheringredient) {
    console.log(mainingredient);
    console.log(otheringredient);
  },
};

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
*/

/*
/////////////////////////////////////////////////////////
/////   Working with Strings - part 2

//split and join
console.log('a+very+nice+string'.split('+'));
console.log('alberto+skertel'.split(' '));

const [firstName, lastName] = 'alberto skertel'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split('');
  const namesupper = [];

  for (const n of names) {
    // namesupper.push(n[0].toUpperCase() + n.slice(1));
    namesupper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesupper.join(''));
};

capitalizeName('jessica ann smith davis');
capitalizeName('alberto skertel');

// padding
const message = 'Got to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  // const str = string(number);
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(34456776543456));
console.log(maskCreditCard(356754323455654));
console.log(maskCreditCard(125513315));

// Repeat
const message2 = 'Bad weather... All departures Delayed...';
console.log(message2.repeat(5));

const planesinline = function (n) {
  console.log(`there are ${n} planes in line ${`✈`.repeat(n)}`);
};

planesinline(5);
planesinline(3);
planesinline(12);
*/

/*
////////////////////////////////////
//// working with strings - part 2

const airline = 'TAP AIR Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('SKERTEL'.toUpperCase());

// fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing Email
const email = 'hello@gmail.io';
const loginEmail = ' Hello@gmail.io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
// console.log(email = normalizedEmail);

const correctEmail = function (correct) {
  const CDadress = email;
  if (CDadress === correct) console.log(true);
  else console.log(false);
};
correctEmail(normalizedEmail);

//replacing
const priceGB = '288,97#';
// const priceUs = priceGB.replace('#', '$');
const priceUS = priceGB.replace('#', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All pasengers come to boarding door 23, Boarding door 23!';
console.log(announcement.replace('door', 'game'));
console.log(announcement.replaceAll('door', 'game'));
console.log(announcement.replace(/door/g, 'game'));

//Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('A320'));
console.log(plane.includes('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('part of the NEW AIRbus family');
}

// Practice exercise
const checkbaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('you are NOT allowed on board');
  } else {
    console.log('welcome on board!');
  }
};

checkbaggage('I have a laptop, some food and a pocket Knife');
checkbaggage('soks and camera');
checkbaggage('got some snacks and a gun for protection');

*/
/*
//////////////////////////////////////////////////
//// Working with strings - part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are the middle seat
  const st = seat.slice(-1);
  if (st === 'B' || st === 'E') console.log(`YOU GOT THE MIDDLE SEAT`);
  else console.log(`YOU GOT LUCKY`);
};

checkMiddleSeat('11B');
checkMiddleSeat('12C');
checkMiddleSeat('24E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));
console.log(typeof new String('jonas').slice(1));
*/

/*
/////////////////////////////////////////////////
/////coding challenge

Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
/*
// 1;
const events = new Set(gameEvents.values());
console.log(events);

// 2
gameEvents.delete(64);
console.log(gameEvents);

// // 3
console.log(
  `an event happend, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);

console.log(
  `An event happend, on average, every ${time / gameEvents.size} minutes`
);

// 4
for (const [min, evenst] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}

*/
/*
/////////////////////////////////////////////////
//////  Maps Interaction
const question = new Map([
  ['question', 'What is the best programming language'],
  [1, 'C'],
  [2, 'Javas'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'try again'],
]);
console.log(question);

// convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get(question));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`answer ${key} : ${value}`);
}

const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// convert map to array
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.key()]);
console.log([...question.values()]);
*/
/*
//////////////////////////////////////////////////////////////////////////////////////////
///// Maps. fundamental
const rest = new Map();
rest.set('name', 'classico italiano');
rest.set(1, 'firenze, italy');
console.log(rest.set(2, 'lisbon, portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open :D')
  .set(false, 'we are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

*/
/*
///////////////////////////////////////////////
////// Set

const orderSet = new Set([
  'paste',
  'pizza',
  'risotto',
  'paste',
  'pizza',
  'risotto',
]);

console.log(orderSet);

console.log(new Set('jonas'));
console.log(orderSet.size);
console.log(orderSet.has('pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('risotto');
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique);

*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/*
// 1.
for (const [i, player] of game.scores.entries()) {
  console.log(`Goals ${i + 1}: ${player}`);
}

// 2.
let odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`odd of ${teamStr} ${odd}`);
}

*/
/*
////////////////////////////////////////////////////////////
// looping Object: object keys, values, entries
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `we are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// property VALUES
const values = Object.values(openingHours);
// console.log(values);

// Entire OBJECT
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`on ${day} we open at ${open} and close at ${close}`);
}

*/
/*
///////////////////////////////////////
/// Optional chainig

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`on ${day} we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'method does not exist');
console.log(restaurant.orderrissoto?.(0, 1) ?? 'method does not exist');

//Arrays
const users = [{ name: 'skertel', email: 'skertel@gmail.io' }];
// const users = [];

console.log(users[0]?.name ?? 'user array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');

*/
/*
///////////////////////////////////////////////////////////
////// the for-of-loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

*/

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrusia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],

    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scores: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.2,
  },
};

// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');


*/
/*
////////////////////////////////////////////
////// the Nullish coalishing Operator

restaurant.numGuests = 10;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestcorrect = restaurant.numGuests ?? 10;
console.log(guestcorrect);
*/
/*

////////////////////////////////////////////////////////
////// short Circuiting ( && and ||)

// use ANY data type, return ANT data type, short-circuiting
console.log(3 || 'jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'hello' || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---AND---');
console.log(0 && 'jonas');
console.log(7 && 'jonas');

console.log('hello' && 23 && null && 'jonas');

// pratical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');
*/
/*
//////////////////////////////////////////////////////////////
///// Rest Pattern Parameters

// SPREAD , because on RIGHT side of =
const arr = [1, 2, ...[3, , 4, 5]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , Risotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, Risotto, otherfood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) function
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushroom', 'onion', 'olive', 'spinach');
restaurant.orderPizza('mushroom');
*/

/*
////////////////////////////////////////////////////
//// The Spread Operaor (...)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 array
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings, maps,sets, NOT objects
const str = 'jonas';
const letters = [...str, '', 's'];
console.log(letters);
console.log(...str);
// console.log(`${...str} schmedtmann`);

// Real-World example
const ingredient = [
  //   prompt(`let\s make paste! ingredient 1?`),
  //   prompt(`ingredient 2?`),
  // prompt(` ingredient 3`),
];

console.log(ingredient);

restaurant.orderPaste(ingredient[0], ingredient[1], ingredient[2]);
restaurant.orderPaste(...ingredient);

// Objects
const newRestaurant = { foundedin: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

*/
/*
//////////////////////////////////////
///// Destructuring Object
restaurant.orderDelivery({
  time: '22:30pm',
  address: 'plot 11 unity estate indepence layout',
  starterIndex: 2,
  mainIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default Values
const { menu = [], starerMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//Nested Objects
const {
  fri: { open: o, close: p },
} = openingHours;
console.log(o, p);

*/
/*
////////////////////////////////////////////////
/////// Destructuring Arrays
 
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching Variables
// const temp = main;
// main = secondary;
// secondary = temp;

[main, secondary] = [secondary, main];
console.log(main, secondary);

// recieving 2 return values from a function
const [stater, mainCourse] = restaurant.order(2, 0);
console.log(stater, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
