//  In Javascript, any function can return a new Object. If it's not constructor function or class, then it is called a factory function. - Eric Elliot

// Doesn't change all instances proto is not changed, flexible, data privacy

// ex

// function createPerson(name) {
//   return {
//     getName() {
//       return `Hi, I am ${name}`;
//     },
//   };
// }

// const Richi = createPerson("Richi Rich");
// console.log(Richi.getName()); // Here name is Hidden..

function factoryStudent(name) {
  return {
    name,
    learning() {
      return `I am ${this.name} and learning.`;
    },
  };
}

const Mohit = factoryStudent("Mohit");
const Aman = factoryStudent("Aman");

console.log(Mohit.learning());
console.log(Aman.learning());

Mohit.learning = function () {
  return `Hello, I am ${this.name}`; // doesnt work in fat notation
};

console.log(Mohit.learning());
console.log(Aman.learning());

const myProto = {
  intro() {
    return `Hello, My name is ${this.name}`;
  },
};

function personName(name) {
  return Object.create(myProto, {
    name: {
      value: name,
    },
  });
}

const me = personName("Mohit"); // intro inside prototype
console.log(me);

// Constructor function

function Person(name) {
  return (this.name = name);
}

const Benno = new Person("Benno");
console.log(Benno);
Person.prototype.learn = function () {
  return `Hi ${this.name} is learning..`; // will always inherit on all instances
};

console.log(Benno.learn());

console.log(Benno.learn);
