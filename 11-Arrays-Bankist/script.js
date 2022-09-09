'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// Simple Array Methods

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c','d','e'];

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
arr = ['a', 'b', 'c','d','e'];
const arr2 = ['j','i','h','g','f']
console.log(arr2.reverse());
console.log(arr2);
// REVERSE METHOD DOES MUTATE THE ORIGINAL ARRAY... DON'T FORGET...

//CONCAT METHOD

const letters = arr.concat(arr2);
console.log(letters);
// console.log([...arr, ...arr2]);
// console.log(arr,arr2); 
//concat or spread -> It'S just a matter of personal preference...

//JOIN Method
console.log(letters.join(','));


// 143. The new at Method 









