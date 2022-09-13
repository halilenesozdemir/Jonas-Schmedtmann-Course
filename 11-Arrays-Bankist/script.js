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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const accounts = [account1, account2, account3, account4];

// // Elements
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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
    // if you use beforenend, the indexes are reversed...
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance} EUR`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements.filter((mov) => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} € `;

  const out = acc.movements.filter((mov) => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)} € `;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map((item) => item[0])
      .join('');
  });
};

createUserNames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  //Display balance
  calcDisplayBalance(acc);
  //Display summary
  calcDisplaySummary(acc);
};
// console.log(accounts);

// const html = `
// <div class="movements__row">
//   <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
//   <div class="movements__value">${mov}</div>
// </div>
// `

// containerMovements.insertAdjacentHTML('afterbegin',html)
// // if you use beforenend, the indexes are reversed...

// ---------------------- IMPLEMENTING LOGIN  ----------------------

//Event Handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find((acc) => acc.username === inputLoginUsername.value);
  console.log(currentAccount);
  // console.log(currentAccount.owner);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and Message
    console.log('LOGIN');
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

// ---------------------- IMPLEMENTING TRANSFERS  ----------------------

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find((acc) => acc.username === inputTransferTo.value);
  console.log(receiverAcc, amount);
  //Clean fields
  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some((mov) => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  // inputClosePin.blur();
  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    inputCloseUsername.value = inputClosePin.value = '';
    const index = accounts.findIndex((acc) => acc.username === currentAccount.username);
    //Alternative
    // const index = accounts.indexOf(currentAccount);
    console.log(index);

    //Delete Account
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// Minnak Uğraşmalar

// const displayDeposits = function(movements){
//   labelSumIn.innerHTML = '';
//  const sumOfDeposits = movements.filter((mov) => mov > 0 )
//  .reduce((acc,mov) =>  acc + mov,0)
//    labelSumIn.innerHTML = `${sumOfDeposits}€ `
// }
// // const deposits = displayDeposits(movements)
// // console.log(deposits);
// displayDeposits([200, 450, -400, 3000, -650, -130, 70, 1300])

// const displayWithDrawal = function(movements){
//   labelSumOut.innerHTML = '';
//  const sumOfDeposits = movements.filter((mov) => mov < 0 )
//  .reduce((acc,mov) =>  acc + mov,0)
//    labelSumOut.innerHTML = `${sumOfDeposits}€ `
// }
// // const deposits = displayDeposits(movements)
// // console.log(deposits);
// displayDeposits([200, 450, -400, 3000, -650, -130, 70, 1300])
// displayWithDrawal([200, 450, -400, 3000, -650, -130, 70, 1300])

// calcDisplaySummary(account1.movements)

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

// console.log(movementsDescriptions)

// ---------------------- Filter Method ----------------------

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//   const deposits = movements.filter(function(mov){
//     return mov > 0;
//   })

//   console.log(deposits);
//   console.log(movements);

// const depositsFor = [];
//   for(const mov of movements) if(mov > 0) depositsFor.push(mov);
//   console.log(depositsFor);

// const withdrawal = movements.filter(function(mov){
// return mov <0;
// })
// console.log(withdrawal);

// const withdrawFor = [];

// for(const mov of movements) if(mov < 0) withdrawFor.push(mov)
// console.log(withdrawFor);

// const withdrawal = movements.filter((mov) => mov < 0);
// console.log(withdrawal);

// ---------------------- Reduce Method ----------------------

// console.log(movements);
// accumulator -> SNOWBALL
// const balance = movements.reduce(function(acc,cur,i ,arr){
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur
// }, 0)
// console.log(balance);

// Arrow Function state...
// const balance = movements.reduce((acc,cur) => acc + cur,0)
// console.log(balance);

// let balance2= 0;
// for(const mov of movements) balance2 += mov;
// console.log(balance2);

//Maximum Value
// const max = movements.reduce((acc,mov) => {
//   if(acc > mov)
//   return acc
//   else
//   return mov;
// }, movements[0]) // Don't just put 0 -> Put array's first element.

/* 
if we don't supply the initial value of the accumulator to reduce() method, it will be the value of the first element in the array and iteration will start from the second element.
Just wanted to share, maybe someone can benefit.
*/

// const max = movements.reduce((acc,mov) => {
//   if(acc > mov)
//   return acc
//   else
//   return mov;
// },) // SAME RESULT : 3000

// Another solution
// const max = movements.reduce((acc, el) => Math.max(acc, el), movements[0]);

// console.log(max);

// ---------------------- The Magic of Chaining Methods  ----------------------

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//  const eurToUsd= 1.1;
// // PIPELINE
// const sumOfEuro = movements.filter((mov) => mov > 0 )
// // .map((mov) => mov * eurToUsd)
// .map((mov ,i ,arr) =>{
//   // console.log(arr);
// return mov * eurToUsd
// } )

// .reduce((acc,mov) => acc + mov,0 );

// console.log(sumOfEuro);

// ---------------------- Coding Challenge #2  ----------------------

// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

// const calcAverageHumanAge = function(ages){
// //   let humanAge;
// //  ages <= 2 ? humanAge = 2 * ages : humanAge = 16 + ages*4
// const humanAges = ages.map((age ) => age <= 2 ? 2*age : 16+4*age);
// console.log(humanAges);

//  const upper18 = humanAges.filter((humanAge) => humanAge > 18 )
// console.log(upper18);

// // console.log(movements);
// // accumulator -> SNOWBALL
// // const balance = movements.reduce(function(acc,cur,i ,arr){
// //   console.log(`Iteration ${i}: ${acc}`);
// //   return acc + cur
// // }, 0)
// // console.log(balance);

// // Arrow Function state...
// // const balance = movements.reduce((acc,cur) => acc + cur,0)
// // console.log(balance);

// const average = upper18.reduce((acc,age)=> acc + age,0)
// console.log(average / upper18.length)

// }
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])

// const calcAverageHumanAge = function(ages){
//   const humanAges = ages.map((age) => age <= 2 ? 2 * age : 16 + age * 4 )
// console.log(humanAges);
//   const adults = humanAges.filter(age => age >= 18)
//   console.log(adults);

//   // const average = adults.reduce((acc,age) => acc + age,0) / adults.length;
//   // return average;

//      const average = adults.reduce((acc,age,i,arr) => acc + age /arr.length,0)
//    return average;
// }
// const avg1= calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
// const avg2= calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])
// console.log(avg1,avg2);

// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages
//     .map(ages => (ages <= 2 ? (ages = 2 * ages) : (ages = 16 + ages * 4)))
//     .filter(ages => ages > 18)
//     .reduce((acc, ages, _, arr) => acc + ages / arr.length, 0);
//   return humanAge;
// };
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// ---------------------- Coding Challenge #3  ----------------------

// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
// Test data:

// const calcAverageHumanAge = function(ages){
// const humanAges = ages.map((age) => (age <=2) ? age * 2 : 16 + age*4 )
// .filter((age) => age > 18 )
// .reduce((acc,age,i,arr) => acc + age /arr.length,0)
// return humanAges
// // Bu metodda adults.length yaklaşımı geçersizdir....

// }

// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// const calcAverageHumanAge = function(dogAge){
//   const x = dogAge.map((cur)=>{
//  if (cur <=2 ){
//       return cur * 2
//     }else {
//       return 16 + cur * 4
//     }
//   })
//   .filter((cur)=>{
//     if (cur >= 18) {
//       return cur
//     }
//   }).reduce((acc, cur, i, arr)=>{
//     return acc+ cur /arr.length
//   }, 0)
//   return x
// }
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]))

// ---------------------- The Find Method  ----------------------

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const firstWithdrawal = movements.find((mov) => mov < 0);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find((acc) => acc.owner === 'Jessica Davis');
// console.log(account);

// My For-of Solution

// for (const acc of accounts) {
//   if (acc.owner === 'Jessica Davis') console.log(acc);
// }

//Different solutions

//As soon as account we are looking for is found, break the for loop
// let accountfor;
// for (const account of accounts) {
//   if (account.owner === 'Jessica Davis') {
//     accountfor = account;
//     break;
//   }
// }
// console.log(accountfor);

// ---------------------- some and every   ----------------------

//EQUALITY

// console.log(movements.includes(-130));

//SOME: CONDITION
// console.log(movements.some((mov) => mov === -130));

// const anyDeposits = movements.some((mov) => mov > 0);
// console.log(anyDeposits);

//EVERY: CONDITION

/* const everyFunction = function (movs) {
  return movs.every((mov) => mov > 0);
};

console.log(everyFunction(account4.movements)); */

//Seperate callback
// const deposit = (mov) => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// ---------------------- flat and flatmap method   ----------------------

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// Minnak Çalışmalara Devam -> Googling

// let allMovements = [];
// for (let i = 0; i < accounts.length; i++) {
//   allMovements.push(accounts[i].movements);
// }
// console.log(allMovements);

// const merge2 = allMovements.flat();
// console.log(merge2);

// const merged = [].concat.apply([], allMovements);
// console.log(merged);

// Flat method continue (Jonas)

// const accountMovements = accounts.map((acc) => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// // console.log(merged);
// const overallBalance = allMovements.reduce((acc, movs) => acc + movs, 0);
// console.log(overallBalance);

//flat
// const overallBalance = accounts
//   .map((acc) => acc.movements)
//   .flat()
//   .reduce((acc, movs) => acc + movs, 0);

// console.log(overallBalance);

//flatMap

// const overallBalance2 = accounts.flatMap((acc) => acc.movements).reduce((acc, movs) => acc + movs, 0);

// console.log(overallBalance2);

// ---------------------- Sorting Arrays   ----------------------

// built-in sort method mutates the original array. We have to be very careful with this method.

// Strings

// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());

// // Numbers
// console.log(movements);
// // console.log(movements.sort());

// // return < 0, A, B (KEEP ORDER)
// //return > 0 B,A (SWITCH ORDER)

// //Ascending

// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (b > a) return -1;
// // });
// // console.log(movements);

// movements.sort((a, b) => a - b);
// console.log(movements);

// //Descending
// // movements.sort((a, b) => {
// //   if (a > b) return -1;
// //   if (b > a) return 1;
// // });
// movements.sort((a, b) => b - a);
// console.log(movements);

//Please don't this sort method mixing cases. (Contains String + Numbers)
