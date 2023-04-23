//  creates Objects for us.

function Person(name) {
  // const this={}  //behind the scenes
  this.name = name;
  this.greet = () => {
    return `Hey I am ${this.name}`;
  };
  //   return this  //behind the scenes
}

const mohit = new Person("Mohit"); // new keyword creates an object inside function this and returns it.
const rohit = new Person("Rohit");
const amit = new Person("Amit");
console.log(mohit.greet());
console.log(rohit.greet());
console.log(amit.greet());

function SuperElement(type, content) {
  this.el = document.createElement(type);
  this.el.innerText = content;
  document.body.append(this.el);
  this.el.addEventListener("click", () => {
    console.log(this.el);
  });
}

const array = ["a", "b", "c"];

const elements = array.map((item) => {
  return new SuperElement("p", item);
});
// console.log(elements);

const coolPrototype = {
  greet() {
    return `This is ${this.name}`;
  },
};
// use like this don't change prototype
function Persona(name) {
  return Object.create(coolPrototype, {
    name: { value: name },
  });
}

const me = new Persona("Mohit");

console.log(me);
