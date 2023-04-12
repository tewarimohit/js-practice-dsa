const arr1 = [1, 2];
const arr2 = [3, 4, 5];

const cartesian = (arr1, arr2) => {
  const productArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      productArr.push([arr1[i], arr2[j]]);
    }
  }

  return productArr;
};

console.log(cartesian(arr1, arr2));

// Big O=> O(mXn) where m & n are length of both array.
