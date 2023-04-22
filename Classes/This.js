function talk() {
  return `I AM ${this.name}`;
}

const me = {
  name: "Mohit",
};
const you = {
  name: "Charlie",
  talk,
};

// Function.prototype.bind // has many methods
const talkMe = talk.bind(me); // what this will do is bind this function's this with object passed inside bind
// me will be used as value of this inside talk function
console.log(talkMe());
// or

console.log(talk.bind(me)()); // gives a function
// or

console.log(talk.call(me)); //directly calls

// console.log(me.talk());
console.log(you.talk());

// function heyTalk(lang, isPolite) {
//   if (isPolite) {
//     if (lang === "en") {
//       return `Hello, I am ${this.name}`;
//     }
//     if (lang === "ru") {
//       return `привет, я ${this.name}`;
//     }
//   } else {
//     if (lang === "en") {
//       return `I am ${this.name}`;
//     }
//     if (lang === "ru") {
//       return `я ${this.name}`;
//     }
//   }
// }

// console.log(heyTalk.bind(me, "en")());
// console.log(heyTalk.call(me, "ru"));
// console.log(heyTalk.apply(me, ["ru", true]));

// Constructor function automatically creates the binding

function Person(n) {
  this.name = n;
  this.talk = function () {
    // auto binding
    console.log(this);
  };

  //   setTimeout(
  //     // for callback function auto binding doesn't happen so there is a need to bind them otherwise this will refer to window object
  //   from here
  //    function () {
  //       console.log(this);
  //     }
  //     to here there is a whole different execution context so auto binding doesn't happen
  //   .bind(this),
  //     2000
  //   );

  setTimeout(() => {
    console.log(this); // or use arrow function
  }, 2000);
}

const person = new Person("Mohit");
console.log(person);
