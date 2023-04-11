const arr = [-6, 8, 20, -2, 5, 4];

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
};

const bubbleSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
      }
    }
  }
  return arr;
};

console.log(bubbleSort(arr));
// Big O => O(n^2)
