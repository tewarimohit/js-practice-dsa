// const PowerOfTwo = (num) => {
//   if (num < 1) {
//     return false;
//   }
//   let temp = num;
//   while (temp >= 2) {
//     if (temp % 2 === 0) {
//       temp = temp / 2;
//     } else {
//       return false;
//     }
//   }
//   return true;
// };

const PowerOfTwoBitwise = (num) => {
  if (num < 1) {
    return false;
  }
  return (num & (num - 1)) === 0;
};
// like 2^4 & 2^3 in binary will always give 0

console.log(PowerOfTwoBitwise(1));
console.log(PowerOfTwoBitwise(2));
console.log(PowerOfTwoBitwise(5));
console.log(PowerOfTwoBitwise(8));

// Value is halved in each iteration.
// Time complixity BigO => O(logn)
// For bitwise Big O=> O(1)
