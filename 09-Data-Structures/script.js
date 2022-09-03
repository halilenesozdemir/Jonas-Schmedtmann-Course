 'use strict'
 // -----------------------------Destructuring Arrays------------------------------


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex,mainIndex ){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  }
}

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



















