// Takes function as a parameter or returns a function to us
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newFilteredArray = arr.filter(multipleOfThree);

function multipleOfThree(el) {
  if (el % 3 === 0) {
    return el;
  }
}

console.log(newFilteredArray);
