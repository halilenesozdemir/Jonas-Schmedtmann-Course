'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const day = `${date.getDate()}`.padStart(2, 0)
    const month = `${date.getMonth() + 1}`.padStart(2,0)
    const year = date.getFullYear();
    const displayDate = `${day}/${month}/${year}`;

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

//FAKE ALWAYS LOGGED IN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

//Create Current Date and Time

// const now = new Date();
// const day = `${now.getDate()}`.padStart(2, 0)
// const month = `${now.getMonth() + 1}`.padStart(2,0)
// const year = now.getFullYear();
// const hour = now.getHours();
// const min = now.getMinutes();
// labelDate.textContent = `${day}/${month}/${year}, ${hour}: ${min}`;

// day/month/year

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0)
    const month = `${now.getMonth() + 1}`.padStart(2,0)
    const year = now.getFullYear();
    const hour = `${now.getHours()}`.padStart(2,0);
    const min = `${now.getMinutes()}`.padStart(2,0)
    labelDate.textContent = `${day}/${month}/${year}, ${hour}: ${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);


  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////// //////////////
// LECTURES

//Numbers

/* console.log(23 === 23.0);

//Base 10 -> 0 to 9; 1/10 => 0.1 3/10 = 3.3333
// Binary base 2- 0,1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

console.log(Number('23'));
console.log(+'23');

//Parsing
console.log(parseInt('30px', 10));
console.log(parseInt('e23',10));


console.log(Number.parseInt('   2.5rem   '));
console.log(Number.parseFloat('   2.5rem '));

// console.log(parseFloat('   2.5rem '));

// Check if value is NaN
//Jonas don't prefer
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23/0));

//Checking if value is number
//Jonas'S prefer
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23/0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23/0));

// Square Root
console.log(Math.sqrt(25));
console.log(25 ** (1/2));
console.log(25 ** (1/3));

console.log(Math.max(5,18,23,11,2));
console.log(Math.max(5,18,'23p',11,2));

console.log(Math.min(5,18,23,11,2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) +1);

const randomInt = (min, max) => Math.floor(Math.random() * (max-min) + 1) +min;
// 0....1 => 0...(max-min) -> min...max

// console.log(randomInt(10,20));

// ROUNDING INTEGERS
console.log(Math.trunc(23.3));

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor('23.9'));

// 
// Negative numbers will be also rounded down. Not by the absolute value, though. So, you can’t just “cut by the decimal point” here.
console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

//Rounding Decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log(+(2.345).toFixed(2)); */

// Description to this 
// const randomInt = (min, max) => Math.floor(Math.random() * (max-min) + 1) +min;

/* 
There's a bug in the randomInt function, the min value will never be generated:

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) +1) + min; 
you can test with this:

let done = false;
let count = 0
while ((done === false && count < 1000)) {
  count++
  let val = randomInt(1, 6)
  console.log('random:', val)
  if ( val === 1) {
    done = true;
    console.log('Got a 1')
  } else {
    console.log('looping to get a 1')
  }
}
The correct version should be:

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min + 1)) + min; 
Sorry for the empty post before.

Thanks
*/

//MDN DOCUMENT: https://stackoverflow.com/questions/62981108/how-does-math-floormath-random-max-min-1-min-work-in-javascript


// --------------------The Remainder Operator ---------------

// console.log(5 % 2);
// console.log(5 /2); // 5 = 2*2 +1;
// console.log(8 % 3);
// console.log(8 / 3);
// console.log(6 % 2);
// console.log(6 / 2);

// const isEven = (n) => n % 2 === 0;
// console.log(isEven(8));
// console.log(isEven(23));
// console.log(isEven(28));



// labelBalance.addEventListener('click', function(){
// [...document.querySelectorAll('.movements__row')].forEach(function(row,i){
//   if(i % 2 === 0) row.style.backgroundColor = 'yellow'
//   if(i % 3 ===0 ) row.style.backgroundColor = 'blue'
// }
// )})
// hearing Nth time -> Good feature -> remainder

// -------------------- Numeric Separators ---------------

// 287,460,000,000
// const diameter = 287_460_000_000;
// console.log(diameter);

// const price = 345_99;
// console.log(price);

// const transferFee1 = 15_00;
// const transferFee2 = 1_500;

// const PI = 3.1415
// console.log(PI);

// console.log(Number('230000')); // It worked
// console.log(Number('230_000')); // NaN

// console.log(parseInt('230_000')); // 230 -> In front of the underscore

// -------------------- Working with BigInt ---------------
// console.log(2 ** 53 -1);
// console.log(Number.MAX_SAFE_INTEGER);
// If you pass this max safe value -> The numbers can't be represented accurately... Tested.
// console.log(2 ** 53 + 0);
// console.log(2 ** 53 + 1);
// console.log(2 ** 53 + 2);
// console.log(2 ** 53 + 3);
// console.log(2 ** 53 + 4);

// console.log(4544884888484848484848484848484848484848484848n);
// console.log(BigInt('4544884888484848484848484848484848484848484848'));

//Operations 
// console.log(10000n + 10000n);
// console.log(325352232323222323222323n * 1000000000000000000n);

// console.log(Math.sqrt(16n)); // Uncaught TypeError: Cannot convert a BigInt value to a number

// const huge = 2023230050023020552n;
// const num = 23;
// console.log(huge * num); // Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions

// console.log(huge * BigInt(num));

//Exceptions
// console.log(20n > 15); // true
// console.log(20n === 20); //false
// console.log(typeof 20n); //bigint
// console.log(20n == '20'); // true

// console.log(huge + ' is really big!!!! ' );

// Divisions
// console.log(10n / 3n); // Give a closest bigint 3n
// console.log(10 / 3);

// -------------------- Creating Dates ---------------

// Create a date
/* const now = new Date()
console.log(now);

console.log(new Date('Sep 15 2022 16:49:09'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 33));
console.log(new Date(2037, 10, 19, 15, 23, 5));

console.log(new Date(0));
console.log(new Date(3 * 24 *60 * 60 *1000)); */

// 3 * 24 *60 * 60 *1000  => Timestamp

// Working with Dates

/* const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear()); // Always use getFullYear() ****
console.log(future.getMonth()); // Months are zero based 
console.log(future.getDate()); // Day of the months
console.log(future.getDay()); // Day of the week -> 0:SUNDAY 4:THURSDAY
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime()); //timestamp

console.log(new Date(2142246180000));

console.log(Date.now()); // Şu anın timestamp'ını oluşturduk
console.log(new Date(1663254743504)); 

future.setFullYear(2040);
console.log(future); */

// -------------------- Adding Dates to 'Bankist' App  ---------------


















































