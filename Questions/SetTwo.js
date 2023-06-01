// Given a and b, your function should return the value of ab
// Example:
// Input: power(2,3) ––> Output: 8

const power = (num, times) => {
  let total = 1;
  if (times <= 0) {
    return "Please enter a positive integer";
  }
  for (let i = 1; i <= times; i++) {
    total *= num;
  }
  return total;
};

console.log(power(3, 4));
// Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80

const areaOfHexagon = (num) => {
  return (((3 * Math.sqrt(3)) / 2) * num * num).toFixed(2);
};

console.log(areaOfHexagon(10));
// Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3

const noOfWords = (sentence, method) => {
  if (method === 1) {
    if (sentence.length === 0) {
      return "Please write a sentence";
    }
    let count = 1;
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] === " ") {
        count++;
      }
    }
    return count;
  } else {
    // const wordsArray = sentence.split(" ");
    // return wordsArray.length;
  }
};

console.log(noOfWords("We are neoGrammers", 1));

// Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1
// (Hint: Lookup rest parameters in JavaScript)

const findMin = (...nums) => {
  return `Minimum number is : ${Math.min(...nums)}`;
};
console.log(findMin(3, 0, 90, 6, 1));
// Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMax(3,5) ––> Output: 5
// Input: findMax(3,5,9,1) ––> Output: 9
// (Hint: Lookup rest parameters in JavaScript)
const findMax = (...nums) => {
  return `Maximum number is : ${Math.max(...nums)}`;
};
console.log(findMax(3, 5, 9, 1));
// Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle

const findTriangle = (angle1, angle2, angle3) => {
  const angleSum = angle1 + angle2 + angle3;
  const equilateralAngle = 60;
  if (angleSum !== 180) {
    return "Not a Triangle";
  }
  if (angle1 === angle2 && angle1 === angle3 && angle2 === angle3) {
    return "Equilateral Triangle";
  }
  if (angle1 === angle2 || angle1 === angle3 || angle2 === angle3) {
    return "Isoceles Triangle";
  }
  if (angle1 !== angle2 && angle1 !== angle3 && angle2 !== angle3) {
    return "Scalene Triangle";
  }
};

console.log(findTriangle(110, 30, 40));

// Medium
// Given an array, your function should return the length of the array.
// Example:
// Input: arrayLength([1,5,3,7,8]) ––> Output: 5

const arrayLength = (arr) => {
  let count = 0;
  for (let i = 0; arr[i] !== undefined; i++) {
    count++;
  }
  return `Array length is :- ${count}`;
};
console.log(arrayLength([1, 5, 3, 7, 8]));

// Given an array and an item, your function should return the index at which the item is present.
// Example:
// Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2

const indexOf = (arr, num) => {
  let placeHolder;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      placeHolder = i;
    }
  }
  return `Number is in position ${placeHolder}`;
};
console.log(indexOf([1, 6, 3, 5, 8, 9], 3));
// Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
// Example:
// Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]

const replace = (array, numberToBeReplaced, numberThatWillReplace) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === numberToBeReplaced) {
      array[i] = numberThatWillReplace;
    }
  }
  return array;
};

console.log(replace([1, 5, 3, 5, 6, 8], 5, 10));

// Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]

const mergeArray = (arrayOne, arrayTwo) => {
  return [...arrayOne, ...arrayTwo];
};

console.log(mergeArray([1, 3, 5], [2, 4, 6]));

// Given a string and an index, your function should return the character present at that index in the string.
// Example:
// Input: charAt("neoGcamp", 4) ––> Output: c
const charAt = (string, position) => {
  if (position >= string.length || position < 0) {
    return "Please give a valid index";
  }
  for (let i = 0; i <= position; i++) {
    if (i === position) {
      return string[i];
    }
  }
};

console.log(charAt("neoGcamp", 7));
// Given two dates, your function should return which one comes before the other.
// Example:
// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021

const minDate = (dateOne, dateTwo) => {
  const dateOneArray = dateOne.split("/");
  const dateTwoArray = dateTwo.split("/");
  if (dateOneArray[2] < dateTwoArray[2]) {
    return dateOne;
  } else if (dateOneArray[2] === dateTwoArray[2]) {
    if (dateOneArray[1] < dateTwoArray[1]) {
      return dateOne;
    } else if (dateOneArray[1] === dateTwoArray[1]) {
      if (dateOneArray[0] < dateTwoArray[0]) {
        return dateOne;
      } else {
        return dateTwo;
      }
    } else {
      return dateTwo;
    }
  } else {
    return dateTwo;
  }
};
console.log(minDate("02/05/2021", "24/05/2020"));

// Advanced
// Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
// Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
// Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.

const encodeString = (string, encryptNum) => {
  let encodedArray = [];
  for (let i = 0; i < string.length; i++) {
    encodedArray.push(parseInt(string.charCodeAt(i)) + encryptNum);
  }
  return String.fromCharCode(...encodedArray);
};
console.log(encodeString("neogcamp", 2));

// Given a sentence, return a sentence with first letter of all words as capital.
// Example:
// Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers

const toSentenceCase = (sentence) => {
  let newSentence = [];
  const sentenceArray = sentence.split(" ");
  for (let i = 0; i < sentenceArray.length; i++) {
    console.log(sentenceArray[i][0]);
  }
  return newSentence.join(" ");
};
console.log(toSentenceCase("we are neoGrammers"));

// Given an array of numbers, your function should return an array in the ascending order.
// Example:
// Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]
// Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
// Example:
// Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen

// getPrime=(num)=>{
//   let count =0;
//   for(let i=2;i<=)
// }

const findNthPrime = (num) => {
  let i,
    primes = [2, 3],
    n = 5;
  const isPrime = (n) => {
    let i = 1,
      p = primes[i], // i=1,p=3
      limit = Math.ceil(Math.sqrt(n));
    while (p <= limit) {
      // true
      if (n % p === 0) {
        return false;
      }
      i += 1; // i=2
      p = primes[i]; //p=5
    }
    return true;
  };
  for (i = 2; i <= num; i += 1) {
    //7=7
    while (!isPrime(n)) {
      n += 2; // n=17
    }
    primes.push(n);
    // primes = [2, 3, 5, 7, 11, 13, 17, 19];
    n += 2; //n=21
  }
  return primes[num - 1];
};

console.log(findNthPrime(50));
