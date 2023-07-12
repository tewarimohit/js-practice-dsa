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
