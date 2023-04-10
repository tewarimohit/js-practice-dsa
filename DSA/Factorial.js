const fact = (num) => {
  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  console.log(factorial);
};

const factorialRecursion = (num) => {
  if (num === 0) {
    return 1;
  }
  return num * factorialRecursion(num - 1);
};

fact(0);
fact(1);
fact(5);

console.log(factorialRecursion(0));
console.log(factorialRecursion(1));
console.log(factorialRecursion(5));

// Big O = O(n) in both cases
// n!=n*(n-1)!
