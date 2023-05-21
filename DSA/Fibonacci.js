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
  if (num < 1) {
    console.log(arr[0]);
  }
  for (let i = 2; i <= num; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  console.log(arr);
};

const fibonacciRecursion = (num) => {
  if (num < 2) {
    return num;
  }
  return fibonacciRecursion(num - 1) + fibonacciRecursion(num - 2);
};

fiboSeries(1);
console.log(fibonacciRecursion(7)); // not a good solution
console.log(fibonacciRecursion(25));

// Big O = O(n)
// Big O = O(2^n)
// Fn=F(n-1)+F(n-2)
