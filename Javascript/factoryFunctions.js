// function to create objects for simpler, no duplicate, data privacy in inner function

const studentOne = {
  name: "Mohit",
  learning() {
    return `${this.name} is learning functions`;
  },
};

const studentTwo = {
  name: "Abhi",
  learning() {
    return `${this.name} is learning functions`;
  },
};

console.log(studentOne.learning());
console.log(studentTwo.learning());

studentTwo.name = `Ayush`;
console.log(studentTwo.learning());

function learnFactory(name) {
  return {
    learning() {
      return `Hi I am ${name} and learning functions.`;
    },
  };
}

const me = learnFactory("Mohit");
const student = learnFactory("Student");
console.log(me.learning());
console.log(me);
console.log(student.learning());

// Real Example

function createElement(type, text, color) {
  const el = document.createElement(type);
  el.innerText = text;
  el.style.color = color;
  document.body.append(el);
  return {
    el,
    setText(text) {
      el.innerText = text;
    },
    setColor(color) {
      el.style.color = color;
    },
  };
}

const h2 = createElement("h2", "Hello World!!", "blue");
const button = createElement("button", "click me", "red");
console.log(h2);
h2.setText = "Boye World";
button.setText = "Do not click";
console.log(button);
