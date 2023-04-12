// Set: Holds a collection of values. The values must be unique
// contains a mix of different data types. Can store string, boolean and even objects in same set.
// dynamically sized.
// do not maintain insertion order like arrays do
// are iterables and for of loop can be used.

// **Sets vs Arrays**

// Arrays can contain duplicate values while sets cannot
// Arrays maintain insertion orders while sets do not
// Searching and deleting elements in sets is faster than arrays.

const set = new Set([10, 20, 30, "Akash"]);

console.log(set);

set.add("Google"); // to add element
console.log(set.has("Google")); // to find element
console.log(set.size); // to calculate size
set.delete(30); // To delete an element
// set.clear(); //To empty a set

for (let item of set) {
  console.log(item);
}
