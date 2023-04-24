// Promise maker

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

const options = {
  method: "GET",
  url: "https://dark-sky.p.rapidapi.com/%7Blatitude%7D,%7Blongitude%7D",
  params: {
    units: "auto",
    lang: "en",
  },
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "d8c5fdaf99msh63fc79f19160f19p131906jsn9da570027e07",
    "X-RapidAPI-Host": "dark-sky.p.rapidapi.com",
  },
};

const url = "https://goweather.herokuapp.com/weather/";

async function getWeather(city) {
  try {
    const response = await fetch(`${url}${city}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getWeather("Pune");
