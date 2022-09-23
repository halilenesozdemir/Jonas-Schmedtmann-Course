'use strict';

///////////////////////////////////////
// Modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
//////////////////////////////////////////////
// Button scrolling

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect()); // basically relative your viewport

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log('height/width', document.documentElement.clientHeight, document.documentElement.clientWidth);

  Scrolling;
  window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);

  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });

  section1.scrollIntoView({ behavior: 'smooth' });
});
////////////////////////////////////////////////
//Page Navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
// el.addEventListener('click', function (e) {
//   e.preventDefault();
//     const id = this.getAttribute('href');
//     // console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. Add event listener to common parent element
// 2.Determine what element originated the event

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   e.preventDefault();

//   // Matching strategy
//   if (e.target.classList.contains('nav__link')) {
//     const id = e.target.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   }
// });

// Selecting Elements
// Generally we use dqs, dqsa with nodelist...
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn')); // html collections -> Dynamically updated

// Creating and inserting elements
// .insertAdjacentHTML

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics';
// message.innerHTML =
//   'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message);l
// header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

//Delete elements.
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     // message.remove();
//     message.parentElement.removeChild(message);
//   });

// Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';
// console.log(message.style.color);
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// // Attributes
// const logo = document.querySelector('.nav__logo');

// console.log(logo.className);
// console.log(logo.alt);

// logo.alt = 'Beautiful minimalist logo';

// Non-standard
// console.log(logo.designer); // This is not expected from images
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');

// console.log(logo.src);
// console.log(logo.getAttribute('src'));

/* const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));
 */
// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// document.documentElement === document.querySelector('html');

// Data attributes
// console.log(logo.dataset.versionNumber);  //3.0

// Classes
// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c'); // not includes

// Don't use
// logo.className = 'jonas';

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);

// console.log(e.target.getBoundingClientRect()); // basically relative your viewport

// console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

// console.log('height/width', document.documentElement.clientHeight, document.documentElement.clientWidth);

// Scrolling
// window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);

// window.scrollTo({
//   left: s1coords.left + window.pageXOffset,
//   top: s1coords.top + window.pageYOffset,
//   behavior: 'smooth',
// });

//   section1.scrollIntoView({ behavior: 'smooth' });
// });

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading :)');
// };
// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

//Don't use...

// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great! You are reading the heading :)');
// };

// Coming from comments and good tip..

// h1.addEventListener(
//   'click',
//   function () {
//     console.log('Only once');
//   },
//   { once: true }
// );

//----------------------- Event Propagation in Practice---------------

//  rgb(255,255,255);
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   // STOP PROPAGATION
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('container', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('nav', e.target, e.currentTarget);
//   },
//   false // see the capturing phase, by default third parameter is false.
// );

//------------------------DOM TRAVERSING ------------------------

/* const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'black';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children); // All of them siblings...

//A bit of fun :)
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(1)';
// }); */

//Tabbed Component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// Bad Practise

// tabs.forEach((t) => t.addEventListener('click', () => console.log('TAB')));


// Event delegation

tabsContainer.addEventListener('click', function(e){
  const clicked = e.target.closest('.operations__tab')
  console.log(clicked);

// Guard Clause
  if(!clicked) return;
  // Alternative
  // clicked?.classList.add('operations__tab--active');


  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'))

  tabsContent.forEach(c => c.classList.remove('operations__content--active'))

  //Activate Tab
    clicked.classList.add('operations__tab--active')


  //Activate content area
  // console.log(clicked.dataset.tab);
document.querySelector(`.operations__content--${clicked.dataset.tab}`)
.classList.add('operations__content--active'); 


})

// Menu Fade Animation
// Mouseenter event does not bubble... That's why we use mouseover just like similar mouseenter function.
// Opp => mouseover = mouseout, mouseenter => mouseleave

const handleHover = function(e){
  // console.log(this,e.currentTarget);
if(e.target.classList.contains('nav__link')){
  const link = e.target;

  const siblings = link.closest('.nav').querySelectorAll('.nav__link');
  const logo = link.closest('.nav').querySelector('img');

  siblings.forEach(el => {
    if(el !== link) el.style.opacity = this;
  });
  logo.style.opacity = this;
}

}

// nav.addEventListener('mouseover', function(e){
//   handleHover(e, 0.5)
// })

// PASSING IN 'ARGUMENT' into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));

// Nice tip
//   The first method is more specific. 
// It will select nav_links in the nav that contains this exact link.
// The second one could select whatever element with a "nav" class.

// const siblings = link.closest('.nav').querySelectorAll('.nav__link')
//   instead of const siblings = nav.querySelectorAll('.nav__link').

nav.addEventListener('mouseout', handleHover.bind(1)
)



