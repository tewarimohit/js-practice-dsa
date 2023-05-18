// function Person(name) {
//   function sayHi() {
//     console.log(`Hello, I am ${name}`);
//   }

//   function sayHowYouFeel() {
//     console.log(`${name} is feeling Good!`);
//   }
//   // name in both the function sharing common value
//   //   sayHi();
//   //   sayHowYouFeel();

//   //   if i do not need to call it right away
//   return {
//     // made person an object to use functions later in time now Person is a factory function
//     sayHi,
//     sayHowYouFeel,
//   };
// }

// // need to have a outer function because to use it multiple times
// const mohit = Person("Mohit");
// const arun = Person("Arun");

// mohit.sayHi(); // sayHi function holds the value of name inside it even if we are not passing it.
// arun.sayHi();

// function clickHandler(size) {
//   return function () {
//     document.body.style.fontSize = `${size}px`;
//   };
// }

// document.getElementById("size-12").onclick = clickHandler(12);

// const liftOff = () => {
//   // setTimeout(() => {
//   //   set(name);
//   // }, 2000);
//   for (let initial = 10; initial >= 0; initial--) {
//     let timer = 10 - initial;
//     setTimeout(() => {
//       if (initial === 0) {
//         // return "Lift Off";
//         // console.log("Lift Off");
//       } else {
//         return initial;
//         // console.log(initial);
//       }
//     }, timer * 1000);
//   }
// };

// // const spaceship = liftOff();
// console.log(liftOff());

// async function getData() {
//   const resp = await fetch("https://global-warming.org/api/temperature-api");
//   const data = await resp.json();
//   console.log(data);
// }

// getData();
// async function getData() {
//   const resp = await fetch("https://global-warming.org/api/co2-api");
//   // It is expressed as a mole fraction in dry air, parts per million (ppm).
//   const data = await resp.json();
//   console.log(data);
// }

// getData();
// async function getData() {
//   const resp = await fetch(
//     "https://api.nasa.gov/planetary/apod?api_key=9TgWjlwbGT8oAeGrYwPv63veahX7Mkhf3k1btOBX"
//   );
//   // It is expressed as a mole fraction in dry air, parts per million (ppm).
//   const data = await resp.json();
//   console.log(data);
// }

// getData();
// async function getData() {
//   const resp = await fetch(
//     "https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=9TgWjlwbGT8oAeGrYwPv63veahX7Mkhf3k1btOBX"
//   );
//   // It is expressed as a mole fraction in dry air, parts per million (ppm).
//   const data = await resp.json();
//   console.log(data);
// }

// getData();

// const counter = () => {
//   let count = 1;
//   const innerCounter = () => {
//     count = count * 3;
//     console.log("count", count);
//   };
//   return innerCounter;
// };

// const firstTime = counter();
// console.log(firstTime());
// console.log(firstTime());
// const secondTime = counter();
// console.log(secondTime());

// const getOutput = (title, anyFunction) => {
//   anyFunction(title);
// };

// getOutput("Any Title", (a) => {
//   console.log(a);
// });

const radius = [3, 2, 4, 1];

// Higher order function polyfill
const myMap = (arr, callbackfunc) => {
  let newArray = [];
  for (let each of arr) {
    newArray.push(callbackfunc(each));
  }
  return newArray;
};

const calcArea = (val) => {
  return Math.PI * val * val;
};
const calcDiameter = (val) => val * 2;
const calcCircumference = (val) => Math.PI * 2 * val;

console.log(myMap(radius, calcArea));
console.log(myMap(radius, calcDiameter));
console.log(myMap(radius, calcCircumference));
