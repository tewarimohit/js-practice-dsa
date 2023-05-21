// Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

const arrayOfNumbers = [5, 13, 7, 21, 48];

const sum = (sum, curr) => {
  return (sum += curr);
};
console.log(`The sum of numbers is : ${arrayOfNumbers.reduce(sum)}`);

// Write a program to take a number input from user and determine whether the number is odd or even.

const inputValue = document.querySelector("#number");
const button = document.querySelector("#btn");
let outputText = document.querySelector("#result");

button.addEventListener("click", (event) => {
  if (inputValue.value % 2 === 0) {
    outputText.innerText = `Number is even.`;
  } else {
    outputText.innerText = `Number is odd.`;
  }
});

// Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

// Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

// Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.
const findMax = (...nums) => {
  let max = nums[0];
  let min = nums[0];
  for (let num of nums) {
    if (num > max) {
      max = num;
    }
    if (num < min) {
      min = num;
    }
  }
  return {
    max,
    min,
  };
};

console.log(findMax(10, 40, 37, 60, 90, 10));

// Write program to take a month as an input from the user and find out whether the month has 31 days or not.

const months = {
  january: 31,
  february: 28,
  march: 31,
  april: 30,
  may: 31,
  june: 30,
  july: 31,
  august: 31,
  september: 30,
  october: 31,
  november: 30,
  december: 31,
};

const findOutDaysIn = (month) => {
  return `${months[month.toLowerCase()]} days in ${month}.`;
};

console.log(findOutDaysIn("January"));

// Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz",
//  for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

// Your output should look something like this 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 .....

let outputArray = [];
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    outputArray.push("FizzBuzz");
  } else if (i % 5 === 0) {
    outputArray.push("Buzz");
  } else if (i % 3 === 0) {
    outputArray.push("Fizz");
  } else {
    outputArray.push(i);
  }
}
console.log(outputArray);

// Print the following star pattern :-

// *
// * *
// * * *
// * * * *
// * * * * *

for (let i = 0; i < 5; i++) {
  let string = "";
  for (let j = 0; j <= i; j++) {
    string = string + " *";
  }
  console.log(string);
}

// Write a program to take a number input from user and print multiplication table 12 times for that number.

const getTable = (num, times) => {
  if (times <= 0) {
    console.log("Please enter a positive number");
    return;
  }
  for (let j = 1; j <= times; j++) {
    console.log(`Table ${j} ${j === 1 ? "time" : "times"}`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${num} X ${i} = ${num * i}`);
    }
    console.log("~~~~~~~~~~~~~~~~");
  }
};

getTable(4, 12);

// Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

const fibonacci = (num) => {
  let arr = [0, 1];
  if (num < 1) {
    return [num];
  }

  for (let i = 2; i <= num; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
};
console.log(fibonacci(0));

// Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

// Write a Program to take a number input from user and find if the number is Prime or not.

// Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.
