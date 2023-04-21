const person = {};
person.name = "Mohit";
person.age = 20;

const name = "Mohit";
// console.log(name.__proto__); // string inheriting from Object and name is inheriting from string

const friends = ["miku", "rinku"];
// console.log(friends.__proto__);

const me = Object.create(person);
me.isStudent = true;
me.age = 80;

const you = Object.create(me);
you.isStudent = false;
console.log(you.__proto__.__proto__.age); // up up and above proto to get 20

// prototype is the property on the constructor of class or function

// __proto__ is a property of every variable pointing to the parent Object that is inheriting from
// prototype is property on constructor function that contain all the stuff that will be inherited by its instance.

function Mo(name) {
  this.name = name;
}

const here = new Mo("Mohit");
console.log(here.__proto__);
console.log(Mo.prototype);
console.log(Mo.prototype === here.__proto__); //true
