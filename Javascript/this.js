//  this points to the object on just the left side of from where it is called/ or just points to that object

function learn() {
  return ` Hi, ${this.name} here.`;
}

const me = {
  name: " Mohit",
  learn,
};

const he = {
  name: "Aman",
  learn,
};

// no matter function is same

console.log(me.learn()); // points me object
console.log(he.learn()); // points he object

// bind
// whatever bind takes as a parameter ex object binds that object with this of new function

const ilearn = learn.bind(me); // binds and give a new function while call directly gives an output rather giving a function
console.log(ilearn());

// learn.call(1,arg2)
// learn.apply(1,[arr])

// constructor fn

function Learning(n) {
  //    const this={};
  this.name = n;
  console.log(this);

  this.subject = function () {
    return `${this.name} is learning`;
  };

  setTimeout(
    function () {
      // callback
      console.log(this);
    }.bind(this), // binds with outer this but arrow works different for callbacks
    1000
  );

  //   return this; //under the hood
}

const mine = new Learning("Mohit");
console.log(mine.subject());

// console.log(Learning("ko"));
