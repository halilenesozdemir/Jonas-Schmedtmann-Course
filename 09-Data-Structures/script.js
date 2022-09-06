 'use strict'
 // -----------------------------Destructuring Arrays------------------------------

 // 3. Enhancement...
    const weekdays = ['mon','tue', 'wed','thu','fri','sat','sun']

    const openingHours =  {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
    };


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // openingHours:openingHours,
  // No need for same thing twice. -ES6 Enhanced Object Literals-
  openingHours,

  //Lets review 2 methods below this line. First one is not contain semicolon and function, but each other succesfully work. Easier SYNTAX... (2.Enhancement(iYİLEŞTİRME) )
  order(starterIndex,mainIndex ){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

    orderPasta: function(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

    // Nice example for method ( Firstly we passed an argument obj, after that initialized neeeded key/value pair, after the destructuring we use this values nicely.)
  orderDelivery: function({starterIndex = 1, mainIndex = 0 , time= '20:00', address}){
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  }

}

// Without default values
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Height Street,22',
//   mainIndex: 2,
//   starterIndex: 2,
// })

// With Default Values

// restaurant.orderDelivery({
//   address: 'Height Street,22',
//   mainIndex: 2,
// })

//Example before 'DESTRUCTURING'
// const arr = [2,3,4];
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]
// We can actually declare all the three variables at the same time

// Don't forget to actually also declare the variables using CONST...
// const [x ,y ,z] = arr;
// console.log(x,y,z); // -> x:2, y:3, z:4
// console.log(arr);

// const [first, second] = restaurant.categories;
// console.log(first,second); // Italian, Pizzeria;

// How can i take first and third elements from restaurant.categories
// const [first , , third] = restaurant.categories;
// console.log(first,third); // Italian Vegetarian -> Successful -> Second element will be skipped.

// let [main, , secondary] = restaurant.categories;
// console.log(main,secondary);

// How to switch main and secondary values?
//Without destructuring 

// Just like a bucket topic (Remember Angela Yu  :) )

// Switching Variable

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main,secondary);

// With destructuring we can make it a lot easier...

// [main, secondary] =  [secondary, main ]
// console.log(main,secondary);

// console.log(restaurant.order(2,0));    // ['Garlic Bread', 'Pizza'];

//Receive 2 return values from a function
// const [starter, mainCourse ] = restaurant.order(2,0);
// console.log(starter, mainCourse);

// Nested destructuring

// const nested = [2,4, [5,6]];
// const [x, ,[y,z]] = nested;
// console.log(x, y,z);
// This is the way of take an individual values.

// const nested = [2,3,5,6,732, [5,6]];
// const [i, , , , , j ] = nested;  // WATCH OUT
// console.log(i,j);

// Default Values
// const [p,q,r] = [8,9]; // 
// console.log(p,q,r); // 8 9 undefined

// const [p,q,r = 1] = [8,9]; //We can set default values for r and now see the result...
// console.log(p,q,r); // 8 9 1


// -----------------------------Destructuring Objects------------------------------

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// What if we wanted the variable names to be different from the property names?
// const {name:restaurantName, openingHours:hours, categories: tags} = restaurant;
// console.log(restaurantName,hours,tags);  // The result is same...

//Default Values

// const {menu = [], starterMenu: starters = []}= restaurant;
// console.log(menu,starters); // -> menu(There is no menu properties in restaurant obj.) [] (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

//  const {menu, starterMenu: starters = []}= restaurant;
//  console.log(menu,starters);
 // If doesn't give a default empty array, you have taken 'undefined'

 // Mutating Variables

//  let a = 111;
//  let b = 999;
//  const obj =  {a:23, b:7,c:14};

//  {a,b} = obj;
// Actually this usage seems logical. But we have an error .
// Uncaught SyntaxError: Unexpected token '='
// We start the curly braces and JS expects a code block. And you don't use code block 'operation of assignment!'

//Let's solve this problem...
// Just only a put a parenthesis :)
  // ({a,b} = obj);
  // console.log(a,b);

  // Nested Objects

    // const {fri: {open,close}} =  openingHours;
  //  console.log(open,close); // 11 23

  // const {fri: {open: o,close:c}} =  openingHours;
  //  console.log(o,c); // 11 23



// -----------------------------The Spread Operator(...)------------------------------
// We use this spread operator to basically expand an array into all its elements
// Basically unpacking all the array elements at one

// const arr = [7,8,9];
// const badNewArr = [1,2,arr[0],arr[1], arr[2]];
// console.log(badNewArr);
// const goodNewArr = [1,2, ...arr]
// const niceTry = [1,2,arr]

// console.log(goodNewArr,niceTry); // Review this results carefully.

// console.log(...goodNewArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
// console.log(newMenu);

// The big difference is that the spread operator takes all the elements from the array and it also doesn't create new variables;
//As a consequence, we can only use it in places where we would otherwise write values seperated by commas

// Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy); // SHALLOW COPY

//Join 2 Arrays;

  // const arr1 = [5,6,7,'ahmet'];
  // const arr2  =[ {x:2,y:4},1,2,3,4]

  // const newArr = [...arr1,...arr2];
  // console.log(newArr); // You see, its EZ.

  // Takeaway: Spread Opearator works on all so-called 'ITERABLES'
  //Arrays,strings,maps,sets => Iterables and NOT OBJECT...

  //Strings Example-> Watch Out

  // const str = 'Jonas';
  // const letters = [...str, ' ', 's.'];
  // console.log(letters);

  //IMPORTANT ISSUE
  // What we CAN'T DO is to use this to build a string using a template literal;

  // console.log(`${...str} Schmedtmann`); There is no waaay...

  //Tysm -> Thank you so Much -> :)


  //Real World Example

//   const ingredients = [
//     prompt('Let\'s make pasta! Ingredient 1?'),
//     prompt('Let\'s make pasta! Ingredient 2?'),
//     prompt('Let\'s make pasta! Ingredient 3?')
// ]
// console.log(ingredients);

// restaurant.orderPasta(...ingredients) 

// Objects (Since ES2018 although not iterable, still used.);

// const newRestaurant = {...restaurant, founder: 'Guiseppe'}
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

//SHALLOW COPY AND DEEP COPY matters will be investigated.

// -----------------------------REST PATTERN AND PARAMETERS------------------------------
//Same syntax with Spread;
// But opposite of Spread;

//Spread because on RIGHT side of =

// const arr = [1,2, ...[3, 4]] ;

//REST because on LEFT side of =
// const [a,b,...others] = [1,2,3,4,5];
// console.log(a,b,others); // 1 2 (3) [3, 4, 5]

// REST take the rest and put them into an array :)

//Both Spread and REST usage...

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza,risotto,otherFood);
//Did you see Pasta-> NO, Because we skipped that and rest operator will be placed in at the end of array...

// const [pizza, , risotto, ...otherFood,bread] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza,risotto,otherFood);
// Uncaught SyntaxError: Rest element must be last element...

// Objects

// const {sat, ...weekDays} = restaurant.openingHours;
// console.log(weekDays);

// 2)Functions
/* const add =  function(...numbers){
  let sum = 0;
  for(let i= 0; i<numbers.length; i++){
    sum+= numbers[i]
  }
  console.log(sum); 
}
add(2,3);
add(5,3,7,2)
add(8,2,5,3,2,1,4)

const x = [23,5,7]
add(...x) //Spread... */

// restaurant.orderPizza('mushrooms','onion','olives','Spinach') // mushrooms, (3) ['onion', 'olives', 'Spinach']
// restaurant.orderPizza('mushrooms') // mushrooms, [] => empty array...

// -----------------------------SHORT CIRCUITING (&& and ||) ------------------------------
// console.log('--------OR ---------');

// use ANY data type, return ANY data type, short circuiting
/* console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); //Jonas ('' is falsy)
console.log(true || 0); // true
console.log(undefined || null); //null ( Both of them falsy and or operator return second.)

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello; */

// restaurant.numGuests = 0;

//  const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('--------AND ---------');

// console.log(0 && 'JONAS'); // If first element is falsy, immediately return, the second not evaluated.
// console.log(7 && 'Jonas' ); // First element is truthy, it means that the evaluation continues, and then simply return the last value.

// console.log('Hello' && 23 && null && 'Jonas' ); // null

// if(restaurant.orderPizza){
//   restaurant.orderPizza('mushrooms', 'spinach')
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach') // Good solution, readable

// console.log('--------Nullish Coalescing Operator ---------');

//  restaurant.numGuests = 0;

//  const guests = restaurant.numGuests || 10;
//  console.log(guests);

 // Nullish: Null and undefined. (NOT INCLUDE 0 OR '') -> these are truthy for this Nullish Coalescing Operator rules.

//  const guestCorrect = restaurant.numGuests ?? 10;
//  console.log(guestCorrect);

 // -----------------------------Logical Assignment Operators ------------------------------

//   const rest1 = {
//     name: 'Capri',
//     // numGuests: 20,
//     numGuests:0
//   };

//  const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi'
//  };

 // OR assignment opearator

 //rest1.numGuests = rest1.numGuests || 10;
 //rest2.numGuests = rest2.numGuests || 10;

//  rest1.numGuests  ||= 10;
//  rest2.numGuests  ||= 10;
//  console.log(rest1.numGuests);

// Nullish assignment operator ( null or undefined)

 // İf numGuests: 0 -> Use Nullish Coalescing Op...
  // rest1.numGuests ??= 10;
  // console.log(rest1.numGuests);

  // rest2.owner &&= '<ANONYMOUS>'
  // rest1.owner &&= '<ANONYMOUS>'
  // console.log(rest1,rest2);


   // -----------------------------Coding Challenge #1 ------------------------------

  /* We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
GOOD LUCK � */



//   const game = {
//  team1: 'Bayern Munich',
//  team2: 'Borrussia Dortmund',
//  players: [
//  [
//  'Neuer',
//  'Pavard',
//  'Martinez',
//  'Alaba',
//  'Davies',
//  'Kimmich',
//  'Goretzka',
//  'Coman',
//  'Muller',
//  'Gnarby',
//  'Lewandowski',
//  ],
//  [
//  'Burki',
//  'Schulz',
//  'Hummels',
//  'Akanji',
//  'Hakimi',
//  'Weigl',
//  'Witsel',
//  'Hazard',
//  'Brandt',
//  'Sancho',
//  'Gotze',
//  ],
//  ],
//  score: '4:0',
//  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//  'Hummels'],
//  date: 'Nov 9th, 2037',
//  odds: {
//  team1: 2,
//  x: 3.25,
//  team2: 1,
//  },
//  };


              // --------------------------My Solution----------------------------

// 1)

//  const [players1,players2] = game.players;
//  console.log(players1,players2);

//  // 2)

//  const [gk,...fieldPlayers] = players1;
//  console.log(gk,fieldPlayers);

//  // 3)

//  const allPlayers = [...players1,...players2];
//  console.log(allPlayers);

//  // 4)

//  const substPlayer = ['Thiago', 'Coutinho', 'Perisic'];
//  const players1Final = [...players1, ...substPlayer];
//  console.log(players1Final);

//  //5 )
//  const {team1,x:draw,team2} = game.odds;
//  console.log(team1,draw,team2);

//  //6 )

//  const printGoals = function(...players){
//   for(let i = 0; i <players.length; i++ ){
//     console.log(`${i+1} was scored by ${players[i]}`);
//   }

//  }
//  printGoals(...game.scored)
//  printGoals('Davies','Müller','Kimmich', 'Lewandowski')

// 7 )

//  team1 < team2 &&  console.log(`${game.team1} more likely to win`) || team1 > team2 &&  (console.log(`${game.team2} more likely to win`))

//Alternative Solutions

//  console.log(`${(team1 < team2 && game.team1) || (team2 < team1 && game.team2)} is more likely to win`)

// console.log(
//   `${(team1 < team2 && game.team1) || game.team2} is more likely to win`
// );



// --------------------------Jonas's Solution----------------------------

// // 1.
// const [players1, players2] = game.players;
// console.log(players1, players2);
// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
// // 5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);
// // 6.
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };
// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// // printGoals('Davies', 'Muller');
// printGoals(...game.scored);
// // 7.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');


 // -----------------------------Looping Arrays: The For-of Loop ------------------------------

//  const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

//  for(const item of menu) console.log(item);
 // For-of loops contains the 'Continue and Break' feature.

 //Old school way to get index...

//  for(const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
//  }

 //Newschool style is starting;

//  for(const [index,menuItem] of menu.entries()){
//   console.log(`${index+1}: ${menuItem}`);
//  }

//  console.log([...menu.entries()]);

// ----------------------------- Optional Chaining ------------------------------

// if(restaurant.openingHours.mon){
// console.log(restaurant.openingHours.mon.open);
// }

// if(restaurant.openingHours && restaurant.openingHours.fri){
// console.log(restaurant.openingHours.fri.open);
// }


//Without Optional Chaining
// console.log(restaurant.openingHours.mon.open); //undefined.open -> return  Uncaught TypeError 

//With Optional Chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// Example
// const days = ['mon','tue', 'wed','thu','fri','sat','sun']
// for(const day of days){
//   console.log(day);
//  const open =  restaurant.openingHours[day]?.open ?? 'closed'
//  console.log(`On ${day}, we open at ${open}`);
// }

// //Methods
// console.log(restaurant.order?.(0,1) ?? 'method does not exist');
// console.log(restaurant.orderRisotto?.(0,1) ?? 'method does not exist');

//Arrays
// const users = [
//   // {
//   // name:'Jonas',
//   // email: 'hello@jonas.io'
//   // },
// ]

// Which one is easy. Choose your selection :) This one?
// console.log(users[0]?.name ?? 'User array empty');

// //Or this one?
// if(users.length > 0) console.log(console.log(users[0]?.name ?? 'User array empty'));
// else console.log('user array empty')

//Of course first one is so sweety...


// -------------------- Looping Objects: Object Keys,Values,Entries ---------------------

//property NAMES

// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

//   for(const day of properties){
//     openStr += `${day},`
//   }
  // console.log(openStr);

// property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// property Entriesconst entries = Object.entries(openingHours);
// console.log(entries);

// for(const [day,{open,close}] of entries){
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }


// -----------------------------Coding Challenge #2 ------------------------------
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
 scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
 'Hummels'],
 date: 'Nov 9th, 2037',
 odds: {
 team1: 1.33,
 x: 3.25,
 team2: 6.5,
 },
 };

 //1 )
//  console.log([...game.scored.entries()]);
//  for(const [index,player] of game.scored.entries()){
//   console.log(`Goal ${index +1 } : ${player}`);
//  }

 //2)

//  for(const [team1,x,team2] of [Object.values(game.odds)]) console.log(team1,x,team2);
// Unfortunately this method is doesn't support by JONAS -> Forbidden :)
// Directly use the object itself.

//  const oddValues = Object.values(game.odds)
//  console.log(oddValues);

//     let sum=0;
//   for(let i=0;i<oddValues.length; i++){
//   sum += oddValues[i]
//   }
//   console.log(sum / oddValues.length);

 //3)

//  const {team1,x:draw,team2} = game.odds;
//  console.log(team1,draw,team2);

//  const ratio = function(){
//   console.log(`Odd of victory ${game.team1}: ${team1}`);
//   console.log(`Odd of draw: ${draw} `);   
//   console.log(`Odd of victory ${game.team2}: ${team2}`);
//  }
//  ratio()

//4)

// I didn't do this... High Level :)

// const scoredEntry = game.scored.entries();
// // console.log([...scoredEntry]);

// for(let [goal,player] of scoredEntry){
//   // console.log(goal,player);
//   player ? goal++ : goal =1;
//   console.log({player,goal});
// }


// ------------------------Jonas's Solutions ------------------

// 1.
// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);
// 2.
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);
// 3.
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// BONUS
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
///////////////////////////////////////


// ----------------------------- Sets ------------------------------

// const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto','Pizza','Pasta'])
// console.log(ordersSet);

// console.log(new Set('Jonas')); // Set(5) {'J', 'o', 'n', 'a', 's'}

// console.log(ordersSet.size); // 3
// console.log(ordersSet.has('Pizza')); // true
// console.log(ordersSet.has('Bread')); // false

// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto')
// console.log(ordersSet);
// console.log(ordersSet[0]) //undefined -> Because in sets there are actually no indexes.
// ordersSet.clear(); // Each of set element will be deleted.
// console.log(ordersSet);

// for(const order of ordersSet) console.log(order);

// Example

// const staff = ['Waiter','Chef','Waiter','Manager','Waiter','Chef'];
// const staffUnique = [...new Set(staff)];
// console.log(new Set(['Waiter','Chef','Waiter','Manager','Waiter','Chef']).size);
// How many unique positions there are...

// console.log(new Set('jonasschmedtmann').size);


// -----------------------------  Maps ------------------------------

// const rest = new Map ();
// rest.set('name', 'Cllasico Italiano');
// rest.set(3,'Hello');
// rest.set(1,'France');
// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// .set('open', 11)
// .set('close',23)
// .set(true, 'We are open :)')
// .set(false, 'We are closed :(')
// console.log(rest);
// console.log(rest.get('name'));
// console.log(rest.get(true));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')))  

// console.log(rest.has('categories'));
// rest.delete(2)
// console.log(rest);
// console.log(rest.size);
// rest.clear();
// console.log(rest);

// rest.set([1,2], 'Test')
// console.log(rest); 

// console.log(rest.get([1,2])); //undefined // They are not the same object in the heap, remember Primitive vs References

// const arr = [1,3];
// rest.set(arr,'Hey');
// console.log(rest.get(arr));

//----------------------Maps Iteration ------------------------

// const question = new Map([
//   ['question', 'What is the best programmin language in the world'],
//   [1, 'C'],
//   [2,'Java'],
//   [3,'Javascript'],
//   ['correct', 3],
//   [true, 'Correct :) '],
//   [false, 'Try Again']
// ])

// console.log(question);

// Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours))
// console.log(hoursMap);

// const answer = Number(prompt('Your answer'));
// console.log(answer);

// for (const [key,value] of question){
//   if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
  // if(answer === 3) {console.log(question.get(true))} else {
  //     console.log(question.get(false));
  // }
  //Practical Solution...
//  console.log(question.get(question.get('correct') === answer));  

 //Convert Map to Array
//  console.log([...question]);
//  console.log([...question.keys()]);
//  console.log([...question.values()]);

   // -----------------------------Coding Challenge #3 ------------------------------

//    Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17:
// ⚽
// GOAL
// GOOD LUCK 😀

   const gameEvents = new Map([
[17, '⚽ GOAL'],
[36, '🔁 Substitution'],
[47, '⚽ GOAL'],
[61, '🔁 Substitution'],
[64, '🔶 Yellow card'],
[69, '🔴 Red card'],
[70, '🔁 Substitution'],
[72, '🔁 Substitution'],
[76, '⚽ GOAL'],
[80, '⚽ GOAL'],
[92, '🔶 Yellow card'],
]);

//1 )
 // My solution
// const arrGameEvents = [...gameEvents.values()];

// const eventUnique = [...new Set(arrGameEvents)];
// console.log(eventUnique);

// Jonas's Solution
// const events = [...new Set(gameEvents.values())];
// console.log(events);

//2 )
// gameEvents.delete(64);
// console.log(gameEvents);

//3 )

  // const eventMin = [...gameEvents.keys()]
  // console.log(eventMin);

  // let max = eventMin[eventMin.length-1];
  // let min = eventMin[0];
  // let totalSpace = max-min;
  // let avg = totalSpace / eventMin.length;
  // console.log(avg);

  //  console.log(`An event happened, on average, every  ${Math.trunc(avg)} minutes`);

// Alternative Solution


// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(`An event happened, on average, every ${Math.trunc(time / gameEvents.size)} minutes`);

//4 )

// const entries = [...gameEvents.entries()]
// console.log(entries);

// for(const[minute,event] of entries){
//   if(minute< 45) console.log(`[FIRST HALF] ${minute}: ${event}`)
//   if(minute > 45) console.log(`[SECOND HALF] ${minute}: ${event}`)
// }

//JONAS'S SOLUTION
// for(const [min,event] of gameEvents){
//   const half = min <45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }


  // -----------------------------Working with strings Part 1 ------------------------------

  // const airline = 'Tap Air Portugal';
  // const plane = 'A320';

  // console.log(plane[0]);
  // console.log(plane[1]);
  // console.log(plane[2]);
  // console.log('B737'[0]);

  // console.log(airline.length);
  // console.log('B737'.length);

  // console.log(airline.indexOf('r'));
  // console.log(airline.lastIndexOf('r'));
  // console.log(airline.lastIndexOf('Portugal'));

  // Slice method always return the new string. Hence we stored this result in variable...
  // console.log(airline.slice(4));
  // console.log(airline.slice(4,7)); // 7-4 ==> length of letter

  // console.log(airline.slice(0,airline.indexOf(' ')));
  // console.log(airline.slice(airline.lastIndexOf(' ') + 1));

  // console.log(airline.slice(-2));
  // console.log(airline.slice(1, -1));
  // console.log(airline.slice(-2));

  // const checkMiddleSeat = function(seat){
    // if(seat.includes('B') || seat.includes('E') ){
    //   console.log('You are into the middle');
    // } else  {
    //   console.log('You\'re lucky');
    // }
  //   const s = seat.slice(-1);
  //   if(s === 'B' || s === 'E')
  //     console.log('You are into the middle');
  //    else 
  //     console.log('You\'re Lucky');


  // }

  // checkMiddleSeat('11B')
  // checkMiddleSeat('17E')
  // checkMiddleSeat('142C')
  // checkMiddleSeat('15A')

  // console.log(new String('jonas'));
  // console.log(typeof new String('jonas'));

  //   console.log(typeof new String('jonas').slice(1));

  // Another Example

/*   const cars = ['Mercedes-D', 'Renault-B', 'BMW-D', 'McLaren-S'];
 
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i].slice(0, -2));
} // I put '-ClassNumber' to categorise Cars. But I don't wanna show them to customers. So I can use for loop and string slice method on them to trim category part.
 
function classFinder(car) {
  const carClass = car.slice(-1);
  if (carClass === 'B') {
    console.log('Family Car');
  } else if (carClass === 'D') {
    console.log('Luxury');
  } else if (carClass === 'S') {
    console.log('SuperSport');
  }
} // Extracting the last letter from strings to see cars classes. 
 
classFinder(cars[0]); //Luxury
classFinder(cars[1]); //Family Car
classFinder(cars[3]); //SuperSport */

  // -----------------------------Working with strings Part 2 ------------------------------


//  const airline = 'Tap Air Portugal';

//  console.log(airline.toLowerCase());
//  console.log(airline.toUpperCase());

 // Fix capitalization in name
//  const passenger = 'jONaS'; // Jonas
//  const passengerLower = passenger.toLowerCase();
//  const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);
//  console.log(passengerCorrect);

//  const passengerTrue = 

//Comparing emails
// const email = 'hello@jonas.io';
// const loginEmail =  '        Hello@Jonas.Io \n '

// const fixedEmail = loginEmail.toLowerCase().trim();
// console.log(fixedEmail === email);

//replacing
// const priceGB = '288,97&';
// const priceUS = priceGB.replace('&','$').replace(',','.')
// console.log(priceUS);

// const announcement = 'All passengers come to boarding door 23. Boarding door 23!'

// console.log(announcement.replaceAll('door', 'gate'));

// Another solution with Regular Expression
// console.log(announcement.replace(/door/g, 'gate')); //-g flag is meant to be 'GLOBAL'

//Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));

// if(plane.startsWith('Airbus') && plane.endsWith('neo')) console.log('New model of airbus')
// else console.log(':(');

// Practice Exercise

// const checkBaggage = function(items){
// const lower = items.toLowerCase();
// if(lower.includes('gun') || lower.includes('knife')) console.log('You are NOT allowed on board'); 
// else console.log('Welcome aboard!');
// }

// checkBaggage('I have a laptop, some foof and a pocket of KniFe')
// checkBaggage('Socks and camera')
// checkBaggage('Got some snacks and a GUN for Protection')

  // -----------------------------Working with strings Part 3 ------------------------------










  




















