const colors = ["red", "green", "blue", "yellow", "violet"];

const container = document.querySelector("#boxes");

const colorHandler = function () {
  const h1 = document.querySelector("h1");

  h1.style.color = this.style.backgroundColor;
};

for (let color of colors) {
  const box = document.createElement("div");
  box.style.backgroundColor = color;
  container.appendChild(box);
  box.classList.add("box");
  box.addEventListener("click", colorHandler);
}
console.log("hello");
const input = document.querySelector("#input");
const listContainer = document.querySelector("#items");
const listHandler = function (event) {
  if (event.key === "Enter") {
    if (!event.target.value) return;
    const newItem = document.createElement("li");
    listContainer.appendChild(newItem);
    newItem.innerText = event.target.value;
    event.target.value = "";
  }
};

input.addEventListener("keydown", listHandler);

// const getPromise = new Promise((resolve, reject) => {
//   const rand = Math.random();
//   if (rand < 0.5) {
//     resolve();
//   } else {
//     reject();
//   }
// })
//   .then(() => {
//     console.log("Yey promise is resolved!!");
//   })
//   .catch(() => {
//     console.log("Dhokha hua h :(");
//   });
