const arr = [6, -8, 20, -2, 5, 4];

const mergeSort = (arr) => {
  // base
  if (arr.length < 2) {
    return arr;
  }

  let middleElement = Math.floor(arr.length / 2);
  let leftArrray = arr.slice(0, middleElement);
  let rightArray = arr.slice(middleElement);
  return merge(mergeSort(leftArrray), mergeSort(rightArray));
};

const merge = (left, right) => {
  // Divide compare and merge
  let sortedArray = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
  return [...sortedArray, ...left, ...right];
};

console.log(mergeSort(arr));
// Big O =>O(nlogn)  best time complexity
