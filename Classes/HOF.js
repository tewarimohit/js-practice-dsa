// Takes a function as a parameter or returns a function

console.log("How are you outside");
const fun = function () {
  console.log("How are you settimeout");
  return () => {
    console.log("passed return value of fun");
    return () => {
      console.log("most inner function will work");
    };
  };
};

setTimeout(fun, 2000); // passing a refrence will work.
setTimeout(fun(), 3000); // here if we invoke the function we are now passing the return value of function in settimeout,
// Here the returned function if passed will work as settimeout function .
setTimeout(fun()(), 4000); // return value of executed returned function of fun will work for settimeout

// moreHOF

const array = [4, 6, 7, 8, 10];

// array.filter(function needed to communicate what to do with the array values or how to filter)
// we can do it tradional way as well with for loop but to minimise the repetation we use higher order function and abstract those extra steps
// all those function take function as parameter are called first order function map, filter, setTimeout etc
