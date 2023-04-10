const arr = [-5, 2, 10, 4, 6];

// const linearSearch = (num) => {
//   return arr.indexOf(num);
// };

const linearSearch = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
};

console.log(linearSearch(arr, 10));
console.log(linearSearch(arr, 6));
console.log(linearSearch(arr, 20));

// Big O = O(n)
