// function greet() {
//   return "Hello Buddy!!";
// }

// async function greet() {
//   return "Hello Buddy!!";
// }

// greet().then((res) => {
//   console.log(res);
// });

// async function add(x, y) {
//   if (typeof x !== "number" || typeof y !== "number") {
//     throw new Error("X and Y must be numbers");
//   }
//   return x + y;
// }

// function add(x, y) {
//   return new Promise((resolve, reject) => {
//     if (typeof x !== "number" || typeof y !== "number") {
//       reject("X and Y must be numbers");
//     }
//     resolve(x + y);
//   });
// }

// add(8, 8)
//   .then((res) => {
//     console.log("result " + res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function planet() {
//   const res = await axios("https://swapi.dev/api/planets/"); // wait until resolved, then resolved value will be stored in res variable
//   console.log(res.data);
// }

// planet();

// to handle either use catch or use try catch

// async function planet() {
//   try {
//     const res = await axios("https://swapi.dev/api/planets/");
//     console.log(res.data);
//   } catch (err) {
//     console.log("Error", err.message);
//   }
// }

// planet();

// Sequential Request

// async function Pokemon() {
//   const poke1 = await axios("https://pokeapi.co/api/v2/pokemon/1");
//   const poke2 = await axios("https://pokeapi.co/api/v2/pokemon/2");
//   const poke3 = await axios("https://pokeapi.co/api/v2/pokemon/3");
//   console.log(poke1.data);
//   console.log(poke2.data);
//   console.log(poke3.data);
// }

// Pokemon();

// Parallel Request

async function Pokemon() {
  const promise1 = axios("https://pokeapi.co/api/v2/pokemon/1");
  const promise2 = axios("https://pokeapi.co/api/v2/pokemon/2");
  const promise3 = axios("https://pokeapi.co/api/v2/pokemon/3");

  //   const poke1 = await promise1;
  //   const poke2 = await promise2;
  //   const poke3 = await promise3;
  //   or
  const results = await Promise.all([promise1, promise2, promise3]);
  console.log(results);

  //   console.log(poke1.data);
  //   console.log(poke2.data);
  //   console.log(poke3.data);
}

Pokemon();
