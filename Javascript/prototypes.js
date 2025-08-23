const Student = {};
console.log(Student);
Student.name = `Seedha Baccha`;
Student.age = 24;
console.log(Student); // Prototype Object
console.log(Student.toString);
console.log(Student.valueOf);

const fruits = [`Avocado`, `Mango`, `Blueberry`];
console.log(fruits); // Prototype Array

const myName = "Mohit";
console.log(myName.__proto__); // Prototype String

const Id = Object.create(Student);
// Id.__proto__.class = "playgroup"; // inside student
Id.class = "play";
Id.age = 45;
// basket.vegetables = ["beans", "carrot", "cabbage"];
console.log(Id.__proto__.age); // will check proto 2-3 levels down and give undefined

function friendName(name) {
  this.name = name;
}
const my = new friendName("Mohit");

console.log(friendName.prototype);
console.log(my.__proto__);
console.log(friendName.prototype === my.__proto__); // same but from different point
