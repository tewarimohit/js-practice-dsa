// const fibo = (num) => {
//   let a = 0,
//     b = 1,
//     temp = 0;
//   for (let i = 2; i <= num; i++) {
//     temp = a + b;
//     a = b;
//     b = temp;
//   }
//   return temp;
// };

// console.log(fibo(7));

const fiboSeries = (num) => {
  let arr = [0, 1];
  for (let i = 2; i <= num; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  console.log(arr);
};

fiboSeries(7);

// Big O = O(n)
