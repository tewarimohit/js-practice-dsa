// Promise maker

function maker() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      //   resolve("fulfilled");
      reject("not fulfilled");
    });
  });
}

function onSuccess(data) {
  console.log(data);
}

function onError(err) {
  console.log("second " + err);
}

// Promise receiver

maker().then(onSuccess, onError);

// Async await must be used together
// only affects promise receiver
// can await any function that returns promise
// any function can be converted into async but it will now work asyncronously
// async function return a promise by default
// use try catch
