// primitive(values)- number, string, boolean, null, undefined
// objects(refrences)- Object, Arrays, Function, Date, Regex

const a = 1; // variable stores value premitive as it is and compares it
const b = 1;
console.log(a === b);

const c = {}; // here c=#67894 memory address where object is created
const d = {}; // d=#79054  due to which c and d are not equal

console.log(c === d);

const e = function () {};
const f = function () {};
console.log(e === f); // different address hence false content doesn't matter

function incrementAge(age) {
  age = age + 1;
  return age;
}

const myAge = 10;

const moyAge = incrementAge(myAge);
const moyAge1 = incrementAge(moyAge);

console.log(moyAge1);
console.log(myAge); // myAge is intact because we passed value i.e 10  not the variable

function increment(user) {
  user.age = user.age + 1;
}

const me = { age: 20 };

increment(me); // refrence is passed and modefied
increment(me); // refrence is passed and modefied
increment(me); // refrence is passed and modefied
increment(me); // refrence is passed and modefied
console.log(me);

let one = 1;
let two = one;
console.log(one); //1
console.log(two); //1
one = 81;
console.log(one); //81
console.log(two); //1 as two was pointing to value of one
