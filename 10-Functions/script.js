'use strict';
// --------------------------Default Parameters -----------------
// const bookings = [];

// const createBooking = function(flightNum, numPassengers=2, price = 200 *numPassengers){
//Parametrelerin verilme sırası cidden mühim bir mesele,yukarıdaki parametrelerde numPassengeri sonradan tanımlamak istersen before access init. hatası alacaksın.
//ES5
// numPassengers = numPassengers  || 1;
// price  = price || 199;

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking)
// }

// createBooking('LH123')
// createBooking('LH123',2,900)
// createBooking('LH123',5)
// createBooking('LH123',2)
// console.log(bookings);

// createBooking('LH123',undefined,1000) // If you want to second parameter don't be change. Assign undefined and after that this value take default parameter value. Nice trick

// -------------------------- How Passing Arguments Works: Value vs Reference -----------------

// const flight = 'LH234';
// const jonas = {
//     name: 'Jonas Schmedtmann',
//     passport: 1241141421412
// }

// const checkIn = function(flightNum,passenger){
// flightNum = 'LH999';
// passenger.name = 'Mr.' + passenger.name;

// if(passenger.passport === 1241141421412 ){
//     alert('Check in')
// } else {
//     alert('Wrong passport!')
// }
// }

// checkIn(flight,jonas) // flight= Primitive Type (Just a string)
// console.log(flight);
// console.log(jonas);

//Is the same as doing...

// const flightNum = flight
// -> Simple Copy, flightNum isn't an original...
// const passenger = jonas
// Just like copying object...
// Whatever we change in a copy, will also happen in the original.

// const newPassport = function(person){
//     person.passport = Math.trunc(Math.random() * 1000000000);
// }

// newPassport(jonas)
// console.log(jonas);
// checkIn(flight,jonas)

// PBV- PBR issue article
//https://levelup.gitconnected.com/pass-by-value-vs-pass-by-reference-in-javascript-82fa8736c9f7

/* 
Explanation

When we pass a primitive type as an argument on a function, the function makes a copy of the original value, and works with it.

When we pass an object as an argument on a function, the function makes a copy of the reference that points to the place of the memory where the object is stored. This copy is a value itself, is not a reference. Through this value, the original object can be modified from inside of a function.



Summary

- In programming languages, Arguments can be passed by value, or passed by reference.

- JavaScript works only passing by value.

- When we pass primitive values, the function works with a value, which is a copy of the original value.

- When we pass an object, the function works with a value, which is a copy of the reference that address to the spot in the memory where the original object is in the memory (still is not a reference).
*/

/* 
Let's see if I can break this down into a more understandable format. In the end, it all comes down to how primitive types and reference types relate to the Call Stack and the Heap. I assume you're slightly familiar with the terms, as we went through them in detail, in Section 8: "How JavaScript Works Behind the Scenes".

In simple terms:

The Call Stack remembers identifiers, memory addresses, and values. An identifier points at an address that stores a value. Primitive types, like strings and numbers, are stored in the Call Stack.

The Heap, or memory heap, remembers addresses and values. Complex types, like objects and arrays, are stored in the Heap.

I'm using bold to signify terms on the Stack and Heap side, and italics to signify variables in our script.

Consider the following code:

let a = 30;
let b = a;
a = 31;
const obj = {first: 1, second: 2};
const obj2 = obj;
The JS engine will create an identifier, a, for our declared variable, a. Since we're assigning a primitive data type (number) it then creates a new memory address, 0001, and stores the value 30 there.

We can now use our variable a, which relates to identifier a, which points to memory address 0001, that stores the value 30.

Next, the engine creates an identifier, b, for our declared variable, b. For our value, we tell the engine to look for the variable a. The engine then finds the identifier a, looks at the memory addresses it points to, 0001, and sets this as the memory address identifier b points to.

Next line, we're assigning a new value to the existing variable a. The engine looks up the identifier a, points it at a new memory address, 0002, and stores the value 31 there.

On the following line, we declare a variable obj. The engine creates an identifier, obj, points it to a new memory address, 0003, and since the assignment is a new object, it reaches over to the Heap. There, it creates a new address, D30F, and stores the value {first: 1, second: 2} there. It then moves back to the stack and saves the address D30F as the value for address 0003.

At this point, it's worth mentioning that the heap remembers first and second as their own identifiers, pointing at their own memory addresses, let's call them D30F1 and D30F2, storing their own values.

Finally, we declare a new variable, obj2. The engine creates a new identifier, obj2 on the stack, looks at what address the obj identifier points to, and sets that as the address for obj2 to also point to.

So, obj and obj2 point to address 0003, which has stored the address D30F for the heap. Every time we use the obj or obj2 variables in our script, the engine will look at the heap for the values stored at that address. You could say that they both hold a reference to this value.

But, what happens if we now change the value of the .first-property of our obj2 ﻿object?

obj2.first = 3;
console.log(obj.first);
If you're following along, you probably noticed that this logged the number 3 to the console.

To understand this behavior, it is time for one last, ultimate plunge into the depths.

We tell the engine to look at the identifier of obj2. The engine detects that it points to address 0003, which stores an address, D30F, on the heap. It moves to the corresponding address on the heap and looks for the identifier first within it. It creates a new memory address for it to point to, D30F3, and stores the value 3 there. So, the value of D30F is now {first: 3, second: 2}. Do you see the issue here?

The identifier obj for our object obj, still points at the address 0003, which still stores the address D30F for the heap, which brings us to the value {first: 3, second: 2}, that has now wantonly been modified by another object, obj2.

That turned out to be quite the essay. I don't know if this brings you any clarity on the issue. But I sure hope so.
*/

// -------------------------- First Class and Higher-Order Functions-----------------

// Ctrl + End combination -> Go to end of file
// Ctrl + Home combination -> Go to beginning of file

// Article: https://dmitripavlutin.com/javascript-higher-order-functions/

/* 
First Class Functions - Theoretical concept that all functions are treated as values

Higher Order Functions - functions that receive and activate other functions.
Or return other functions.
*/

// -------------------------- Functions Accepting Callback Functions -----------------

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

// Useful article: https://stackoverflow.com/questions/1206911/why-do-i-need-to-add-g-when-using-string-replace-in-javascript#:~:text=The%20%22g%22%20that%20you%20are,the%20replacement%20string%20you%20provide.
// Toggle of word wrap shortcut => ALT + Z

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order Function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`); // name can be used in functions...
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

// JS uses callbacks all the time
const highFive = function () {
  console.log('🖐');
};
// document.body.addEventListener('click', highFive)
// highFive is a callback function, addEventListener is 'Higher-order Function'

['Jonas', 'Martha', 'Adam'].forEach(highFive);

// -------------------------- Functions Returning Functions-----------------
