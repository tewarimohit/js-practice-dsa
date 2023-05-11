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
