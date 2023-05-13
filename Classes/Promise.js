// Promise maker

// const { log } = require("async");

// function maker() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       //   resolve("fulfilled");
//       reject("not fulfilled");
//     });
//   });
// }

// function onSuccess(data) {
//   console.log(data);
// }

// function onError(err) {
//   console.log("second " + err);
// }

// Promise receiver

// maker().then(onSuccess, onError);

// Async await must be used together
// only affects promise receiver
// can await any function that returns promise
// any function can be converted into async but it will now work asyncronously
// async function return a promise by default
// use try catch

// const options = {
//   method: "GET",
//   url: "https://dark-sky.p.rapidapi.com/%7Blatitude%7D,%7Blongitude%7D",
//   params: {
//     units: "auto",
//     lang: "en",
//   },
//   headers: {
//     "content-type": "application/octet-stream",
//     "X-RapidAPI-Key": "d8c5fdaf99msh63fc79f19160f19p131906jsn9da570027e07",
//     "X-RapidAPI-Host": "dark-sky.p.rapidapi.com",
//   },
// };

// const url = "https://goweather.herokuapp.com/weather/";

// async function getWeather(city) {
//   try {
//     const response = await fetch(`${url}${city}`);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getWeather("Pune");

const makePromise = (time) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (time === 3000) {
        res("Resolved in 3 sec");
      } else {
        rej("Rejected in 3 sec");
      }
    }, 3000);
  });
};

makePromise(3000)
  .then((res) => {
    console.log("resolved with response: " + res);
  })
  .catch((rej) => {
    console.log("rejected with response: " + rej);
  });

// const sum = (a) => {
//   console.log(a, "sum");

//   return (b) => {
//     console.log(b, "b");
//     if (b) {
//       console.log("If running");
//       return sum(a + b);
//     } else {
//       console.log("Else running");
//       return a;
//     }
//   };
// };

// console.log(sum(4)(2)(7)());

const getSum = (a) => {
  console.log(a);
  return (b) => {
    if (b) {
      return getSum(a + b);
    } else {
      return a;
    }
  };
};

console.log(getSum(3)(7)(9)(10)());

// function counter() {
//   let count = 0;

//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const myCounter = counter();

// myCounter(); // 1
// myCounter(); // 2
// myCounter(); // 3

const getPromise = (time) => {
  return new Promise((resolved, rejected) => {
    setTimeout(() => {
      if (time === 2000) {
        resolved("Resolved");
      } else {
        rejected("Rejected");
      }
    }, 2000);
  });
};

console.log(
  getPromise(2000)
    .then((data) => console.log(data))
    .catch((data) => console.log(data))
);
