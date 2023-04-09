const Prime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(Prime(1));
console.log(Prime(5));
console.log(Prime(4));

// Big O = O(Sqrt(n))

// Primality test :> integers larger than the square root not need to be checked, whenever n=a*b, one of the 2 factors is less
//  then or equal to square root of n
// ex: num=100 => 10X10 || 5X20 factor is equal or less than sq root and as factor is divisible by 100 primality can be checked.
// n=35 a=5 , b=7 ; sq root of n=5.91 so 5<5.91 /a<sq root
