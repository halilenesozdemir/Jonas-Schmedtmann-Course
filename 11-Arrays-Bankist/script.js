'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// Simple Array Methods

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c','d','e'];

// SLICE METHOD

// Slice methods returns a new array. Don't mutate the original array...
// console.log(arr.slice(2));  
// console.log(arr.slice(2,4));  // Index 4 is not included... length === 4-2!!!
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1,-2)); // ['b', 'c'] -> excepts lsat 2 elements(end parameter)

// Which one is correct! Both of them and choose sth. It's up to you.
// console.log(arr.slice()); // shallow copy method
// console.log([...arr]); 

// SPLICE METHOD

// console.log(arr.splice(2)); 
// console.log(arr); // OOOPS
// (3) ['c', 'd', 'e'] -> Takes this part and deleted from original array.
// (2) ['a', 'b']  /// New array, remaining array, poor array :)

// arr.splice(-1);
// console.log(arr);

// arr.splice(1,2);
// console.log(arr); // MDN   splice(start, deleteCount) -> Important

// REVERSE METHOD
// arr = ['a', 'b', 'c','d','e'];
// const arr2 = ['j','i','h','g','f']
// console.log(arr2.reverse());
// console.log(arr2);
// REVERSE METHOD DOES MUTATE THE ORIGINAL ARRAY... DON'T FORGET...

//CONCAT METHOD

// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);
// console.log(arr,arr2); 
//concat or spread -> It'S just a matter of personal preference...

//JOIN Method
// console.log(letters.join(','));


// ------------------------143. The new at Method ----------------------

// const arr = [23,11,64];
// console.log(arr[0]);
// console.log(arr.at(0));

// //getting last array element
// console.log(arr[arr.length-1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log('jonas'.at(0));
// console.log('jonas'.at(-1));

// ---------------------- 144. LOOPING ARRAYS: forEach ----------------------

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for(const movement of movements)

// for (const [i, movement] of movements.entries()){
//   if(movement>0){
//     console.log(`Movement ${i+1} You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i+1} You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('-------- forEach ---------');

// movements.forEach(function(mov,i,arr){
//   if(mov>0){
//     console.log(`Movement ${i+1} You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i+1} You withdrew ${Math.abs(mov)}`);
//   }
// })

//0: function(200)
//1: function(450)
// 2: function(400)
// ...

// ----------------------145. ForEach With Maps and Sets ----------------------

//MAP

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value,key,map){
// console.log(`${key}: ${value}`);
// })

// //SET
// const currenciesUnique = new Set(['USD','GBP','USD','EUR','TL','EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function(value,_,set) // _value -> throwaway variable, completely unnecessary...
// {
// console.log(`${value}: ${value}`);
// })

// ----------------------146. Project Bankist App ----------------------

// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// const displayMovements = function(movements){
//   containerMovements.innerHTML = ''
//   movements.forEach(function(mov,i,){
//     const type = mov > 0 ? 'deposit' : 'withdrawal'

//     const html = `
//     <div class="movements__row">
//       <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
//       <div class="movements__value">${mov}</div>
//     </div>
//     `

//     containerMovements.insertAdjacentHTML('afterbegin',html)
//     // if you use beforenend, the indexes are reversed...
  
// })
// }
// displayMovements(account1.movements)

const createUserNames = function (accs){
accs.forEach(function(acc){
  acc.username = acc.owner
  .toLowerCase()
  .split(' ')
  .map((item) => item[0] )
  .join('')
});
};

createUserNames(accounts)
console.log(accounts);






// ---------------------- Coding Challenge #1  ----------------------

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
🐶
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far 😉

*/

// const juliaData = [3, 5, 2, 12, 7]
// const kateData = [4, 1, 15, 8, 3]

// const errorJuliaData = juliaData.slice();
// // console.log(errorJuliaData.slice(1,errorJuliaData.length-1));
// const correctedJuliaData = errorJuliaData.slice(1,errorJuliaData.length-1)

// const allDogs = [...correctedJuliaData,...kateData]
// // console.log(allDogs);

//   const dogsJulia =[3, 5, 2, 12, 7];
//   const dogsKate = [4, 1, 15, 8, 3];

// const checkDogs = function(dogsJulia,dogsKate){
//   const errorJuliaData = dogsJulia.slice();
//   const correctedJuliaData = errorJuliaData.slice(1,-3)

//   const allDogs = [...correctedJuliaData,...dogsKate];


// allDogs.forEach(function(age,i){
//   if(age >= 3) console.log(`Dog number ${i+1} is an adult, and is ${age} years old`);
//   else  console.log(`Dog number ${i+1} is still a puppy 🐶`);
// });

// // return allDogs;

// }

// const total = checkDogs(dogsJulia,dogsKate);

// ---------------------- The map Method  ----------------------

//  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd= 1.1;

// const movementsUSD = movements.map(mov => mov * eurToUsd)
// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];

// for(const mov of movements) movementsUSDfor.push(mov * eurToUsd)
// console.log(movementsUSDfor);

// const movementsDescriptions = movements.map((mov,i) => 
//  `Movement ${i+1} You ${mov> 0  ? 'deposited' : 'withdrew' } ${Math.abs(mov)}`
// )

// console.log(movementsDescriptions);



































