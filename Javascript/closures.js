// Closures remember the outer function scope even after it's Creation time

// 1) function student(n) {
//   const name = n;

//   function learning() {
//     console.log(`Hi, ${name} is Learning..`);
//   }
//   function learningWhat() {
//     console.log(`${name} is Learning.. Closures`);
//   }
//   learning();
//   learningWhat();
// }

// OR

// 2) function student(name) {
//   // Dynamic
//   function learning() {
//     console.log(`Hi, ${name} is Learning..`);
//   }
//   function learningWhat() {
//     console.log(`${name} is Learning.. Closures`);
//   }
//   learning();
//   learningWhat();
// }

//3) Future usecase dependent
function student(name) {
  // Dynamic
  function learning() {
    console.log(`Hi, ${name} is Learning..`); // Name is gone but it still remembers whenever a new instance is created and function is executed
  }
  function learningWhat() {
    console.log(`${name} is Learning.. Closures`);
  }
  return {
    learning,
    learningWhat,
  };
}

const Mohit = student("Mohit");
const Aman = student("Aman");
Mohit.learningWhat();
Aman.learning();

// practical

function clickHandler(size) {
  // size passed will be remembered by inner function
  return function () {
    document.body.style.fontSize = `${size}px`;
  };
}

document.getElementById("size-12").onclick = clickHandler(12); // should not be envoked as clickhandler takes a function but i have to then closure comes to rescue
