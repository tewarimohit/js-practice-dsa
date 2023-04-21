// Inheritance done in JS is through objects i.e prototypal inheritance

// class Person {
//   talk() {
//     return "How are you!!";
//   }
// }

// const me = new Person(); // instance of class person
// const you = new Person(); // instance of class person
// console.log(me.__proto__);
// console.log(Person.prototype);
// console.log(Person.prototype === me.__proto__); // true
// console.log(Person.prototype === you.__proto__); // true
// console.log(me.talk());

// me.__proto__.talk = function () {
//   return "Yeah";
// };
// console.log(me.talk());
// console.log(you.talk());

// behind the scene

// function Person() {}

// Person.prototype.talk = function () {

//   return "Talking";
// };

// const me = new Person();
// console.log(Person.prototype);
// console.log(me.__proto__);

function Person() {
  // constructor function
  this.talk = function () {
    return "Talking"; // will be considerd as property of Person not Method
  };
}
const me = new Person();

Person.talk = function () {
  return "How are you?";
};

console.log(me.talk()); // not got modefied talk here is only a property in Person not inheritance
console.log(Person.talk());

// Properties i have
// method i do behaviour

class SuperHuman extends Person {
  fly() {
    return "I can fly!!";
  }
}

const you = new SuperHuman();
console.log(you.talk());
console.log(you.fly());

// with the help of objects

const person = {
  talk() {
    return "Get talking";
  },
};

// const mee = Object.create(person);
// or
const mee = {};
Object.setPrototypeOf(mee, person);
console.log(mee.talk());
