// Maps : Ordered pair of key-value pairs. Both key and values can be of any data type.
// to retrieve a value, corrosponding key can be used
// Maps are iterable. for of loop can be used.

// **Objects vs Maps**
// Objects are unordered while maps are ordered
// keys in objects can be strings or symbol data type only while in maps it can be of any data type.
// Objects has  a prototype and may contain few default keys which may collide with our own keys if not careful. A map does not contain any key by default.
// Maps are iterables while objects are not.
// Number of items must be determined manually in objects whereas size property is available on maps
// We can attach function in an object while maps are restricted to just storing data

const map = new Map([
  ["a", 12],
  ["b", 15],
]);

map.set(1, "Mohit"); // set values
map.set(true, "God");
console.log(map.has("b")); // find
console.log(map.get(true)); // get value of corrosponding key
map.delete("b"); // delete element
console.log(map.size); // calculate size
// map.clear(); //clear map

for (let [key, value] of map) {
  console.log(`${key}:${value}`);
}
