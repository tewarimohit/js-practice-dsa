let pizza;

function orderPizza(callback) {
  pizza = "🍕";
  console.log("Pizza is ordered!!");
  setTimeout(() => {
    callback(pizza);
  }, 2000);
}

function makePizza(pizza) {
  console.log(`Here is your ${pizza}`);
}

orderPizza(makePizza);
console.log("call HOme");
