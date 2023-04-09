const btn = document.querySelector("#click");

// btn.onclick = function () {
//   console.log("you clicked me go away!!!!");
// };

// btn.ondblclick = function () {
//   console.log("Hushhh go away!!");
// };

const clickHandler = () => {
  console.log("You clicked inside event listener.");
};

const mouseOverHandler = () => {
  btn.innerText = "Stop touching me!!";
};
const mouseOutHandler = () => {
  btn.innerText = "Click";
};

btn.addEventListener("click", clickHandler);
btn.addEventListener("mouseover", mouseOverHandler);
btn.addEventListener("mouseout", mouseOutHandler);

window.addEventListener("scroll", function () {
  console.log("Stop scrolling");
});
