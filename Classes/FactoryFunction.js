//  Function that creates object and returns them
// Simple, no duplicate, data privacy
function PersonFactory(name) {
  return {
    intro() {
      return "Hello my name is " + name;
    },
  };
}

const mohit = new PersonFactory("Mohit");
console.log(mohit.intro());

const rohit = new PersonFactory("Rohit");
console.log(rohit.intro());

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

const para = createElement("h1", "How are ya", "red");
console.log(para);
