const fact = (num) => {
  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  console.log(factorial);
};

fact(0);
fact(1);
fact(5);

// Big O = O(n)
