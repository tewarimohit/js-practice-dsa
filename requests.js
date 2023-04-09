// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//        // Typical action to be performed when the document is ready:
//        document.getElementById("demo").innerHTML = xhttp.responseText;
//     }
// };
// xhttp.open("GET", "filename", true);
// xhttp.send();

// Examples

// const firstRequest = new XMLHttpRequest();

// firstRequest.addEventListener("load", function () {
//   const data = JSON.parse(this.responseText);
//   const film = data.results[0].films[0];

//   const filmRequest = new XMLHttpRequest();

//   filmRequest.addEventListener("load", function () {
//     const filmData = JSON.parse(this.responseText);
//     console.log(filmData);
//   });

//   filmRequest.addEventListener("error", function () {
//     console.log("Second Request Error!!");
//   });

//   filmRequest.open("GET", film);
//   filmRequest.send();
//   console.log("Film Request send");
// });

// firstRequest.addEventListener("error", () => {
//   console.log("Error!!");
// });

// firstRequest.open("GET", "https://swapi.dev/api/planets/");
// firstRequest.send();
// console.log("First Request Sent");

// Fetch

// const checkStatusAndParse = (response) => {
//   if (!response.ok) {
//     throw new Error(`Error occured status code : ${response.status}`);
//   } else {
//     return response.json();
//   }
// };

// const getMoviesData = (data) => {
//   console.log("Loaded 10 Planets");
//   for (let movie of data.results) {
//     console.log(movie.name);
//   }
//   return Promise.resolve(data.next);
// };

// const fetchMorePlanets = (url = "https://swapi.dev/api/planets/") => {
//   return fetch(url);
// };

// fetchMorePlanets()
//   .then(checkStatusAndParse)
//   .then(getMoviesData)
//   .then(fetchMorePlanets)
//   .then(checkStatusAndParse)
//   .then(getMoviesData)
//   .catch((err) => {
//     console.log(err); // only runs in case of network failure otherwise .then will run
//   });

// Axios

const fetchNextPlanets = (url = "https://swapi.dev/api/planets/") => {
  return axios.get(url);
};

const getPlanets = ({ data }) => {
  for (let planet of data.results) {
    console.log(planet.name);
  }
  return Promise.resolve(data.next);
};

fetchNextPlanets()
  .then(getPlanets)
  .then(fetchNextPlanets)
  .then(getPlanets)
  .catch(() => {
    console.log("ERRRRRRRRRR!!!");
  });
