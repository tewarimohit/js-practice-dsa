// Anynomous functions function(){} assigned to variable usually
//  callback setTimeout(function(){},)
// Named functions ie factory or constructor functions
// Object methods function within object
// not to use with constructors, eventhandlers,object methods, prototypes.

const hello = function () {
  console.log(arguments);
};

const sayHello = (firstname) => `Hello, ${firstname}`; // cannot log out arguments

console.log(sayHello("Mohit"));
hello("mohit", 16, "boy"); // this can't be done with arrow functions

// this kwyword (object don't create binding with this functions do)

const me = {
  name: "Mohit",
  learn: function () {
    return this;
  },
  //   arrowLearn:this, this will point to window
  arrowLearn: () => {
    // this binding doesn't happen
    return this;
  },
  talk() {
    setTimeout(() => {
      console.log(this.name); // here function binds with this but object dont
    }, 5000);
  },
};

console.log(me.arrowLearn());
console.log(me.talk());

function outer(callback, obj) {
  return callback.bind(obj)();
}

function inner() {
  console.log(this);
}

outer(inner, { name: "Mohit" });
