const arr = [6, -8, 20, -2, 5, 4];

const quickSort = (arr) => {
  // base
  if (arr.length < 2) {
    return arr;
  }
  // last element is pivot element after it divide, sort and merge. use recursion
  let pivotElement = arr[arr.length - 1];
  let leftArray = [];
  let rightArray = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivotElement) {
      leftArray.push(arr[i]);
    } else {
      rightArray.push(arr[i]);
    }
  }
  return [...quickSort(leftArray), pivotElement, ...quickSort(rightArray)];
};

console.log(quickSort(arr));
// worst case =>O(n^2) array is already sorted
// avg case =>O(nlogn)
