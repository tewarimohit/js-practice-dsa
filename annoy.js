const btn = document.querySelector("#btn");

const mouseOverHandler = () => {
  console.log("Mouse overed me");
  const width = Math.floor(Math.random() * innerWidth);
  const height = Math.floor(Math.random() * innerHeight);

  btn.style.left = `${width}px`;
  btn.style.top = `${height}px`;
};

btn.addEventListener("mouseover", mouseOverHandler);
btn.addEventListener("click", function () {
  btn.innerText = "You got me!!";
  document.body.style.backgroundColor = "red";
});
