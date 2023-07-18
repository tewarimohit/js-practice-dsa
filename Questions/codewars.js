// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
// Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side.
//  DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// solution

function DNAStrand(dna) {
  let result = "";
  const DNA = {
    A: "T",
    T: "A",
    G: "C",
    C: "G",
  };

  for (let symbol of dna) {
    result = result.concat(DNA[symbol]);
  }
  return result;
}

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

function getMiddle(s) {
  let centerPosition;
  if (s.length % 2 !== 0) {
    centerPosition = Math.floor(s.length / 2);

    return s[centerPosition];
  } else {
    centerPosition = s[s.length / 2 - 1] + s[s.length / 2];
    return centerPosition;
  }
}

// or

function getMiddle(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(seconds) {
  let HH = 0,
    MM,
    SS;
  MM = parseInt(seconds / 60);
  SS = parseInt(seconds % 60);
  if (MM > 59 && HH < 24) {
    HH = parseInt(MM / 60);
    MM = parseInt(MM % 60);
  }
  console.log(HH, MM, SS);
  if (SS < 10) {
    SS = `0${SS}`;
  }
  if (MM < 10) {
    MM = `0${MM}`;
  }
  if (HH < 10) {
    HH = `0${HH}`;
  }
  return `${HH}:${MM}:${SS}`;
}

// or

function humanReadable(seconds) {
  return [seconds / 3600, (seconds % 3600) / 60, seconds % 60]
    .map(function (v) {
      v = Math.floor(v).toString();
      return v.length == 1 ? "0" + v : v;
    })
    .join(":");
}

// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the missing
//  second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
  const newArr = [];

  if (str.length % 2 !== 0) {
    str = str.concat("_");
  }

  for (let i = 0; i < str.length; i += 2) {
    newArr.push(str[i] + str[i + 1]);
  }
  return newArr;
}

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

function alphabetPosition(text) {
  text = text.toLowerCase();
  let newText = "";
  const alphaCode = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  for (let character of text) {
    if (alphaCode[character] !== undefined)
      newText = newText + " " + alphaCode[character];
  }
  text = newText.trim();
  return text;
}
// or

function alphabetPosition(text) {
  const letters = "abcdefghijklmnopqrstuvwxyz";

  return text
    .toLowerCase()
    .split("")
    .filter((t) => letters.indexOf(t) > -1)
    .map((t) => letters.indexOf(t) + 1 || "")
    .join(" ");
}