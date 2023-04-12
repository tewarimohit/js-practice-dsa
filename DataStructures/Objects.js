// Objects :unordered collection of key-value pairs
// key must be either symbol or string data type while value can be of any data type
// to retrive a value we use corrosponding key
// can be done by dot or bracket notation.
// not iterable can't use for of loop.

const obj = {
  name: "John",
  age: "20",
  "new key": true,
  getName: function () {
    console.log(this.name);
  },
};

obj.hobby = "Football";
// delete obj.age;

console.log(obj);
console.log(obj.name);
console.log(obj["age"]);
console.log(obj["new key"]);
obj.getName();

// Object.keys() , values() , entries()

// Big O

// insert-> O(1)
// remove-> O(1)
// access-> O(1)
// search-> O(n)
// Object.keys()-> O(n)   all return arrays
// Object.values()-> O(n)
// Object.entries()-> O(n)
