// Premitive assigned by value - Number, Boolean, String, null , undefined.
// Object assigned by references(address) - Array, Function, Object, Date, Regex

const a = 1;
const b = 1;
console.log(a === b);

const c = [1]; // may be my nose
const d = [1]; // may be my tongue
console.log(c === d); // looks identical but are not point to different address

function increment(age) {
  return (age = age + 1);
}

const myAge = 11;

console.log(increment(myAge)); // inside function increment but original remains same i.e no side-effect
console.log(myAge); // Original remains same i.e no side-effect

function increaseAge(user) {
  return (user.age = user.age + 1);
}

const newUser = { age: 12 };
console.log(increaseAge(newUser)); // inside function value changes but original also changes and that is side-effect

console.log(newUser); // by reference original value got changed and this is side-effect

let one = 1;
let two = one;
console.log(one);
console.log(two);

one = 20;

console.log(one);
console.log(two); // two is still one because it was pointing to value not variable (copied by value)

let me = { age: 20 };
let you = me;
console.log(me);
console.log(you);

me = { age: 80 }; // entirely different assignment not that earlier me
console.log(me.age);

me.age = 90;
console.log(me);
console.log(you); // you also changed because it was pointing to the address of me(copied by reference)
