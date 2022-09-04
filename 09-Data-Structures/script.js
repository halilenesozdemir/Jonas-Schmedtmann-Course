 'use strict'
 // -----------------------------Destructuring Arrays------------------------------


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0, // Open 24 hours
        close: 24,
    },
    },
  order: function(starterIndex,mainIndex ){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

    // Nice example for method ( Firstly we passed an argument obj, after that initialized neeeded key/value pair, after the destructuring we use this values nicely.)
  orderDelivery: function({starterIndex = 1, mainIndex = 0 , time= '20:00', address}){
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  }

}

// Without default values
restaurant.orderDelivery({
  time: '22:30',
  address: 'Height Street,22',
  mainIndex: 2,
  starterIndex: 2,
})

// With Default Values

restaurant.orderDelivery({
  address: 'Height Street,22',
  mainIndex: 2,
})

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
const [first , , third] = restaurant.categories;
console.log(first,third); // Italian Vegetarian -> Successful -> Second element will be skipped.

let [main, , secondary] = restaurant.categories;
console.log(main,secondary);

// How to switch main and secondary values?
//Without destructuring 

// Just like a bucket topic (Remember Angela Yu  :) )

// Switching Variable

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main,secondary);

// With destructuring we can make it a lot easier...

[main, secondary] =  [secondary, main ]
console.log(main,secondary);

console.log(restaurant.order(2,0));    // ['Garlic Bread', 'Pizza'];

//Receive 2 return values from a function
const [starter, mainCourse ] = restaurant.order(2,0);
console.log(starter, mainCourse);

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

const [p,q,r = 1] = [8,9]; //We can set default values for r and now see the result...
console.log(p,q,r); // 8 9 1


// -----------------------------Destructuring Objects------------------------------

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

// What if we wanted the variable names to be different from the property names?
const {name:restaurantName, openingHours:hours, categories: tags} = restaurant;
// console.log(restaurantName,hours,tags);  // The result is same...

//Default Values

// const {menu = [], starterMenu: starters = []}= restaurant;
// console.log(menu,starters); // -> menu(There is no menu properties in restaurant obj.) [] (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

//  const {menu, starterMenu: starters = []}= restaurant;
//  console.log(menu,starters);
 // If doesn't give a default empty array, you have taken 'undefined'

 // Mutating Variables

 let a = 111;
 let b = 999;
 const obj =  {a:23, b:7,c:14};

//  {a,b} = obj;
// Actually this usage seems logical. But we have an error .
// Uncaught SyntaxError: Unexpected token '='
// We start the curly braces and JS expects a code block. And you don't use code block 'operation of assignment!'

//Let's solve this problem...
// Just only a put a parenthesis :)
  ({a,b} = obj);
  console.log(a,b);

  // Nested Objects

    const {fri: {open,close}} =  openingHours;
  //  console.log(open,close); // 11 23

  const {fri: {open: o,close:c}} =  openingHours;
  //  console.log(o,c); // 11 23

























