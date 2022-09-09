// 'use strict';

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

// JS KARMAŞASI ARİN YAZILIM-> Tekrar...
// Parametre vs Argüman farkı ->
//  Parametre fonksiyonu oluştururken, argüman ise invoke ederken(çalıştırken ) kullanılır.

//First Class Functions

// const square = function (num) {
//   return num * num;
// };

// const myArr = [
//   6,'Arin',function () {console.log('Array Element');}]

//   myArr[2]();

//   const myObj = {
//     age:5,
//     name: 'Arin',
//     func(){console.log('Object Element');}
//   }
//   myObj.func();

//   console.log(20 + (function(){return 10;})() ); // IIFE



// const square = function (num) {
//   return num * num;
// };
// Function Expression is not Hoisted...

// -------------------------- Functions Accepting Callback Functions -----------------

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// Useful article: https://stackoverflow.com/questions/1206911/why-do-i-need-to-add-g-when-using-string-replace-in-javascript#:~:text=The%20%22g%22%20that%20you%20are,the%20replacement%20string%20you%20provide.
// Toggle of word wrap shortcut => ALT + Z

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// Higher-order Function
// const transformer = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`); // name can be used in functions...
// };

// transformer('Javascript is the best!', upperFirstWord);
// transformer('Javascript is the best!', oneWord);

// JS uses callbacks all the time
// const highFive = function () {
//   console.log('🖐');
// };
// document.body.addEventListener('click', highFive)
// highFive is a callback function, addEventListener is 'Higher-order Function'

// ['Jonas', 'Martha', 'Adam'].forEach(highFive);

// -------------------------- Functions Returning Functions-----------------

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')('Geir');

// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);
// greet('Hello')('Halil');

// -------------------------- The call and apply Methods-----------------

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   //  book: function(){}
//   book(flightNum, name) {
//     console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Jonas Wright');
// lufthansa.book(41, 'Enes Ozdemir');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
//   bookEW(flightNum,name){
//     console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
//     this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
//   }
// };

// eurowings.bookEW(23,'Halil')

// Call Method
// const book = lufthansa.book;

// Does NOT WORK
// book(23, 'Sarah Williams');

// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Airlines',
//   iataCode: 'LX',
//   bookings: [],
//   bookLX: function(flightNum,name){
//     console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
//     this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
//   }
// };

// swiss.bookLX(1241,'Ahmet Mercan')

// book.call(swiss, 25, 'Ahmet Mahmuti');
// console.log(swiss);

// Apply Method
// const flightData = [582123123, 'George Cooper'];

// book.call(swiss, ...flightData) =(aynı mantık) book.apply(swiss, flightData);
// ---Don't prefer the APPLY...
// WE PREFER THE CALL METHOD, If we have an array -> use Spread Operator.

// book.call(swiss, ...flightData);
// console.log(swiss);

// -------------------------- The bind Method -----------------

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX =book.bind(swiss)
// bookLH(544,'Halil Enes')

// const bookEW23 =book.bind(eurowings,23);
// bookEW23('Ahmet')
// bookEW23('Jonas Schmedtmann')
// console.log(bookEW);

// With Event Listeners;
// lufthansa.planes = 300;
// lufthansa.buyPlane = function (){
//   console.log(this);
//   this.planes++
//   console.log(this.planes);
// }
// lufthansa.buyPlane()

// document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa));

// Partial Applicaton

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1,200));

// const addVAT = addTax.bind(null, 0.23);
// // addVat = value => value + value * 0.23;
// console.log(addVAT(23));
// console.log(addVAT(100));

// With Functions returning function method (No bind)

// const addTaxRate = function(rate) {
//   return function(value){
//     return (`${value + value * rate}`);
//   }
// }

// const specifyRate = addTaxRate(0.1);
// console.log(specifyRate(100));
// console.log(specifyRate(23));

// -------------------------- Coding Challenge #1 -----------------
/* 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.
Your tasks:

// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)


2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?


Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section 😉
*/

// Nice solution -->

// const poll = {
// question: "What is your favourite programming language?",
// options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
// // This generates [0, 0, 0, 0]. More in the next section!
// answers: new Array(4).fill(0),

// registerNewAnswer(){
//   const newAnswer = prompt('What is your favourite programming language? \n 0: JavaScript \n 1: Python \n 2: Rust \n 3: C++ \n ');

//   if(newAnswer === '0'){
//     poll.answers[0]++;
//     poll.displayResults()
//   } else if(newAnswer === '1'){
//     poll.answers[1]++;
//     poll.displayResults();
//   } else if (newAnswer === '2'){
//     poll.answers[2]++;
//     poll.displayResults();
//   } else if (newAnswer === '3'){
//     poll.answers[3]++;
//     poll.displayResults();
// } else if(
//   newAnswer !== '0' &&  newAnswer !== '1' && newAnswer !== '2' && newAnswer !== '3'
// ){
//   alert('Please choose a number between 0 and 3')
// }
// this.displayResults();
// this.displayResults('string'); 
//   },

//   displayResults(type = 'array'){
//     if(type === 'array') console.log(this.answers);
//     else if(type ==='string') console.log(`Poll results are ${this.answers.join(",")}`);
//   },
// };

// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));
// poll.displayResults.call({answers: [5,2,3]})

// Jonas's Solution

// const poll = {
// question: "What is your favourite programming language?",
// options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
// // This generates [0, 0, 0, 0]. More in the next section!
// answers: new Array(4).fill(0),
// registerNewAnswer(){
//   const answer = Number( prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
//   console.log(answer);
  //Register answer
// typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++
// this.displayResults()
// this.displayResults('string')


// },
// displayResults(type = 'array'){
//   if(type === 'array'){
//     console.log(this.answers);
//   } else if(type === 'string'){
//     // Poll results are 13,2,4,1
//     console.log(`Poll results are ${this.answers.join(',')}`);
//   }
// }

// }
// poll.registerNewAnswer()

// document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll));

// Bonus Part

// poll.displayResults.call({answers:[5, 2, 3] })
// poll.displayResults.call({answers:[1, 5, 3, 9, 6, 1] }, 'string')
// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]


  // -------------------------- Immediately Invoked Function Expressions(IIFE) -----------------

  // const runOnce = function(){
  //   console.log('This will never run again');
  // };
  // runOnce();

  // IIFE
//  (function(){
//     console.log('This will never run again');
//     const isPrivate = '23'
//   })();

//   (() => console.log('This will ALSO never run again'))();

//   {
//     const isPrivate = 23;
//     var notPrivate = 46;
//   }
//   // console.log(isPrivate);
//   console.log(notPrivate);

// Arin Yazılım (IIFE)

//  (function(){
//     console.log(5 + 12);
//   })()

  // Function statements require a function name  -> Function'u görünce isim arıyor 
  // function square(num){} -> Function Declaration

  // sum();
  // Neden Undefined oldu? ->Anlaşıldı :)



  // Before Closure, I get to repeat related topics what understand easily the closures.
  // Scope Chain Practises

      // -------------------------- Scope Chain Practises -----------------------------

      function calcAge( birthYear){
        const age = 2037 - birthYear;

        function printAge(){
          const output = `${firstName} You are ${age}, born in ${birthYear}`
          console.log(output);

          if(birthYear >= 1981 && birthYear <= 1996){
            var millenial = true; // Var is function scoped and not BLOCK SCOPED. Ignore the blocks just like if,for,while etc.

            // Creating NEW variable with same name as outer scope'S variable
            const firstName = 'Steven'

            // Reassigning outer scope's variable
            output = 'NEW OUTPUT'

            const str = `Oh  and you're a millenial, ${firstName}`
            console.log(str);

              // Functions are block scoped, but remember that that is only true for strict mode.
            function add(a,b){
              return a+ b
            }

          }
        // add(3,4) // ReferenceError: add is not defined in the strict mode
        //  console.log(add(3,4));  // without strict mode -> answer is 7, but we have to use 'Strict mode'...
          //  console.log(str);
          console.log(millenial);

        }


        printAge();
        return age;
      }

      const firstName = 'Jonas';
      calcAge(1991);

 




























    // -------------------------- Closures -----------------------------

    // const secureBooking = function(){
    //   let passengerCount = 0;

    //   return function(){
    //     passengerCount++
    //     console.log(`${passengerCount} passengers`);
    //   }
    // }

    // const booker = secureBooking(); 

  

















