// creates objects for us. convention is starts with uppercase

function Person(name, age, isLearning) {
  this.name = name;
  this.age = age;
  this.isLearning = isLearning;
  this.learning = () => {
    return `Hi I am ${this.name} and ${this.isLearning} learning...`;
  };
}
// single function many use..
const Mohit = new Person("Mohit", 24, "Yes");
console.log(Mohit.learning());
const Arun = new Person("Arun", 43, "No");
console.log(Arun, Arun.learning());

// Dom

function NewElement(type, content, color) {
  this.el = document.createElement(type);
  this.el.innerText = content;
  this.el.style.color = color;
  document.body.append(this.el);
  this.el.addEventListener("click", () => {
    console.log(this.el);
  });
}

const p = new NewElement("p", "How are you Doing..", "Blue");
const h1 = new NewElement("h1", "This is heading", "Green");

const array = ["Hello", "What", "Cyaa"];
const elements = array.map((each) => new NewElement("h2", each, "Violet"));
