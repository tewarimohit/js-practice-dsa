// Arrays: can hold collection of values
// contain mix data types.
// Are resizable no need to declare size
// zero indexed and the order is maintained
// are iterable and can be used with for of loop

const arr = [1, 4, 6, 8, "Mohit", true, false, 7];

arr.push("Tewari");
arr.unshift(9);
arr.pop();
arr.shift();

for (const element of arr) {
  console.log(element);
}

console.log(arr.map((each) => each + 1));
console.log(arr.filter((each) => each < 5));
console.log(arr.slice(0, 3));
const splicedArr = arr.splice(5, 2, 9, 60);
console.log(arr.concat(splicedArr));

// map,filter, slice, splice, reduce, concat

// Big O=>

// Insert/remove from end -> O(1)
// Insert/remove from beginning -> O(n) as index value reset itself
// Access ->O(1)
// Search -> O(n) maximum element found in last place
// push,pop ->O(1)
// shift,unshift,slice,splice,concat ->O(n)
// forEach,map,filter,reduce ->O(n)
