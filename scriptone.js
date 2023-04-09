// const a=4;
// const b=6;
// console.log(a+b);

// let laugh = ["haha", "hehe",]
// let newLaugh=[];
// let returnValue=laugh.push("Huhu","hey hey");
// console.log(laugh);
// let removedValue=laugh.pop();
//  newLaugh.push(removedValue);

// value type variable (primitive type)

let normalLaugh = "haha";
let menLaugh = normalLaugh;
console.log("normalLaugh ->", normalLaugh, "menLaugh->", menLaugh);

normalLaugh = "hehe";
console.log("normalLaugh ->", normalLaugh, "menLaugh->", menLaugh); // only changed value is changed

// Refrence type variable

let laugh = ["haha", "hehe"];
let newLaugh = laugh;
console.log("Laugh ->", laugh, "newLaugh->", newLaugh);

newLaugh.push("huhu");
console.log("Laugh ->", laugh, "newLaugh->", newLaugh); // changes both arrays

// const info={
//     username:'mohit',
//     email:'tewarimohit',
//     notifications:[],
// }

// if(!info.notifications.length){
//     console.log('No new notifications');
// }

// const score=[40, 50, 49, 93, 30]

// for(let i=0;i<score.length;i++){
//     console.log(i+1,score[i]);
// }

// const scores = [
//   { name: "harry", score: 50 },
//   { name: "ronald", score: 39 },
//   { name: "jack", score: 95 },
// ];

// for (let i = 0; i < scores.length; i++) {
//   let student = scores[i];
//   console.log(`${student.name} scored ${student.score}`);
// }

// For Of loop
// const score = [40, 50, 49, 93, 30];

// for (let el of score) {
//   console.log(el);
// }

const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];
// for (let i = 0; i < magicSquare.length; i++) {
//   let row = magicSquare[i];
//   let sum = 0;
//   for (let j = 0; j < row.length; j++) {
//     sum += row[j];
//   }
//   console.log(`The sum of ${row} is ${sum}`);
// }

// OR

// for (let row of magicSquare) {
//   let sum = 0;
//   for (let numbers of row) {
//     sum += numbers;
//   }
//   console.log(`The sum of ${row} is ${sum}`);
// }

// Valid Password function

// function isValidPassword(password, username) {
//   if (password.length < 8) {
//     return false;
//   }

//   if (password.indexOf(username) !== -1) {
//     return false;
//   }
//   if (password.indexOf(" ") !== -1) {
//     return false;
//   }
//   return true;
// }

// Or

// function isValidPassword(password, username) {
//   const tooShort = password.length < 8;
//   const tooSimilar = password.indexOf(username) !== -1;
//   const containsSpace = password.indexOf(" ") !== -1;

//   if (tooShort || tooSimilar || containsSpace) return false;
//   return true;
// }

// console.log(isValidPassword("mohi0kllj", "mohit95500"));

// Numbers Average

// const numbers = [75, 80, 76, 95, 100];

// function average(numberArray) {
//   avg = 0;
//   for (let nums of numberArray) {
//     avg += nums;
//   }

//   return avg / numberArray.length;
// }

// console.log(average(numbers));

// Pangram

const sentence = "The five boxing wizards jump quickly";

// function pangram(sentence) {
//   let lowercased = sentence.toLowerCase();
//   let alphabets = "abcdefghijklmnopqrstuvwxyz";

//   for (let char of alphabets) {
//     if (lowercased.indexOf(char) === -1) {
//       return false;
//     }
//   }
//   return true;
// }
// function pangram(sentence) {
//   let lowercased = sentence.toLowerCase();
//   let alphabets = "abcdefghijklmnopqrstuvwxyz";

//   for (let char of alphabets) {
//     if (!lowercased.includes(char)) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(pangram(sentence));

// Object of cards

// function pick(arr) {
//   const idx = Math.floor(Math.random() * arr.length);
//   return arr[idx];
// }

// function getCard() {
// const values = [
//   "A",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "10",
//   "J",
//   "Q",
//   "K",
// ];

// const cards = ["Spades", "Hearts", "Diamond", "Club"];
//   return { value: pick(values), suit: pick(cards) };
// }

// Function grumpus

// function grumpus() {
//   alert("Ahhh get away!!");
//   return () => {
//     console.log("jai mata di");
//   };
// }

// 1.  setTimeout(grumpus, 3000);

// 2.  setTimeout(()=>grumpus(), 3000);

// setTimeout(grumpus(), 3000);

// Maps

// const numbers = [30, 32, 34, 37];
// function objectNumbers(num) {
//   return {
//     value: num,
//     isEven: num % 2 === 0,
//   };
// }

// const result = numbers.map(objectNumbers);
// console.log(result);

// function makeDeck() {
//   const deck = [];
//   for (let value of values) {
//     for (let card of cards) {
//       deck.push({
//         value,
//         card,
//       });
//     }
//   }
//   return deck;
// }

// function drawCard(deck) {
//   return deck.pop();
// }

// const deck = makeDeck();

// const firstCardDrawn = drawCard(deck);

// we make an object

// const myDeck = {
//   values: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
//   cards: ["Spades", "Hearts", "Diamond", "Club"],
//   deck: [],
//   drawnCards: [],
//   makeDeck() {
//     const { values, cards, deck } = this;
//     for (let value of values) {
//       for (let card of cards) {
//         deck.push({
//           value,
//           card,
//         });
//       }
//     }
//   },
//   drawCard() {
//     const drawnCard = this.deck.pop();
//     this.drawnCards.push(drawnCard);
//     return drawnCard;
//   },
//   drawMultiple(number) {
//     drawnCards = [];
//     for (let i = 0; i < number; i++) {
//       drawnCards.push(this.drawCard());
//     }
//     return drawnCards;
//   },
//   shuffle() {
//     const { deck } = this;
//     for (let i = deck.length - 1; i > 0; i--) {
//       let j = Math.floor(Math.random() * (i + 1));
//       [deck[i], deck[j]] = [deck[j], deck[i]];
//     }
//   },
// };

// const makeDeck = () => {
//   return {
//     values: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
//     cards: ["Spades", "Hearts", "Diamond", "Club"],
//     deck: [],
//     drawnCards: [],
//     initializeDeck() {
//       const { values, cards, deck } = this;
//       for (let value of values) {
//         for (let card of cards) {
//           deck.push({
//             value,
//             card,
//           });
//         }
//       }
//     },
//     drawCard() {
//       const drawnCard = this.deck.pop();
//       this.drawnCards.push(drawnCard);
//       return drawnCard;
//     },
//     drawMultiple(number) {
//       drawnCards = [];
//       for (let i = 0; i < number; i++) {
//         drawnCards.push(this.drawCard());
//       }
//       return drawnCards;
//     },
//     shuffle() {
//       const { deck } = this;
//       for (let i = deck.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         [deck[i], deck[j]] = [deck[j], deck[i]];
//       }
//     },
//   };
// };

// const myDeck = makeDeck();
// myDeck.initializeDeck();
// console.log(myDeck);

// const name1 = {
//   firstName: "Mohit",
//   lastName: "Tewari",
// };

// const name2 = {
//   firstName: "Naman",
//   lastName: "Joshi",
// };

// const printName = function (city = "koi jagah", state = "koi Rajya") {
//   return `Name is ${this.firstName} ${this.lastName} I belong to ${city} in ${state} `;
// };

// printName.call(name2, "Haldwani", "Uttarakhand");
// printName.call(name1, "Dehradun", "UK");

// printName.apply(name2, ["Haldwani", "Uttarakhand"]);
// printName.apply(name1, ["Dehradun", "UK"]);

// const myName = printName.bind(name1);
// const hisName = printName.bind(name2);
// console.log(hisName());

// const aFunction = () => {
//   let prevState = "";
//   return function customUseEffect(cb, name) {
//     if (prevState !== name) {
//       cb();
//       prevState = name;
//     }
//   };
// };

// const customUseEffect = aFunction();
// console.log(customUseEffect);

// customUseEffect(() => {
//   console.log("ran");
// }, "text");
// customUseEffect(() => {
//   console.log("ran");
// }, "text");
// customUseEffect(() => {
//   console.log("ran");
// }, "tex");

// const useState = (name) => {
//   console.log(name);
// };

// useState("Hero");
