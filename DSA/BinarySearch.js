// Works only on sorted arrays
const arr = [-5, 2, 4, 6, 10];

// const binarySearch = (arr, num) => {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((right + left) / 2);
//     if (arr[mid] === num) {
//       return mid;
//     }

//     if (num < arr[mid]) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return -1;
// };

// Recursion

const binarySearch = (arr, num) => {
  function search(arr, num, left, right) {
    const mid = Math.floor((left + right) / 2);
    if (left > right) {
      return -1;
    }
    if (arr[mid] === num) {
      return mid;
    } else if (num < arr[mid]) {
      return search(arr, num, left, mid - 1);
    } else {
      return search(arr, num, mid + 1, right);
    }
  }

  return search(arr, num, 0, arr.length - 1);
};

console.log(binarySearch(arr, 10));
console.log(binarySearch(arr, 6));
console.log(binarySearch(arr, 20));
console.log(binarySearch(arr, 28));
// Big O => O(logn)
