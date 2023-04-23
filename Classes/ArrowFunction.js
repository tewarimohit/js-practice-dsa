// short and cool
// Binding with this

const me = {
  name: "Mohit",
  talk() {
    return this;
  },
  //   arrowTalk: this //  this inside arrow function is equvelent to this this.
  arrowTalk: () => {
    return this;
  },
  setTalk() {
    console.log(`I am ${this.name} binded by the function setTalk`);
    setTimeout(() => {
      console.log(this.name);
    }, 2000);
  },
};

console.log(me.talk()); // returns object me as function talk binds this to object me.
console.log(me.arrowTalk()); // returns window obj it is because this will inside arrow fn same as outside arrow function simple this
// it is the function creates binding with this not objects.

console.log(me.setTalk());

// Arrow function does not create its own execution context it uses this wherever it was created.
// don't use in constructor functions.
// Object methods
// Prototypes
// Event handlers

function outer(callback, obj) {
  callback.call(obj);
  //   callback();
}
function inner() {
  console.log(this);
}

outer(inner, { name: "Mo" });
