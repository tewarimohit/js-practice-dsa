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

function outer() {
  let a = 40;
  function inner() {
    console.log(a);
  }

  a = 100;
  return inner;
}

const returned = outer();
console.log(returned());

// fgdfsgdfgdfg

const miku = outer();
console.log(miku(), "here");
