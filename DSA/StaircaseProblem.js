const stairCase = (num) => {
  const numberOfWays = [1, 2];
  for (let i = 2; i <= num; i++) {
    numberOfWays[i] = numberOfWays[i - 1] + numberOfWays[i - 2];
  }
  return numberOfWays[num - 1];
};

console.log(stairCase(1)); // 1
console.log(stairCase(2)); // 2
console.log(stairCase(3)); // 3
console.log(stairCase(4)); // 5

// Big O = O(n)
